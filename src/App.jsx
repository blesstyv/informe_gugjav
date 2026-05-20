import './App.css'
import { docs } from './docsData'

function inlineFormat(text) {
  return text
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
}

function markdownToHtml(raw) {
  const lines = raw.split(/\r?\n/)
  let html = ''
  let buffer = ''
  let listOpen = false

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

  lines.forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed) {
      flushParagraph()
      closeList()
      return
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.*)$/)
    if (headingMatch) {
      flushParagraph()
      closeList()
      const level = Math.min(3, headingMatch[1].length)
      html += `<h${level}>${inlineFormat(headingMatch[2].trim())}</h${level}>`
      return
    }

    const listMatch = trimmed.match(/^[-*+]\s+(.*)$/)
    if (listMatch) {
      flushParagraph()
      if (!listOpen) {
        listOpen = true
        html += '<ul>'
      }
      html += `<li>${inlineFormat(listMatch[1].trim())}</li>`
      return
    }

    const codeFenceMatch = trimmed.match(/^```\s*(.*)$/)
    if (codeFenceMatch) {
      flushParagraph()
      closeList()
      html += '<pre><code>'
      return
    }

    if (trimmed.startsWith('>')) {
      flushParagraph()
      closeList()
      html += `<blockquote>${inlineFormat(trimmed.slice(1).trim())}</blockquote>`
      return
    }

    if (trimmed.startsWith('```')) {
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
            <strong>docs_gugjav</strong>. Los documentos vacíos aparecen como secciones
            reservadas para completar.
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
