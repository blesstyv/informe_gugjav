const modules = import.meta.glob('../docs_gugjav/*.md?raw', { eager: true })

function getFilename(path) {
  return path.split('/').pop()
}

function normalizeTitle(content, filename) {
  const heading = content.match(/^#{1,3}\s+(.*)/m)
  if (heading) {
    return heading[1].trim()
  }

  return filename
    .replace(/^\d+_/, '')
    .replace(/\.md$/i, '')
    .replace(/_/g, ' ')
}

export const docs = Object.entries(modules)
  .map(([path, raw]) => {
    const filename = getFilename(path)
    return {
      id: filename.replace(/\.md$/i, ''),
      filename,
      title: normalizeTitle(raw, filename),
      content: String(raw),
    }
  })
  .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }))
