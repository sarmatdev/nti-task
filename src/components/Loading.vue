<template>
  <v-overlay absolute :value="loading">
    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>
