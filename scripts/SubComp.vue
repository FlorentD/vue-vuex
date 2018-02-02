<template>
    <div>
    <h1>{{title}}</h1>
    <button v-on:click="increment">INCREMENT</button>
    <div>{{count}}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'sub-comp',
  mounted: function() {
    console.log('SubComp mounted');
  },
  computed: mapGetters(['count']),
  methods: mapActions(['increment']),
  data: () => ({
    title: 'Sub Title',
  }),
};
</script>

<style scoped>

</style>
