import { expect, assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/hello-world.vue'

// 这是一个使用了test-utils的例子。

describe('HelloWorld.vue', () => {
	it('renders props.msg when passed', () => {
		const message = 'new message'
		const wrapper = shallowMount(HelloWorld, {
			propsData: { msg: message }
		})

		assert.ok(wrapper.text().indexOf(message) !== -1)
		expect(wrapper.text()).to.include(message)
	})
})
