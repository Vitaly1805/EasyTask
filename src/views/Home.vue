<template>
  <v-card class="table">
    <TasksList
      v-for="n in 7"
      :key="n"
    >
    </TasksList>
  </v-card>
</template>

<script setup>
  import TasksList from '@/layouts/TasksList.vue'
</script>

<style lang="scss" scope>

.table {
  height: 100%;
  display: flex;
  overflow: auto;
}

</style>
