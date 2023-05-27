<template>
  <v-card class="table">
    <TaskGroup
      v-for="day in currentWeek"
      :key="day.date"
      :day="day"
    >
    </TaskGroup>
  </v-card>
</template>

<script setup>
  import TaskGroup from '@/components/TaskGroup.vue';
  import {daysOfWeek} from '@/enums/index'

  let currentWeek = getCurrentWeek()

  function getCurrentWeek() {
    let week = []
    const date = new Date()

    date.setDate(date.getDate() - 1);

    for(let i = 0; i <= 6; i++) {
      date.setDate(date.getDate() + 1)

      week.push({
        date: date.toLocaleString().split(',')[0],
        dayOfWeek: daysOfWeek[date.getDay()]
      })
    }

    return week
  }
</script>

<style lang="scss" scope>

.test {
  width: 10000px;
}

.table {
  min-height: 100%;
  display: flex;
  overflow-x: auto;
}
</style>
