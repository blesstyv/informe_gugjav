import './App.css'
import { docs } from './docsData'

function inlineFormat(text) {
  return text
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
      .map((cell) => cell.trim())
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
      html += '</ul>'
      listOpen = false
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
      html += `${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}\n`
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

    const listMatch = trimmed.match(/^[-*+]\s+(.*)$/)
    if (listMatch) {
      flushParagraph()
      flushTable()
      if (!listOpen) {
        listOpen = true
        html += '<ul>'
      }
      html += `<li>${inlineFormat(listMatch[1].trim())}</li>`
      return
    }

    if (trimmed.includes('|')) {
      flushParagraph()
      closeList()
      tableRows.push(trimmed)
      return
    }

    if (buffer) {
      buffer += ' ' + trimmed
    } else {
      buffer = trimmed
    }
  })

  flushParagraph()
  closeList()
  flushTable()
  return html
}

function App() {
  const docsWithHtml = docs.map((doc) => ({
    ...doc,
    html: doc.content.trim() ? markdownToHtml(doc.content) : '',
  }))

  return (
    <main className="page" id="top">
      <header className="page-header">
        <div>
          <span className="tag">Informe GUGJAV</span>
          <h1>Página de informe basada en los archivos Markdown</h1>
          <p>
            Esta página muestra automáticamente el contenido disponible de la carpeta{' '}
            <strong>docs_gugjav</strong>. Cada archivo Markdown se convierte y se despliega como
            sección independiente.
          </p>
        </div>
        <aside className="toc">
          <h2>Contenido</h2>
          <ul>
            {docsWithHtml.map((doc) => (
              <li key={doc.id}>
                <a href={`#${doc.id}`}>{doc.title}</a>
              </li>
            ))}
          </ul>
        </aside>
      </header>

      <section className="content">
        {docsWithHtml.map((doc) => (
          <article key={doc.id} id={doc.id} className="doc-section">
            <h2>{doc.title}</h2>
            {doc.html ? (
              <div
                className="markdown-body"
                dangerouslySetInnerHTML={{ __html: doc.html }}
              />
            ) : (
              <p className="empty">Este documento está vacío o no contiene texto.</p>
            )}
            <a className="top-link" href="#top">
              Volver arriba
            </a>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
