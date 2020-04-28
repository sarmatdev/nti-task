<template>
  <v-card
    class="text-center"
    height="500"
    min-width="300"
    width="100%"
    max-width="600"
  >
    <v-card-title>Search | Array depth — {{ dbDepth }} items</v-card-title>
    <v-card-text>
      <v-text-field
        label="Type query here..."
        outlined
        v-model="query"
      ></v-text-field>
      <Button @click.native="search" />
    </v-card-text>
    <v-card-subtitle>
      <div class="mb-4 headline">Matches: {{ matches }}</div>
      <div class="headline">Execution time: ~ {{ executionTime }}ms | {{ executionTime / 1000 }}s</div>
    </v-card-subtitle>
    <Loading />
  </v-card>
</template>

<script>
import Button from './Button';
import Loading from './Loading'
export default {
  data() {
    return {
      query: '',
    };
  },
  components: {
    Button,
    Loading
  },
  methods: {
    search() {
      if (this.query === '') {
        console.log('Empty');
      } else {
        this.$store.dispatch('searchMatches', this.query);
      }
    },
  },
  computed: {
    db() {
      return this.$store.getters.db;
    },
    matches() {
      return this.$store.getters.matches;
    },
    executionTime() {
      return this.$store.getters.executionTime;
    },
    dbDepth() {
      return this.$store.getters.dbDepth;
    },
  },
  created() {
    this.$store.dispatch('loadDB');
    console.log(this.db.length);
  },
};
</script>
