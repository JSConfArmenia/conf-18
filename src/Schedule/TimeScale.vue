<template>
  <div class="TimeScale">
    <div
      v-for="(minutesPassed, index) in timeScale"
      :key="index"
      class="Item">
      <div class="Label">
        {{ getTime(minutesPassed) }}
      </div>
      <div class="Ruller"></div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['start'],
  data: () => ({
    timeScale: Array.from(Array(35)).map((item, index) => (index * 15)),
  }),
  methods: {
    getTime: function getTime(minutesPassed) {
      return moment(`2017-12-09 ${this.start}:00`).add(minutesPassed, 'm').format('H:mm');
    },
  },
  mounted: function mounted() {

  },
};
</script>

<style scoped>

  .TimeScale {
    position: absolute;
    left: 0;
    right: 0;
  }

  .Item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 45px;
    flex-basis: 45px;
  }

  .Label {
    flex: 0;
    padding-right: 10px;
    padding-left: 10px;
    text-align: right;
    font-size: .9em;
    position: relative;
    top: -11px;
  }

  .Ruller {
    flex: 1;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .Item:nth-child(odd) .Ruller {
    /* background-color: #e23f72; */
  }

  .Item:nth-child(even) .Ruller {
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    .TimeScale {
      font-size: .9em;
    }

    .Label {
      /* padding-left: 0; */
      padding-left: 15px;
      padding-right: 5px;
    }
  }
</style>
