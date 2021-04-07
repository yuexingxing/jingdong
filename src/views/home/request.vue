/* eslint-disable no-undef */
<template>
  <div id="app">
    <label v-on:click="test">get</label>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'requestPart',
  methods: {
    test () {
      axios.get('https://api.sancellvarymay.com/api/ssxq/app/version?platform_id=sanshao').then(response => (this.title = response.data)).catch()
    }
  },
  mounted () {
  },
  setup () {

  }
}
</script>
