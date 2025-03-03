// 添加生成demo HTML的函数
export const generateDemoHTML = (htmlContent, highlightedCode, attrs) => {
  return `
<div class="demo-wrapper vp-raw">
  <div class="demo-preview">
    ${htmlContent}
  </div>
  <details class="demo-details">
    <summary class="demo-summary">
      <div class="demo-summary-inner">
        <div class="demo-summary-inner-left">
          <span>${attrs.title}</span>
        </div>
        <div class="demo-summary-inner-right">
          <svg class="demo-icon" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
          <span>查看代码</span>
        </div>
      </div>
    </summary>
    <div class="demo-code-wrapper">
      <div class="demo-code language-html">
        <button class="demo-code-copy" title="复制代码">
          <svg class="copy-icon" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor"
              d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3zm0 2H5v12h10v-2H7V8zm2-2h8v10h2V4H9v2z" />
          </svg>
          <svg class="success-icon" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </button>
        ${highlightedCode}
      </div>
    </div>
  </details>
</div>`
}
