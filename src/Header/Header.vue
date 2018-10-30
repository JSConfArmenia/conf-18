<template>
  <div
    class="Header"
    :class="{
      '-open': isOpen,
      '-sticked': isSticked,
    }">
    <div class="Container HeaderContainer">
      <div class="LogoContainer">
        <a href="#Intro">
          <Logo
            :variation="isSticked ? 'compact' : isOpen ? 'open' : 'full'" />
        </a>
      </div>

      <a class="NavBtn" v-on:click="toggle">
        <i
          class="fa"
          v-bind:class="{ 'fa-bars': !isOpen , 'fa-times': isOpen}"
          aria-hidden="true"
        ></i>
      </a>
      <nav class="Navigation" v-smooth-scroll="navConfig">
        <a class="Item" href="#About" v-smooth-scroll="navConfig" v-on:click="close">About</a>
        <a class="Item" href="#Schedule" v-smooth-scroll="navConfig" v-on:click="close">Schedule</a>
        <a class="Item" href="#Speakers" v-smooth-scroll="navConfig" v-on:click="close">Speakers</a>
        <a class="Item" href="#Sponsors" v-smooth-scroll="navConfig" v-on:click="close">Sponsors</a>
        <!-- <a class="Item" href="#Team">Team</a> -->
        <a class="Item" href="#Location" v-smooth-scroll="navConfig" v-on:click="close">Location</a>
        <a class="Item" href="#Faq" v-smooth-scroll="navConfig" v-on:click="close">Faq</a>
        <a class="Item" href="#Quiz" v-smooth-scroll="navConfig" v-on:click="close">Quiz</a>
        <a class="Item RequestInvite" href="http://bit.ly/joinJSConf2018" target="_blank" >Request an Invite</a>
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
      isOpen: false,
      navConfig: {
        duration: 1000,
        offset: -66,
      },
    };
  },
  methods: {
    handleScroll() {
      // Any code to be executed when the window is scrolled
      // console.log(event);

      this.scrollPos = window.scrollY;
    },
    toggle(event) {
      event.preventDefault();

      this.isOpen = !this.isOpen;
    },
    close() {
      this.isOpen = false;
    },
  },
  computed: {
    isSticked() {
      return this.scrollPos > 23;
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
    min-height: 55px;
    background: #fff;
    box-shadow: 0px 8px 30px 8.16px rgba(162, 162, 162, 0.3);
  }

}

.HeaderContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  padding-left: 130px;
}

.LogoContainer {
  position: absolute;
  left: 15px;
  z-index: 2;
}

.Navigation {
  display: flex;
  flex-direction: row;
  // width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;

  .Item {
    display: flex;
    align-items: center;
    padding: .5em .8em;
    color: #000;
    margin: 0 .1em;
    text-decoration: none;
    font-weight: 600;
    transition: all .2s ease;
    position: relative;
    overflow: hidden;
    font-weight: 600;

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
      z-index: -1;
    }

    &.active,
    &:hover {
      &:after {
        top: 0;
      }
    }

    &.RequestInvite {
      border: 2px solid #ffdd00;
      border-radius: 2px;
      margin-left: 10px;

      &:after {
        // display: none;
        background-color: #ffdd00;
      }

      &:hover {
        // background-color: #ffdd00;
        // color: #fff;
      }
    }
  }
}

.NavBtn {
  display: none;
}

@media (max-width: 600px) {
  .Navigation {
    position: absolute;
    left: 0;
    top: -500px;
    background: #fff;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    align-items: center;
    margin-top: 50px;
    transition: top .3s ease;
  }

  .Header.-open .Navigation {
    top: 0;
    transition: top .3s ease;
  }

  .Navigation .Item {
    width: 50%;
    justify-content: center;
  }

  .NavigationButton {
    display: inline;
  }

  .HeaderContainer {
    position: initial;
  }

  .NavBtn {
    display: inline;
    top: 0;
    position: absolute;
    right: 0;
    margin: 8px 15px;
    font-size: 30px;
  }

  .Header.-open {
    background: #fff;
  }
}
</style>
