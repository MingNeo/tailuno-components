// 全局事件处理器，引入此文件自动注册，只注册一次
// 全局入口或组件中引入此文件皆可，不限html或vue或react
function initGlobalSelectHandler() {
  if (window._selectHandlerInitialized) return

  document.addEventListener('click', (e) => {
    const selectContainer = e.target.closest('.tailuno-select')
    if (!selectContainer) {
      // 点击外部，关闭所有下拉框
      document.querySelectorAll('.tailuno-select[data-open="true"]')
        .forEach(container => container.dataset.open = 'false')
      return
    }

    const button = e.target.closest('button')
    const option = e.target.closest('.option-item')

    if (button) {
      // 切换下拉框状态
      const isOpen = selectContainer.dataset.open === 'true'
      selectContainer.dataset.open = !isOpen
    } else if (option) {
      // 更新选中状态
      selectContainer.querySelectorAll('.option-item').forEach(item => {
        item.removeAttribute('data-selected')
      })
      option.setAttribute('data-selected', 'true')

      // 更新显示文本
      selectContainer.querySelector('button span').textContent = option.textContent

      // 关闭下拉框
      selectContainer.dataset.open = 'false'
    }
  })

  window._selectHandlerInitialized = true
}

initGlobalSelectHandler()
