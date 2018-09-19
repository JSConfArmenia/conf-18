<template>
  <section class="Schedule" id="Schedule">
    <div class="Container">
      <h2 class="Title">Event Schedule</h2>
      <h3 class="Subtitle">November 3, 2018</h3>

      <p class="Description">Coming soon...</p>
    </div>

    <div class="ScheduleBgLeft"></div>
  </section>
</template>

<script>
export default {

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
