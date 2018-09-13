<template>
  <div class="Location">
    <div class="smart-object"></div>

    <iframe
      class="Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6095.609643725426!2d44.505263706885366!3d40.191156865947136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd173fd4d621%3A0x213beef7d45c07c5!2z1YDVodW11aHVvdW_1aHVttWrINSx1bTVpdaA1avVr9W11aHVtiDVgNWh1bTVodWs1b3VodaA1aHVtg!5e0!3m2!1sen!2s!4v1508846018400" width="800" height="600" frameborder="0" style="border:0" allowfullscreen>
    </iframe>

    <span class="text">HERE WE ARE!</span>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
.Location {
  margin-top: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.smart-object {
  background-image: url('./smartObject.png');
  width: 130px;
  height: 200px;
  background-repeat: no-repeat;
}

.text {
  color: #198dbf;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}

.Map {
  width: 50vw;
  height: 30vw;
  top: 0;
  left: 0;
}

@media (max-width: 680px) {
  .Location {
    flex-direction: column;
  }

  .smart-object {
    margin-bottom: 15px;
  }

  .text {
    display: block;
    margin-top: 15px;
    font-size: 25px;
  }

  .Map {
    width: 100%;
    height: 50vw;
  }
}

</style>
