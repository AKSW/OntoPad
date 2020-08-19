<template>
  <form action="#"></form>
</template>

<script>
global.jsonld = require('jsonld')
global.jQuery = require('jquery')
require('jquery-ui')
require('jquery-ui/ui/widgets/autocomplete')
require('@donsi/rdform')

// https://vuejsdevelopers.com/2017/05/20/vue-js-safely-jquery-plugin/
export default {
  name: 'rdform',
  props: ['submit', 'template', 'hooks', 'settings', 'data'],
  mounted () {
    const settings = {
      template: this.template,
      hooks: this.hooks,
      cache: true, // when using with wepack I think it is no good idea to use the rdform cache feature
      verbose: false,
      submit: this.submit,
      data: this.data,
      debug: true
    }
    Object.assign(settings, this.settings)
    global.jQuery(this.$el).RDForm(settings)
  },
  beforeDestroy () {
  }
}

</script>
