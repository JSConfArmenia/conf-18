<template>
  <div class="Header">
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
import Logo from '../_common/Logo/Logo.vue';

export default {
  components: {
    Logo,
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

  &.-fixed {
    position: fixed;
    min-height: auto;
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

    &:hover {
      &:after {
        top: 0;
      }
    }
  }
}
</style>
