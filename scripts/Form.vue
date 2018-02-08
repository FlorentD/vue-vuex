<template>
    <vue-form :state="formstate" @submit.prevent="onSubmit">
        <validate tag="label">
            <span>Email*</span>
            <input v-model="model.email" required name="email" type="email" placeholder="entrez votre email">
            <field-messages name="email" show="$touched">
                <div>Success !</div>
                <div slot="required">Name is a required field</div>
                <div slot="email">not well formated</div>
            </field-messages>
        </validate>
    </vue-form>
</template>

<script>
import Field from 'vue-form/src/components/field';

export default {
  components: { Field },
  name: 'form-validation',
  data: () => ({
    formstate: {},
    model: {
      email: '',
    },
  }),
  methods: {
    onSubmit: function() {
      console.log(this.formstate.$invalid);
      return;
    },
  },
};
</script>

<style scoped>

</style>
