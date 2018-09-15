<template>
  <div class="Quiz" id="Quiz">
    <div class="Context">
      <div class="Title">
        QUIZ
      </div>
      <div class="Description">
        PARTICIPATE IN QUIZZES, WIN BADGES, BECOME A TRUE JAVASCRIPT NI
      </div>

      <div class="row justify-content-center Badges">
        <div class="col-6 col-sm-6 col-md-4 col-lg-3  col-xl-3">
          <a class="Badge Badge-JavaScript" href="#js">
            <div class="Image"></div>
            <h3 class="Name">JavaScript</h3>
          </a>
        </div>
        <div class="col-6 col-sm-6 col-md-4 col-lg-3  col-xl-3">
          <a class="Badge Badge-Node" href="#node">
            <div class="Image"></div>
            <h3 class="Name">Node.JS</h3>
          </a>
        </div>
        <div class="col-6 col-sm-6 col-md-4 col-lg-3  col-xl-3">
          <a class="Badge Badge-React" href="#react">
            <div class="Image"></div>
            <h3 class="Name">React</h3>
          </a>
        </div>
        <div class="col-6 col-sm-6 col-md-4 col-lg-3  col-xl-3">
          <a class="Badge Badge-Angular" href="#angular">
            <div class="Image"></div>
            <h3 class="Name">Angular</h3>
          </a>
        </div>
      </div>
    </div>

    <div class="VectorLeft"></div>
    <div class="VectorRight"></div>

  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
.Quiz {
  display: flex;
  padding: 3% 10px 3% 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  box-shadow: 1px -4px 23px -6px grey;
  margin-bottom: 90px;
  margin-top: -150px;
  position: relative;
  width: 50%;
  left: 0;
  right: 0;
  margin: 50px auto;
  margin-bottom: -300px;
}

.Context {
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.Title {
  font-size: 75px;
  text-transform: uppercase;
  color: #ffe549;
}

.Description {
  text-transform: uppercase;
}

.Badges {
  display: flex;
  margin-top: 50px;
}

.Badge .Image {
  background-size: contain;
  background-position: 50%;
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-bottom: 20px;
}

.Badge .Name {
  text-align: center;
  color: black;
  text-transform: uppercase;
}

.Badge-JavaScript .Image {
  background-image: url('./badges/javascript.png');
}

.Badge-Node .Image {
  background-image: url('./badges/nodejs.png');
}

.Badge-React .Image {
  background-image: url('./badges/react.png');
}

.Badge-Angular .Image {
  background-image: url('./badges/angular.png');
}

.VectorLeft {
  width: 150px;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  margin-left: -80px;
  margin-top: -100px;
  z-index: -1;
  background-image: url('./vector-left.png');
}

.VectorRight {
  width: 150px;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  margin-right: -80px;
  z-index: -1;
  background-image: url('./vector-right.png');
}

@media (max-width: 1200px) {
  .Quiz {
    width: 65%;
  }
}

@media (max-width: 600px) {
  .Quiz {
    margin-top: 50px;
    width: 100%;
    margin-bottom: -20vh;
    box-shadow: none;
  }

  .VectorRight, .VectorLeft {
    display: none;
  }
}
</style>
