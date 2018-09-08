<template>
  <div
    class="Header"
    :class="{
      '-sticked': scrollPos > 20,
    }">
    <div class="Container HeaderContainer">
      <div class="LogoContainer">
        <Logo />
      </div>
      <nav class="Navigation">
        <a class="Item" href="#About">About</a>
        <a class="Item" href="#Schedule">Schedule</a>
        <a class="Item" href="#Speakers">Speakers</a>
        <a class="Item" href="#Sponsors">Sponsors</a>
        <a class="Item" href="#Team">Team</a>
        <a class="Item" href="#Location">Location</a>
        <a class="Item" href="#Faq">Faq</a>
        <a class="Item" href="#Quizz">Quizz</a>
        <a class="Item RequestInvite" href="" target="_blank" >Request an Invite</a>
      </nav>
    </div>
  </div>
</template>

<script>
import _throttle from 'lodash/throttle';
import Logo from '../_common/Logo/Logo.vue';

export default {
  components: {
    Logo,
  },
  data() {
    return {
      scrollPos: window.scrollY,
    };
  },
  methods: {
    handleScroll() {
      // Any code to be executed when the window is scrolled
      // console.log(event);

      this.scrollPos = window.scrollY;
    },
  },
  created() {
    window.addEventListener('scroll', _throttle(this.handleScroll, 100));
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped lang="scss">
.Header {
  min-height: 100px;
  display: flex;
  align-items: center;
  padding: .5em 0;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  // background: #fff;
  z-index: 100;
  background-color: transparent;
  // transition: all .3s ease;

  &.-sticked {
    position: fixed;
    min-height: auto;
    background: #fff;
    box-shadow: 0px 8px 30px 8.16px rgba(162, 162, 162, 0.3);
  }

}

.HeaderContainer {
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  padding-left: 130px;
}

.LogoContainer {
  position: absolute;
  top: 5px;
  left: 15px;
}

.Navigation {
  display: flex;
  flex-direction: row;
  // width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;

  .Item {
    display: block;
    padding: .5em .8em;
    color: #000;
    margin: 0 .1em;
    text-decoration: none;
    font-weight: 600;
    transition: all .2s ease;
    position: relative;
    overflow: hidden;

    &:after {
      content: " ";
      display: block;
      background-color: #b9b9b945;
      position: absolute;
      transition: all .25s ease;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &.active,
    &:hover {
      &:after {
        top: 0;
      }
    }
  }
}
</style>
