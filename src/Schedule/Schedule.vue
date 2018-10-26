<template>
  <section class="Schedule" id="Schedule">
    <div class="Container">
      <h2 class="Title">Event Schedule</h2>
      <h3 class="Subtitle">November 3, 2018</h3>

      <div class="TimeTable">
        <div class="TimeTableSection">
          <TimeScale
            :start="'10:00'" />
          <div class="TimeTableContent">
            <div class="TimeTableContentHeader">
              <div class="row">
                <div class="col">
                  <label class="Label">
                    Entry
                  </label>
                </div>
              </div>
            </div>
            <div class="TimeTableTopics">
              <TopicItem
                :topic="topics[0]" />
            </div>
          </div>
        </div>

        <div class="TimeTableSection">
          <TimeScale
            :start="'10:30'" />
          <!-- Scrollable content -->
          <div class="TimeTableContent -scrollable">
            <div class="TimeTableContentHeader">
              <div class="row">
                <div class="col col-4">
                  <label class="Label">
                    Manoogyan Hall
                  </label>
                </div>
                <div class="col col-4">
                  <label class="Label">
                    408E
                  </label>
                </div>
                <div class="col col-4">
                  <label class="Label">
                    114W
                  </label>
                </div>
              </div>
            </div>
            <div class="TimeTableTopics">
              <div class="row">
                <div class="col col-4">
                  <TopicItem
                    v-for="(topic, index) in topics[1]"
                    :key="index"
                    :topic="topic"
                    :speaker="getSpeaker(topic.speakerId)" />
                </div>
                <div class="col col-4">
                  <TopicItem
                    v-for="(topic, index) in topics[2]"
                    :key="index"
                    :topic="topic"
                    :speaker="getSpeaker(topic.speakerId)" />
                </div>
                <div class="col col-4">
                  <TopicItem
                    v-for="(topic, index) in topics[3]"
                    :key="index"
                    :topic="topic"
                    :speaker="getSpeaker(topic.speakerId)" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="ScheduleBgLeft"></div>
  </section>
</template>

<script>
import topics from '@/_services/topics';
import speakers from '@/_services/speakers';

import TimeScale from './TimeScale';
import TopicItem from './TopicItem';

export default {
  data: () => ({
    topics,
    speakers,
  }),
  methods: {
    getSpeaker: function getSpeaker(speakerId) {
      return this.speakers[speakerId] || {};
    },
  },
  components: {
    TimeScale,
    TopicItem,
  },
};
</script>

<style scoped lang="scss">
.Schedule {
  padding: 100px 0 100px;
  position: relative;
  // overflow-x: hidden;
  // overflow-y: visible;
  z-index: 10;
  text-align: center;
}

.Title {
  color: #198dbf;
  text-align: center;
}

.Subtitle {
  color: #000;
  text-align: center;
  margin-bottom: 50px;
}

.ScheduleBgLeft {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  &:before {
    content: " ";
    position: absolute;
    width: 22vw;
    height: 22vw;
    left: -15vw;
    top: -11vw;
    border-radius: 50%;
    background-color: #93d8f7;
    display: block;
  }
}

@media (max-width: 600px) {
  .Schedule {
    padding: 50px 0 50px;
  }
}
</style>

<style scoped>

  .TimeTable {
    /* width: 100%; */
    position: relative;
    margin-right: -15px;
  }

  .TimeTable .row {
    margin-left: 0;
    margin-right: 0;
  }

  .TimeTable .col {
    padding-left: 0;
    padding-right: 0;
  }

  .TimeTable .Label {
    margin: 0;
    font-weight: bold;
  }

  .TimeTableSection {
    width: 100%;
    position: relative;
    padding-left: 70px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, .7);
    border-radius: 5px;
    border-radius: 5px 0 0 5px;
    padding-bottom: 20px;
  }

  .TimeTableContent {
    position: relative;
    /* overflow-x: scroll; */
    /* overflow-y: visible; */
    overflow: auto;
    padding-left: 4px;
    padding-right: 4px;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: none;

    background-color: rgba(255, 255, 255, .6);
    /* border-right: 1px solid rgba(0, 0, 0, 0.3); */
    /* border-right: 1px solid rgba(0, 0, 0, 0.3); */
  }

  .TimeScale {
    top: 40px;
  }

  .TimeTableContent.-scrollable .TimeTableTopics,
  .TimeTableContent.-scrollable .TimeTableContentHeader {
    min-width: 900px;
  }

  .TimeTableTopics,
  .TimeTableContentHeader {
    overflow: hidden;
  }

  .TimeTableContentHeader {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .TimeTableContentHeader .row {
    flex: 1;
  }

  @media (max-width: 1200px) {
    .TimeTable {
      margin-right: -15px;
    }

    .TimeTableSection {
      border-radius: 5px 0 0 0;
    }

    .TimeTableContent {
      border-right: 0;
    }
  }

  @media (max-width: 768px) {
    .TimeTable {
      margin-left: -15px;
    }

    .TimeTableSection {
      padding-left: 60px;
    }
  }

</style>
