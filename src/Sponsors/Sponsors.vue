<template>
  <section class="Sponsors" id="Sponsors">
    <div class="Container">

      <section class="Section">
        <h3 class="Subtitle">General sponsor</h3>

        <div class="row justify-content-center">
          <div>
            <a class="Sponsor Sponsor-Simply -main" href="https://www.simplytechnologies.net/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">Simply Technologies</h4>
            </a>
          </div>
        </div>
      </section>

      <section class="Section">
        <h3 class="Subtitle">Gold sponsors</h3>

        <div class="row justify-content-center">

          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <a class="Sponsor Sponsor-Workfront -gold" href="https://www.workfront.com/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">Workfront</h4>
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <a class="Sponsor Sponsor-Digitain -gold" href="https://digitain.com/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">Digitain</h4>
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <a class="Sponsor Sponsor-Devlix -gold" href="" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">Devlix</h4>
            </a>
          </div>
        </div>
      </section>

      <section class="Section">
        <h3 class="Subtitle">Silver sponsors</h3>

        <div class="row justify-content-center">

          <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
            <a class="Sponsor Sponsor-SFL -silver" href="https://sflpro.com/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">SFL</h4>
            </a>
          </div>
          <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
            <a class="Sponsor Sponsor-Synergy -silver" href="https://www.synisys.com/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">Synergy</h4>
            </a>
          </div>

          <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
            <a class="Sponsor Sponsor-Renderforest -silver" href="https://www.renderforest.com/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">RenderForest</h4>
            </a>
          </div>

          <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
            <a class="Sponsor Sponsor-DF -silver" href="http://digitalfactory.co/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">Digital Factory</h4>
            </a>
          </div>

          <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
            <a class="Sponsor Sponsor-Develandoo -silver" href="https://develandoo.com/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">Develandoo</h4>
            </a>
          </div>

        </div>
      </section>

      <section class="Section">
        <h3 class="Subtitle">Starter sponsors</h3>

        <div class="row justify-content-center">
          <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
            <a class="Sponsor Sponsor-Armsoft -starter" href="http://www.armsoft.am/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">ArmSoft</h4>
            </a>
          </div>
          <div class="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2">
            <a class="Sponsor Sponsor-IUNetworks -starter" href="https://www.iunetworks.am/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">IU Networks</h4>
            </a>
          </div>
        </div>
      </section>

      <section class="Section">
        <h3 class="Subtitle">Partners and friends</h3>

        <div class="row justify-content-center">
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <a class="Sponsor Sponsor-itjobs -starter" href="https://www.itjobs.am/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">IT Jobs</h4>
            </a>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <a class="Sponsor Sponsor-aua -starter" href="https://www.aua.am/" target="_blank">
              <div class="Image"></div>
              <h4 class="Name">American University <br> of Armenia</h4>
            </a>
          </div>
        </div>
      </section>

      <!-- <div class="CallToActionContainer">
        <a href="http://bit.ly/supportArmJS" class="Button -call-to-action -small" target="_blank">
          Become a sponsor!
        </a>
      </div> -->
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

.Section {
  margin-bottom: 50px;
}

.Subtitle {
  color: #acacac;
  color: #ef4e4e;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 16px;
}

.Sponsor {

  padding-top: 30px;
  display: block;
  // opacity: .7;
  transition: all .3s ease;
  text-decoration: none;

  .Image {
    background-repeat: no-repeat;
    // opacity: .8;
    // transition: all .3s ease;
    background-size: contain;
    background-position: 50%;

    background-repeat: no-repeat;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .Name {
    text-align: center;
    color: #666;
    text-decoration: none;
    font-size: 1.2em;
  }

  &:hover {
    // opacity: 1;
  }

  &.-main .Image {
    height: 60px;
    width: 350px;
  }

  &.-gold {
    .Image {
      width: 250px;
      height: 56px;
    }

    .Name {
      font-size: 1.1em;
    }
  }

  &.-silver {
    .Image {
      width: 160px;
      height: 55px;
    }

    .Name {
      font-size: .9em;
    }
  }

  &.-starter {

    .Image {
      width: 130px;
      height: 45px;
    }

    .Name {
      font-size: .85em;
    }
  }

  &.Sponsor-Digitain .Image {
    background-image: url('/sponsors/digitain.svg');
    background-size: 370px;
  }

  &.Sponsor-Workfront .Image {
    background-image: url('/sponsors/workfront.png');
    background-size: 240px;
  }

  &.Sponsor-Devlix .Image {
    background-image: url('/sponsors/devlix.svg');
    background-size: 240px;
  }

  &.Sponsor-SFL .Image {
    background-image: url('/sponsors/sfl.svg');
    background-size: 120px;
  }

  &.Sponsor-Synergy .Image {
    // width: 80px;
    background-image: url('/sponsors/synergy.svg');
    background-size: 146px;
  }

  &.Sponsor-Develandoo .Image {
    background-image: url('/sponsors/develandoo.png');
    background-size: 90px;
  }

  &.Sponsor-DF .Image {
    background-image: url('/sponsors/df.png');
    background-size: 129px;
  }

  &.Sponsor-Renderforest .Image {
    background-image: url('/sponsors/renderforest.svg');
    background-size: 150px;
  }

  &.Sponsor-Simply .Image {
    background-image: url('/sponsors/simply.svg');
  }

  &.Sponsor-Armsoft .Image {
    background-image: url('/sponsors/armsoft.svg');
    background-size: 110px;
  }

  &.Sponsor-IUNetworks .Image {
    background-image: url('/sponsors/iunetworks.png');
    background-size: 132px;
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
