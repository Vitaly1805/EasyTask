<template>
  <div class="task-group">
    <TaskDay
      :day="props.day"
    ></TaskDay>
    <TaskAdd></TaskAdd>
    <div class="task-group__tasks">
      <Task
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      >
      </Task>
    </div>
  </div>
</template>

<script setup>

import TaskAdd from '@/components/TaskAdd.vue';
import TaskDay from '@/components/TaskDay.vue';
import Task from '@/components/Task.vue';

import {storeToRefs} from "pinia";
import {useTasksStore} from '@/store/tasks'

import {defineProps} from 'vue'

const tasksStore = useTasksStore()
const {tasks} = storeToRefs(tasksStore)

const props = defineProps({
  day: {
    type: Object,
    required: true,
    default: () => {}
  }
})

</script>

<style lang="scss" scope>

.task-group {
  width: 250px;
  min-width: 250px;

  &__tasks {
    overflow-y: auto;
    height: 100%;
  }
}

</style>
