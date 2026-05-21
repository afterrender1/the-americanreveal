export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getReadingTime(content: string): number {
  return Math.max(1, Math.ceil(content.split(/\s+/).length / 200))
}

export function renderContent(content: string): string {
  const lines = content.split('\n')
  let html = ''
  let inList = false
  let buffer = ''

  const flushBuffer = () => {
    if (buffer.trim()) {
      html += `<p>${processInline(buffer.trim())}</p>\n`
      buffer = ''
    }
  }

  for (const line of lines) {
    if (line.startsWith('# ')) {
      flushBuffer()
      if (inList) {
        html += '</ul>\n'
        inList = false
      }
      html += `<h2>${processInline(line.slice(2))}</h2>\n`
    } else if (line.startsWith('## ')) {
      flushBuffer()
      if (inList) {
        html += '</ul>\n'
        inList = false
      }
      html += `<h3>${processInline(line.slice(3))}</h3>\n`
    } else if (line.startsWith('- ')) {
      flushBuffer()
      if (!inList) {
        html += '<ul>\n'
        inList = true
      }
      html += `<li>${processInline(line.slice(2))}</li>\n`
    } else if (line === '') {
      flushBuffer()
      if (inList) {
        html += '</ul>\n'
        inList = false
      }
    } else {
      buffer += (buffer ? ' ' : '') + line
    }
  }

  flushBuffer()
  if (inList) html += '</ul>\n'

  return html
}

function processInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
}

/** Handles both legacy markdown-like format and new TipTap HTML content. */
export function getContentHtml(content: string): string {
  if (!content) return ''
  return content.trimStart().startsWith('<') ? content : renderContent(content)
}
