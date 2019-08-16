// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import MyComponent from '@/components/my-component.vue'
import { expect } from 'chai'

// 这里是一些 Jasmine 2.0 的测试，你也可以使用你喜欢的任何断言库或测试工具。

describe('MyComponent', () => {
	// 检查原始组件选项
	it('has a created hook', () => {
		expect(typeof MyComponent.created).equal('function')
	})

	// 评估原始组件选项中的函数的结果
	it('sets the correct default data', () => {
		expect(typeof MyComponent.data).equal('function')
		const defaultData = MyComponent.data()
		expect(defaultData.message).equal('hello!')
	})

	// 检查 mount 中的组件实例
	it('correctly sets the message when created', () => {
		// 用Vue构造器的模式可以快速生成vm。
		const vm = new Vue(MyComponent).$mount()
		expect(vm.message).equal('bye!')
		expect(vm.$el.textContent).equal('bye!')
	})

	// 创建一个实例并检查渲染输出
	it('renders the correct message', () => {
		const Constructor = Vue.extend(MyComponent)
		const vm = new Constructor().$mount()
		expect(vm.$el.textContent).equal('bye!')
	})

	// 在状态更新后检查生成的HTML
	it('updates the rendered message when vm.message updates', done => {
		const vm = new Vue(MyComponent).$mount()

		expect(vm.$el.textContent).equal('bye!')
		vm.message = 'foo'

		// 按道理，这个断言应该要失败的，但实际却能成功，太离奇了。
		expect(vm.$el.textContent).equal('foo')

		// 在状态改变后和断言 DOM 更新前等待一刻
		Vue.nextTick(() => {
			expect(vm.$el.textContent).equal('foo')
			done()
		})
	})
})