<template>
  <div id="app">
    <AppHeader />
    <Intro />
    <About />
    <Schedule />
    <Speakers />
    <Sponsors />
    <Location />
    <Faq />
    <Quiz />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './Header/Header.vue';
import Intro from './Intro/Intro.vue';
import About from './About/About.vue';
import Schedule from './Schedule/Schedule.vue';
import Speakers from './Speakers/Speakers.vue';
import Sponsors from './Sponsors/Sponsors.vue';
import Location from './Location/Location.vue';
import Faq from './Faq/Faq.vue';
import Quiz from './Quiz/Quiz.vue';
import AppFooter from './Footer/Footer.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    Intro,
    About,
    Schedule,
    Speakers,
    Sponsors,
    Location,
    Faq,
    Quiz,
    AppFooter,
  },
};
</script>

<style lang="scss">

@import '/fonts/BambinoNew/stylesheet.css';

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;

  font-family: 'Bambino New', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.Container {
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
  padding: 0 15px;
}

.ContainerBox {
  max-width: 800px;
}

.Button {
  padding: 1em 3em;
  text-transform: uppercase;
  font-weight: bolder;
  text-decoration: none;
  display: inline-block;
  color: #666;
  position: relative;
  box-shadow: 0px 1.68em 1.875em 0.5em rgba(162, 162, 162, 0.3);
  transition: all .3s ease;
  top: 0;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  &.-default {
    background-color: #ffffff;

    &:hover {
      border-bottom: 2px solid #ffdd00;
    }
  }

  &.-call-to-action {
    background: #ef4e4e;
    color: #fff;

    &:hover {
      background: #ef4e4e;
      color: #fff;
    }
  }

  &.-small {
    font-size: .8em;
    padding: .7em 2em;
  }

  &:hover {
    text-decoration: none;
    color: #524d31e7;
    top: -2px;
  }

  &:active {
    top: 1px;
    transform: all .1s ease;
    color: #ffdd00;
  }

  &:hover,
  &:active {
    box-shadow: 0px 1.81em 2.7em 0.5em rgba(162, 162, 162, 0.3);
  }
}

.Title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: .2em;
  text-transform: uppercase;
}

.Subtitle {
  font-size: 24px;
  font-weight: 600;
}

</style>
