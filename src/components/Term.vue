<template>
  <div>
    <span v-if="term.termType === 'NamedNode'">
      &lt;<a href="#" @click.prevent="selectResource(term.value)">
        {{term.value}}
      </a>&gt;
    </span>
    <span v-else-if="term.termType === 'Literal' && term.language">&quot;{{term.value}}&quot;@{{term.language}}</span>
    <span v-else-if="term.termType === 'Literal' && term.datatype.value">&quot;{{term.value}}&quot;^^&lt;<a href="#" @click.prevent="selectResource(term.datatype.value)">{{term.datatype.value}}</a>&gt;</span>
  </div>
</template>

<script>

export default {
  name: 'Term',
  props: ['term'],
  emits: ['click'],
  methods: {
    selectResource: function (resourceIri) {
      this.$emit('click', resourceIri)
    }
  }
}

</script>
