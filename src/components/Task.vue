<template>
     <v-card
      class="task mt-1"
      v-for="task in tasks"
      :key="task.id"
     >
      <v-card-subtitle
        class="task__subtitle"
        color="red"
      >
        {{ task.project }}
      </v-card-subtitle>

       <v-card-title
        class="task__title"
       >
        {{ task.title }}
       </v-card-title>
    </v-card>
</template>

<script setup>
import {onMounted, ref, toRef} from 'vue'
import {storeToRefs} from "pinia";
import {useTasksStore} from '@/store/tasks'

const tasksStore = useTasksStore()
const {tasks} = storeToRefs(tasksStore)

</script>


<style lang="scss" scope>

.task {
  border: 1px solid #cdcdcd;
  text-align: left;

  .v-card-subtitle {
    color: blue;
    font-size: .8em;
  }

  .v-card-title {
    font-size: 1em;
    padding-top: 0;
  }
}

</style>
