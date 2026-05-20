const rawDocs = import.meta.glob('../docs_gugjav/*.md?raw', { eager: true })

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

export const docs = Object.entries(rawDocs)
  .map(([path, content]) => {
    const filename = path.split('/').pop()
    return {
      id: filename.replace(/\.md$/i, ''),
      filename,
      title: normalizeTitle(content, filename),
      content,
    }
  })
  .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }))
