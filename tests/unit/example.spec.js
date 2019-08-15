import { expect, assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

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
