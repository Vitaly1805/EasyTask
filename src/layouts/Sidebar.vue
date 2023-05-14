<template>
   <v-navigation-drawer
    v-model="drawer"
    class="sidebar"
   >
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script setup>

const drawer = true

</script>


<style scope>

.sidebar {
  width: 250px;
  /* position: relative !important; */
}

</style>
