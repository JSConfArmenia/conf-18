<template>
  <section class="Sponsors" id="Sponsors">
    <div class="Container">
      <h3 class="Subtitle">Sponsors</h3>

      <div class="row justify-content-center">
        <div>
          <a class="Sponsor Sponsor-Simply -main" href="https://www.simplytechnologies.net/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
      </div>

      <div class="row justify-content-center">

        <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-3">
          <a class="Sponsor Sponsor-Workfront -gold" href="https://www.workfront.com/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
          <a class="Sponsor Sponsor-Digitain -gold" href="https://digitain.com/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
        <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-3">
          <a class="Sponsor Sponsor-Devlix -gold" href="" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
      </div>

      <div class="row justify-content-center">

        <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-SFL -silver" href="https://sflpro.com/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
        <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-Synergy -silver" href="https://www.synisys.com/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>

        <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-Renderforest -silver" href="https://www.renderforest.com/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>

        <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-DF -silver" href="http://digitalfactory.co/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>

        <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-Develandoo -silver" href="https://develandoo.com/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>


      </div>

      <div class="row justify-content-center">
        <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-Armsoft -starter" href="http://www.armsoft.am/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
        <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-IUNetworks -starter" href="https://www.iunetworks.am/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>

      </div>


      <h3 class="Subtitle">Partners and friends</h3>

      <div class="row justify-content-center">
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-itjobs -silver" href="https://www.itjobs.am/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>

        <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-aua -silver" href="https://www.aua.am/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
      </div>

      <div class="CallToActionContainer">
        <a href="http://bit.ly/supportArmJS" class="Button -call-to-action -small" target="_blank">
          Become a sponsor!
        </a>
      </div>
    </div>

    <div class="SponsorsBgTop"></div>
    <div class="SponsorsBgBottom"></div>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
.Sponsors {
  padding: 15vw 0;
  background-color: #f5f5f5;
  // background-color: #f5f5f5;
  // background-image: url('./SponsorsBg.png');
  background-repeat: no-repeat;
  min-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.Container {
  position: relative;
  z-index: 3;
}

.Subtutle {
  color: #ef4e4e;
  font-size: 32px;
}

.Subtitle {
  color: #ef4e4e;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

.Sponsor {

  .Image {
    background-repeat: no-repeat;
    opacity: .8;
    transition: all .3s ease;
    background-size: contain;
    background-position: 50%;

    background-repeat: no-repeat;
    margin: 0 auto;
    margin-bottom: 20px;

    &:hover {
      opacity: 1;
    }
  }

  &.-main .Image {
    height: 150px;
    width: 350px;
  }

  &.-gold .Image {
    width: 250px;
    height: 140px;
  }

  &.-silver .Image {
    width: 160px;
    height: 140px;
  }

  &.-starter .Image {
    width: 130px;
    height: 100px;
  }

  &.Sponsor-Digitain .Image {
    background-image: url('/sponsors/digitain.png');
    background-size: 200px;
  }

  &.Sponsor-Workfront .Image {
    background-image: url('/sponsors/workfront.png');
  }

  &.Sponsor-Devlix .Image {
    background-image: url('/sponsors/devlix.svg');
  }

  &.Sponsor-SFL .Image {
    background-image: url('/sponsors/sfl.svg');
  }

  &.Sponsor-Synergy .Image {
    // width: 80px;
    background-image: url('/sponsors/synergy.svg');
  }

  &.Sponsor-Develandoo .Image {
    background-image: url('/sponsors/dvld.svg');
    background-size: 130px;
  }

  &.Sponsor-DF .Image {
    background-image: url('/sponsors/df.png');
    background-size: 144px;
  }

  &.Sponsor-Renderforest .Image {
    background-image: url('/sponsors/renderforest.png');
    background-size: 80px;
  }

  &.Sponsor-Simply .Image {
    background-image: url('/sponsors/simply.svg');
  }

  &.Sponsor-Armsoft .Image {
    background-image: url('/sponsors/armsoft.svg');
  }

  &.Sponsor-IUNetworks .Image {
    background-image: url('/sponsors/iunetworks.png');
  }

  &.Sponsor-itjobs .Image {
    width: 80px;
    background-image: url('/sponsors/itjobs.svg');
  }

  &.Sponsor-aua .Image {
    width: 80px;
    background-image: url('/sponsors/aua.png');
  }
}

.CallToActionContainer {
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}

.SponsorsBgTop,
.SponsorsBgBottom {
  position: absolute;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: 100%;
}

.SponsorsBgTop {
  top: 0;
  padding-bottom: 15%;
  background-image: url('./SponsorsBgTop.svg');
  background-size: cover;
  background-position: right 0 bottom -17vw;
}

.SponsorsBgBottom {
  bottom: 0;
  padding-bottom: 15%;
  background-image: url('./SponsorsBgBottom.svg');
  background-size: cover;
  background-position: right 0 top -17vw;
}

@media (min-width: 1200px) {
  .Context {
    width: 90%;
  }
}

@media (max-width: 600px) {
  .Sponsors {
    min-height: 800px;
  }

  .Sponsor.-main .Image {
    height: 90px;
    width: 250px;
  }

  .Sponsor-aua .Image,
  .Sponsor-itjobs .Image {
    width: 80px !important;
    height: 80px !important;
  }

  .Sponsor.-silver .Image {
    width: 140px;
    height: 105px;
  }
}
</style>
