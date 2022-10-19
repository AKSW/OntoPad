<template>
  <div class="about flex flex-col items-center">
    <input type="text" class="bg-gray-300 px-4 py-2" v-model="prefix" @input="filterprefixs"
           @focus="modal = true">

    <div v-if="filteredprefixs && modal">
      <ul class="w-48 bg-gray-800 text-white">
        <li v-for="filteredprefix in this.filteredprefixs"
            class="py-2 border-b cursor-pointer" :key="filteredprefix"
            @click="setprefix(filteredprefix)">{{ filteredprefix[0] }} : {{ filteredprefix[1] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  const prefixesMap = new Map()
  export default {
    mounted: function () {
      $.getJSON('https://prefix.cc/context', function (data) {
        this.prefixs = data
        for (const [key, value] of Object.entries(this.prefixs['@context'])) {
          prefixesMap.set(key, value)
        }
        console.log(prefixesMap)
        console.log(this.prefixs)
      })
    },

    data: function () {
      return {
        prefix: '',
        modal: false,
        prefixs: prefixesMap,
        filteredprefixs: []
      }
    },

    methods: {
      filterprefixs () {
        console.log(this.prefixs)
        const arr = Array.from(this.prefixs.entries())
        this.filteredprefixs = arr.filter((a1, a2) => {
          return a1[0].toLowerCase().startsWith(this.prefix.toLowerCase())
        })
      },

      setprefix (prefix) {
        this.prefix = prefix[0] + ':' + prefix[1]
        this.modal = false
      }
    }
  }
</script>
