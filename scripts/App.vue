<template>
    <div>
    <p>{{greeting}} world</p>
        <button v-on:click="handleClick">CLICK ME</button>
    <sub-comp/>
    </div>
</template>
<script>
import SubComp from './SubComp.vue';
import store from './store';
export default {
  store,
  data: () => ({
    greeting: 'hello',
  }),
  components: {
    SubComp,
  },
  methods: {
    handleClick: function() {
      this.greeting = 'click';
    },
  },
  watch: {
    greeting: function() {
      console.log('greeting data has changed !');
    },
  },
};
</script>
<style scoped>
p {
  font-size: 2em;
}
</style>
