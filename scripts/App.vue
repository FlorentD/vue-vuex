<template>
    <p>{{ greeting }} world</p>
</template>
<script>
export default {
  data: function() {
    return {
      greeting: 'hello',
    };
  },
};
</script>
<style scoped>
p {
  font-size: 2em;
}
</style>
