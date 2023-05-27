<template>
  <v-card class="day">
    <v-card-title class="day__title">
      {{dayTitle}}
    </v-card-title>
  </v-card>
</template>

<script setup>
import {defineProps, computed} from 'vue'

const props = defineProps({
  day: {
    type: Object,
    required: true,
    default: () => {}
  }
})

const dayTitle = computed(() => props.day.date)


</script>

<style lang="scss" scope>

.day {
  &__title {
    text-align: center;
    font-size: 1em;
  }
}

</style>
