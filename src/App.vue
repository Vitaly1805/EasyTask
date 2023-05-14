<template>
   <v-card class="wrapper">
    <v-layout class="main__layout">

      <Header></Header>

      <Sidebar></Sidebar>

      <v-main
        class="table pt-16"
        style="padding-left: 250px;"
      >
        <router-view />
      </v-main>

    </v-layout>
  </v-card>
</template>

<script setup>

  import Header from '@/layouts/Header.vue'
  import Sidebar from '@/layouts/Sidebar.vue'

</script>


<style lang="scss" scope>

#app {
  height: 100vh;
}

.wrapper {
  height: 100%;
  overflow-x: auto !important;

  &__layout {
    height: 100%;
  }
}

.v-layout {
  height: 100%;
}

</style>
