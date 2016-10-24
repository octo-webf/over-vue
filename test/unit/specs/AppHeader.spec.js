import Vue from 'vue'
import AppHeader from 'src/components/AppHeader'

describe('AppHeader.vue', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    render: (h) => h(AppHeader)
  })
  it('should render correct links', () => {
    const content = vm.$el.textContent
    expect(content).to.contains('About')
    expect(content).to.contains('Contact')
  })
})
