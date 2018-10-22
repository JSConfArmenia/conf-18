<template>
  <section class="Speakers" id="Speakers">
    <div class="Container">
      <h2 class="Title">Who are<br><span class="Accent">The Ninjas?</span></h2>
      <div class="row no-gutters">
        <div
          class="col-md-4 SpeakerCol"
          v-for="speakerId in speakersList"
          :key="speakerId">
          <div class="Speaker">
            <div
              class="Img"
              :style="{
                backgroundImage: `url(${speakers[speakerId].img})`
              }">
            </div>
            <h3 class="Name">{{speakers[speakerId].name}}</h3>
            <h5 class="Position">{{speakers[speakerId].position}}</h5>
          </div>
        </div>
      </div>
      <!-- <div class="CallToActionContainer">
        <a href="http://bit.ly/speakJS" class="Button -call-to-action" target="_blank">
          Become a Ninja!
        </a>
      </div> -->
    </div>
    <div class="SpeakersBg"></div>
  </section>
</template>

<script>
import speakers from '@/_services/speakers';

export default {
  data: () => ({
    speakers,
    speakersList: [
      0,
      2,
      1,
      8,
      10,
      7,
      3,
      4,
      5,
      6,
      9,
      11,
    ],
  }),
  methods: {
    getSpeaker: function getSpeaker(speakerId) {
      return this.speakers[speakerId];
    },
  },
};
</script>

<style scoped lang="scss">
.Speakers {
  padding:  100px 0 50px 0;
  position: relative;
}

.Title {
  font-size: 4em;
  font-weight: normal;
  line-height: 1.2em;
  margin-bottom: 1.5em;

  .Accent {
    font-size: 1.2em;
    color: #93d8f7;
    font-weight: 900;
  }
}

.SpeakerCol {
  display: flex;
  justify-content: center;
}

.Speaker {
  max-width: 250px;
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
}

.Img {
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 10px;
  background-size: cover;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
  filter: grayscale(90%);
  transition: .3s ease all;
}

.Speaker:hover {
  .Img {
    filter: grayscale(0);
  }
}

.Name {
  margin-bottom: 0;
}

.Position {
  color: #999;
}

.CallToActionContainer {
  padding-top: 50px;
  text-align: center;
}

.SpeakersBg {
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url('./SpeakersBg.svg');
  background-size: 70%;
  background-position-y: 12%;
  background-position-x: right;
}

@media (max-width: 600px) {
  .Title {
    font-size: 3em;
  }

  .Speakers {
    padding: 50px 0 50px;
  }
}
</style>
