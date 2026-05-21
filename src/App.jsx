import './App.css'

const rawDocs = import.meta.globEager('../docs_gugjav/*.md?raw')

const docs = Object.entries(rawDocs)
  .map(([path, raw]) => {
    const filename = path.split('/').pop()
    const id = filename.replace(/\.md$/i, '')
    // Vite may return the raw string directly or as the module's default export
    const rawContent = raw && typeof raw === 'object' && 'default' in raw ? raw.default : raw
    const content = String(rawContent ?? '').trim()
    const title = content.match(/^#\s+(.+)/m)?.[1]?.trim() || id

    return {
      id,
      filename,
      title,
      content,
    }
  })
  .sort((a, b) => a.filename.localeCompare(b.filename))

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function inlineFormat(text) {
  const safeText = escapeHtml(text)
  return safeText
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
}

function buildTable(rows) {
  if (!rows.length) return ''
  const parsed = rows.map((row) =>
    row
      .trim()
      .replace(/^\||\|$/g, '')
      .split('|')
      .map((cell) => cell.trim()),
  )

  const hasSeparator = parsed[1] && parsed[1].every((cell) => /^:?-+:?$/.test(cell))
  const headers = hasSeparator ? parsed[0] : parsed[0]
  const body = hasSeparator ? parsed.slice(2) : parsed.slice(1)

  let html = '<table><thead><tr>'
  headers.forEach((cell) => {
    html += `<th>${inlineFormat(cell)}</th>`
  })
  html += '</tr></thead>'

  if (body.length) {
    html += '<tbody>'
    body.forEach((row) => {
      if (!row.some((cell) => cell.length)) return
      html += '<tr>'
      row.forEach((cell) => {
        html += `<td>${inlineFormat(cell)}</td>`
      })
      html += '</tr>'
    })
    html += '</tbody>'
  }

  html += '</table>'
  return html
}

function markdownToHtml(raw) {
  const lines = raw.split(/\r?\n/)
  let html = ''
  let buffer = ''
  let listOpen = false
  let listType = ''
  let tableRows = []
  let inCode = false

  const flushParagraph = () => {
    if (buffer.trim()) {
      html += `<p>${inlineFormat(buffer.trim())}</p>`
      buffer = ''
    }
  }

  const closeList = () => {
    if (listOpen) {
      html += `</${listType}>`
      listOpen = false
      listType = ''
    }
  }

  const flushTable = () => {
    if (tableRows.length) {
      html += buildTable(tableRows)
      tableRows = []
    }
  }

  lines.forEach((line) => {
    const trimmed = line.trim()

    if (trimmed.startsWith('```')) {
      flushParagraph()
      closeList()
      flushTable()
      inCode = !inCode
      html += inCode ? '<pre><code>' : '</code></pre>'
      return
    }

    if (inCode) {
      html += `${escapeHtml(line)}\n`
      return
    }

    if (!trimmed) {
      flushParagraph()
      closeList()
      flushTable()
      return
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.*)$/)
    if (headingMatch) {
      flushParagraph()
      closeList()
      flushTable()
      const level = Math.min(3, headingMatch[1].length)
      html += `<h${level}>${inlineFormat(headingMatch[2].trim())}</h${level}>`
      return
    }

    const blockquoteMatch = trimmed.match(/^>\s+(.*)$/)
    if (blockquoteMatch) {
      flushParagraph()
      closeList()
      flushTable()
      html += `<blockquote>${inlineFormat(blockquoteMatch[1].trim())}</blockquote>`
      return
    }

    const unorderedMatch = trimmed.match(/^[-*+]\s+(.*)$/)
    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/)
    if (unorderedMatch || orderedMatch) {
      flushParagraph()
      flushTable()
      const currentType = orderedMatch ? 'ol' : 'ul'
      if (!listOpen || listType !== currentType) {
        closeList()
        listType = currentType
        listOpen = true
        html += `<${currentType}>`
      }
      html += `<li>${inlineFormat((unorderedMatch || orderedMatch)[1].trim())}</li>`
      return
    }

    if (trimmed.includes('|')) {
      flushParagraph()
      closeList()
      tableRows.push(trimmed)
      return
    }

    buffer += buffer ? ` ${trimmed}` : trimmed
  })

  flushParagraph()
  closeList()
  flushTable()
  return html
}

function App() {
  const docsWithHtml = docs.map((doc) => ({
    ...doc,
    html: doc.content ? markdownToHtml(doc.content) : '',
  }))

  const totalSections = docsWithHtml.length
  const totalWords = docsWithHtml.reduce(
    (sum, doc) => sum + (doc.content.match(/\b\w+\b/g)?.length || 0),
    0,
  )

  return (
    <div className="page" id="top">
      <header className="page-header">
        <div className="title-block">
          <span className="tag">Informe GUGJAV</span>
          <h1>Informe BancoEstado 2020</h1>
          <p className="subtitle">
            Un informe completo con la información disponible en <strong>docs_gugjav</strong>.
            Navega por cada sección para revisar el análisis legal, regulatorio, de delitos, datos
            personales y conclusiones.
          </p>
          <div className="stats-row">
            <div>{totalSections} secciones</div>
            <div>{totalWords} palabras</div>
          </div>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div className="toc">
            <div className="toc-title">Índice</div>
            <nav>
              <ul>
                {docsWithHtml.map((doc, index) => (
                  <li key={doc.id}>
                    <a href={`#${doc.id}`}>
                      <span>{index + 1}</span>
                      {doc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <main className="docs">
          {docsWithHtml.length === 0 ? (
            <div className="empty-state">No se encontró contenido en docs_gugjav.</div>
          ) : (
            docsWithHtml.map((doc) => (
              <article key={doc.id} id={doc.id} className="doc-card">
                <div className="doc-header">
                  <div className="doc-number">{doc.filename.replace('.md', '')}</div>
                  <h2>{doc.title}</h2>
                </div>
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: doc.html }} />
                <div className="doc-actions">
                  <a className="top-link" href="#top">
                    Volver arriba
                  </a>
                </div>
              </article>
            ))
          )}
        </main>
      </div>

      <footer className="page-footer">
        <p>Contenido generado desde Markdown local de la carpeta docs_gugjav.</p>
      </footer>
    </div>
  )
}

export default App
