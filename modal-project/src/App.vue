<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
     <modal-component :header="modalTitle" :text="text" @close="toggleModal"/>
  </div>
  <br/>
  <button @click="toggleModal">toggle modal</button>
</template>

<script>
import ModalComponent from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    ModalComponent
  },
  data() {
    return {
      title: "My Very First Vue APP",
      modalTitle: "This is Modal",
      text: "hai this is my text",
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
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
