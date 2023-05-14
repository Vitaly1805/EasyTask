<template>
  <v-card
    class="tasks ml-1"
  >
    <TaskDay></TaskDay>
    <TaskAdd></TaskAdd>
    <Task></Task>
  </v-card>
</template>

<script setup>

import Task from '@/components/Task.vue';
import TaskAdd from '@/components/TaskAdd.vue';
import TaskDay from '@/components/TaskDay.vue'

</script>

<style scope>

.tasks {
  width: 250px;
  min-width: 250px;
  text-align: center;
  font-size: .9em;
}

</style>
