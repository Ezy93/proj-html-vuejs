<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";


export default {
  name: 'App',
  components: {
    Main,
    Header,
    Footer,
  }
}
</script>

<style lang="scss" scoped>
@import './scss/style.scss';

</style>
