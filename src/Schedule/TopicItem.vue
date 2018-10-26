<template>
  <div
    class="TopicContainer"
    :style="{ height: 3 * topic.duration + 'px' }">
    <div
      class="Topic"
      :class="[getTopicLevelClassname(), {
        '-empty': !topic.name,
        '-small': topic.duration < 45,
        '-technical': topic.name === 'N/A' || topic.name === 'Break',
        '-no-speaker': !speaker.name,
        '-has-speaker': speaker.name,
      }]">
      <div
        class="Name"
        :class="{

        }">
        <a class="topicUrl" v-if="topic.videoUrl" :href="topic.videoUrl">
          <i class="fa fa-youtube-play" aria-hidden="true"></i>  {{ topic.name }}
        </a>
        <span v-if="!topic.videoUrl">
          {{ topic.name }}
        </span>

      </div>
      <div class="Body" v-if="speaker.name">
        <div class="row">
          <div class="col-4">
            <!-- <span
              class="Badge LangBadge"
              :class="`-${topic.lang}`"
              v-tooltip.bottom.start="{
                content: getLanguageTooltipContent(),
                delay: 50,
              }">
              {{ topic.lang }}
            </span>
            <span
              class="Badge LevelBadge"
              :class="getTopicLevelClassname()"
              v-tooltip.bottom.start="{
                content: getTopicLevelTooltipContent(),
                delay: 50,
              }"></span> -->
          </div>
          <div class="col-8">
            <div class="Speaker" >
              <span
                v-tooltip.bottom.end="{
                  content: speaker.position,
                  delay: 50,
                }">
                {{ speaker.name }}
                <div
                  class="Avatar"
                  v-if="speaker.img"
                  :style="{ backgroundImage: `url(${speaker.img})` }" ></div>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    topic: {
      default: () => ({

      }),
    },
    speaker: {
      default: () => ({

      }),
    },
  },
  methods: {
    getTopicLevelClassname: function getTopicLevelClassname() {
      if (!this.topic || !this.topic.levels || !this.topic.levels.length) {
        return '-level-all';
      }

      const levels = this.topic.levels.join('-')
        .replace('0', 'beginner')
        .replace('1', 'intermadiate')
        .replace('2', 'advanced');

      return `-level-${levels}`;
    },
    getTopicLevelTooltipContent: function getTopicLevelName() {
      return `Topic level: ${this.getTopicLevelClassname().replace(/-level-/, '')}`;
    },
    getLanguageTooltipContent: function getLanguageTooltipContent() {
      if (this.topic.lang === 'am') {
        return 'Language: Armenian';
      }
      else if (this.topic.lang === 'ru') {
        return 'Language: Russian';
      }
      else if (this.topic.lang === 'en') {
        return 'Language: English';
      }

      return '';
    },
  },
  // ['topic', 'speaker'],
};
</script>




<style scoped>
  .TopicContainer {
    display: flex;
    width: 100%;
    align-items: stretch;
    padding: 7px 5px;
    text-align: left;
  }

  .Topic:not(.-empty) {
    background-color: rgba(248, 248, 248, 0.95);
    padding: 5px 10px;
    border-radius: 3px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.0);
    transition: all .3s ease;
  }

  .Topic.-small:not(.-no-speaker) {
     padding: 3px 10px;
   }

  .Topic.-small:not(.-no-speaker) .Name {
    font-size: .7em;
    padding-bottom: 5px;
    margin-bottom: 7px;
  }

  .Topic.-has-speaker .Name {
    border-bottom: 1px solid #fbe0f4;
  }

   .Topic.-no-speaker .Name {
     margin: 0;
   }

   .Topic.-technical .Name {
     color: #ccc;
     padding-bottom: 0;
   }

  .topicUrl {
    color: #0081c4;
  }

  .Name {
    width: 100%;
    font-size: .9em;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-weight: bold;
    text-align: center;
  }

  .Body {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: .8em;
  }

  .Body > .row {
    flex: 1;
  }

  .Badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    background-color: #fff;
    border-radius: 4px;
    font-size: .8em;
    margin-right: 2px;
    vertical-align: top;
    opacity: .6;
    transition: all .3s ease;
    cursor: default;
  }

  .Badge:hover {
    opacity: 1;
  }

  .LevelBadge {
    border: 11px solid;
    background-color: #fff;
  }

  .Topic.-level-all,
  .LevelBadge.-level-all {
    border-color: #00b9ff;
    border-left-color: #00b9ff;
    border-top-color: #9fc718;
    border-right-color: #f38e1d;
    border-bottom-color: #de3574;
  }

  .Topic.-level-beginner,
  .LevelBadge.-level-beginner {
    border-color: #9fc718;
  }

  .Topic.-level-beginner-intermadiate,
  .LevelBadge.-level-beginner-intermadiate {
    border-top-color: #9fc718;
    border-left-color: #9fc718;
    border-right-color: #f38e1d;
    border-bottom-color: #f38e1d;
  }

  .Topic.-level-intermadiate,
  .LevelBadge.-level-intermediate {
    border-color: #f38e1d;
  }

  .Topic.-level-intermadiate-advanced,
  .LevelBadge.-level-intermadiate-advanced {
    border-color: #f38e1d;

    border-top-color: #f38e1d;
    border-left-color: #f38e1d;
    border-right-color: #de3574;
    border-bottom-color: #de3574;
  }

  .Topic.-level-advanced,
  .LevelBadge.-level-advanced {
    border-color: #de3574;
  }

  .LangBadge {
    border: 1px solid;
  }

  .LangBadge.-en {
    color: #0088c2;
    border-color: #0088c2;
  }

  .LangBadge.-am {
    color: #f07e31;
    border-color: #f07e31;
  }

  .Speaker {
    font-size: .82em;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #999;
    text-align: right;
    transition: all .3s ease;
    cursor: default;
  }

  .Speaker:hover .Avatar {
    opacity: 1;
  }

  .Avatar {
    width: 24px;
    height: 24px;
    display: inline-block;
    border-radius: 4px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin-left: 4px;
    border: 1px solid #0075bf;
    transition: all .3s ease;
    opacity: .7;
  }

</style>
