<template>
  <v-app>
    <Navbar />
    <v-container class="d-flex justify-center">
      <Search />
    </v-container>
  </v-app>
</template>

<script>
import Search from './components/Search';
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components: {
    Search,
    Navbar,
  },
};
</script>

<style lang="scss">
</style>
