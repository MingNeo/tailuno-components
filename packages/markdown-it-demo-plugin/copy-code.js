import './custom.css'

export function setupCopyCode() {
  if (typeof window !== 'undefined') {
    document.removeEventListener('click', copyCode)
    document.addEventListener('click', copyCode)
  }
}

function copyCode(e) {
  const el = e.target.closest('.demo-code-copy')
  if (!el) return

  const parent = el.parentElement
  const code = parent.querySelector('code')
  if (!code) return

  const text = code.textContent

  navigator.clipboard.writeText(text).then(() => {
    el.classList.add('copied')
    setTimeout(() => {
      el.classList.remove('copied')
    }, 2000)
  })
}
