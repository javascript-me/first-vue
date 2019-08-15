import Vue from 'vue'
import { expect } from 'chai'
import PureComponent from '@/components/pure-component.vue'

// 挂载元素并返回已渲染的文本的工具函数
function getRenderedText(Component, propsData) {
	const Constructor = Vue.extend(Component)
	const vm = new Constructor({ propsData: propsData }).$mount()
	return vm.$el.textContent
}

describe('MyComponent', () => {
	it('renders correctly with different props', () => {
		expect(getRenderedText(PureComponent, {
			msg: 'Hello'
		})).equal('Hello')

		expect(getRenderedText(PureComponent, {
			msg: 'Bye'
		})).equal('Bye')
	})
})