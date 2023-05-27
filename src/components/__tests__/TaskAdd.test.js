import { mount } from '@vue/test-utils'
import Task from '@/components/Task'

const task = {
  title: 'Test',
  project: 'ProjectTest'
}

test('setProps demo', async () => {
  const wrapper = mount(Task)

  await wrapper.setProps(task)

  expect(wrapper.vm.title).toBe('Test')
})
