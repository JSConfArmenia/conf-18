<template>
  <div class="Ninja">
    <div class="NinjaImage">

    </div>
    <div class="NinjaShadow">

    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
.Ninja {
  width: 250px;
  height: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .NinjaImage {
    width: 250px;
    height: 250px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('./Ninja.svg');
    position: relative;
    top: 0;
    animation: float 6s ease-in-out infinite;
  }

  .NinjaShadow {
    width: 100px;
    height: 25px;
    border-radius: 50%;
    opacity: 1;
    transform: scale(1.3);
    animation: floatshadow 6s ease-in-out infinite;
    background-color: #d7d7d7a9;
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
@keyframes floatshadow {
  0% {
    transform: scale(1.3);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: .5;
  }
  100% {
    transform: scale(1.3);
    opacity: 1;
  }
}
</style>
