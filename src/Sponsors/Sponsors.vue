<template>
  <section class="Sponsors" id="Sponsors">
    <div class="Context">
      <h3 class="Subtitle">Sponsors</h3>

      <div class="row justify-content-center">
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-Betconstruct" href="https://www.betconstruct.com/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
        <div class="col-6  col-sm-6 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-Renderforest" href="https://www.renderforest.com/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-WorkFront" href="https://www.workfront.com/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-Benivo" href="https://www.benivo.com/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-SFL" href="https://sflpro.com/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
      </div>


      <h3 class="Subtitle">Partners and friends</h3>

      <div class="row justify-content-center">
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-Simply" href="https://www.simplytechnologies.net/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <a class="Sponsor Sponsor-itjobs" href="https://www.itjobs.am/" target="_blank">
            <div class="Image"></div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
.Sponsors {
  padding: 250px 0;
  background-image: url('./SponsorsBg.png');
  background-repeat: no-repeat;
  min-height: 1000px;
  display: flex;
  align-items: center;
}

.Context {
  width: 100%;
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

.Sponsor .Image {
  background-repeat: no-repeat;
  opacity: .8;
  transition: all .3s ease;

  &:hover {
    opacity: 1;
  }
}

.Sponsor .Image {
  background-size: contain;
  background-position: 50%;
  width: 150px;
  height: 120px;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-bottom: 20px;
}

.Sponsor-Betconstruct .Image {
  background-image: url('./logo/Betconstruct.png');
}

.Sponsor-Renderforest .Image {
  background-image: url('./logo/Renderforest.png');
}

.Sponsor-WorkFront .Image {
  background-image: url('./logo/WorkFront.png');
}

.Sponsor-Benivo .Image {
  width: 90px;
  background-image: url('./logo/Benivo.png');
}

.Sponsor-SFL .Image {
  width: 80px;
  background-image: url('./logo/SFL.png');
}

.Sponsor-Simply .Image {
  background-image: url('./logo/Simply.png');
}

.Sponsor-itjobs .Image {
  width: 80px;
  background-image: url('./logo/itjobs.png');
}

</style>
