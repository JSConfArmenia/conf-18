<template>
  <div id="app">
    <AppHeader />
    <Intro />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './Header/Header.vue';
import Intro from './Intro/Intro.vue';
import AppFooter from './Footer/Footer.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    Intro,
    AppFooter,
  },
};
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.Container {
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 15px;
}

.ContainerBox {
  max-width: 800px;
}

</style>
