import { mount } from '@vue/test-utils'
import Task from '@/components/Task'


it('isset props into Task.vue', async () => {
  const title = 'Задача 1'
  const project = 'Проект 1'
  const wrapper = await mount(Task, {
    props: {
      task: {
        title,
        project,
      }
    }
  })

  expect(wrapper.props().task.title).toBe(title)
})
