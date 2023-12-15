<template>
  <h1>Reaction Timer</h1>
  <button v-if="!isPlaying" @click="start">Play</button>
  <block-vue :delay="delay" v-if="isPlaying" @end="stop" />
  <br/>
  <h1 v-if="!isPlaying" >{{ result }}</h1>

</template>

<script>
import BlockVue from './components/Block.vue'

export default {
  name: 'App',
  components: {
    BlockVue    
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      result: null
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      console.log(this.delay)
    },
    stop(result) {
      this.isPlaying = false
      this.result = "Your result is " + result +"ms"
      console.log("Result = "+ result)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
