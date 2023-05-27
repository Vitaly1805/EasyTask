<template>
  <v-card
    class="task mt-1"
  >
    <v-card-subtitle
      class="task__subtitle"
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
import {defineProps} from 'vue'

const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: () => {}
  }
})

</script>


<style lang="scss" scope>

.task {
  border: 1px solid #cdcdcd;
  text-align: left;
  cursor: pointer;

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
