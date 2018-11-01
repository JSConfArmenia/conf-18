<template>
  <section class="Team" id="Team">
    <div class="Container">
      <h2 class="Title">Core Team</h2>

      <div class="row">
        <div
          class="col MemberCol"
          v-for="(member, index) in members"
          :key="index">
          <div class="Member">
            <div
              class="Img"
              :style="{
                backgroundImage: `url(${member.img})`
              }">
            </div>
            <h3 class="Name">{{member.name}}</h3>
            <h5 class="Position">{{member.position}}</h5>
          </div>
        </div>
       </div>

    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    members: [
      {
        img: '/team/Alexander_Adamyan.jpg',
        name: 'Alexander Adamyan',
        position: 'Co-Founder at Simply Technologies',
      },
      {
        img: '/team/Varser_Zakaryan.jpg',
        name: 'Varser Zakaryan',
        position: 'Project Manager at JavaScript Conference Armenia',
      },
      {
        img: '/team/Gevorg_Harutyunyan.jpg',
        name: 'Gevorg Harutyunyan',
        position: 'Front-End Architect at Screenful, Founder of ModularCode',
      },
      {
        img: '/team/Rouben_Meschian.jpg',
        name: 'Rouben Meschian',
        position: 'Founding Software Engineer at Cambridge Semantics',
      },
      {
        img: '/team/Edgar_Marukyan.jpg',
        name: 'Edgar Marukyan',
        position: 'CTO at Renderforest',
      },
    ]
  })
};
</script>

<style scoped lang="scss">
  .Title {
    text-align: center;
    color: #198dbf;
    margin-bottom: 30px;
  }

  .MemberCol {
    display: flex;
    justify-content: center;
  }

  .Member {
    max-width: 180px;
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
  }

  .Img {
    width: 100%;
    padding-bottom: 100%;
    margin-bottom: 10px;
    background-size: cover;
    background-position: center;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 50%;
    filter: grayscale(90%);
    transition: .3s ease all;
  }

  .Member:hover {
    .Img {
      filter: grayscale(0);
    }
  }

  .Name {
    margin-bottom: 0;
    font-size: 1em;
  }

  .Position {
    color: #999;
    font-size: .6em;
  }

  @media (max-width: 600px) {
    .MemberCol {
      width: 100%;
      min-width: 100%;
    }
  }
</style>
