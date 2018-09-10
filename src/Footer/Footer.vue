<template>
  <div class="Footer">

    <div class="LogoContainer">
      <Logo />
    </div>

    <div class="SocialLinks">
      <a class="SocialIcon Icon-Github" href="https://github.com/JSConfArmenia/" target="_blank"></a>
      <a class="SocialIcon Icon-Facebook" href="https://www.facebook.com/jsconf.am/" target="_blank"></a>
      <a class="SocialIcon Icon-Twitter" href="https://twitter.com/jsconf_am/" target="_blank"></a>
      <a class="SocialIcon Icon-Instagram" href="https://www.instagram.com/jsconf.am/" target="_blank"></a>
      <a class="SocialIcon Icon-Youtube" href="https://www.youtube.com/channel/UCkzEOKU959F6_T0OaQBH4VQ/featured" target="_blank"></a>
    </div>

    <p class='Credits'>
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
    </p>

    <div class="FooterBgLeft"></div>
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
.Footer {
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
}

.FooterBgLeft {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url('./FooterBgLeft.svg');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}

.LogoContainer {
  margin: 20px 0;
}

.SocialLinks {
  display: flex;
}

.SocialIcon {
  background: center;
  width: 25px;
  height: 25px;
  margin: 10px;
  background-repeat: no-repeat;
  background-size: contain;
}

.Icon-Github {
  background-image: url('./github.png');
}

.Icon-Twitter {
  background-image: url('./twitter.png');
}

.Icon-Facebook {
  background-image: url('./facebook.png');
}

.Icon-Instagram {
  background-image: url('./instagram.png');
}

.Icon-Youtube {
  background-image: url('./youtube.png');
}

.Credits {
  margin: 20px;
}

</style>
