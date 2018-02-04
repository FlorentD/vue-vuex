<template>
    <div>
        <p>{{greeting}} world</p>
        <router-link to="routing"><button v-on:click="handleClick">CLICK ME</button></router-link>
        <sub-comp/>
        <router-view></router-view>
    </div>
</template>
<script>
import SubComp from './SubComp.vue';
import store from './store';
export default {
  store,
  data: () => ({
    greeting: 'hello',
    message: 'hallo',
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
