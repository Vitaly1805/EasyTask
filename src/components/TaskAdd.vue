<template>
    <v-sheet  class="mx-auto">
      <v-form @submit.prevent>
        <v-textarea
          v-model="task"
          auto-grow
          variant="outlined"
          rows="1"
          row-height="15"
          label="Добавить задачу"
          @keydown.enter.prevent="addTask"
          class="form-input"
          color="black"
          ></v-textarea>
        <v-btn
          type="submit"
          block
          v-show="drawer"
          transition
          @click="addTask"
        >
          Добавить
        </v-btn>
      </v-form>
  </v-sheet>
</template>

<script setup>

import {computed, onMounted, ref, toRef} from 'vue'
import {storeToRefs} from "pinia";
import {useTasksStore} from '@/store/tasks'

const task = ref('')
const tasksStore = useTasksStore()

const drawer = computed(() => task.value.length > 0)


function addTask() {
  const value = task.value.trim()

  if(value) {
    tasksStore.set({title: value})
  }

  task.value = ''
}

</script>

<style lang="scss" scope>

.v-input__details {
  display: none !important;
}
</style>
