<template>
  <div class="Faq">
    <h2 class="Title"> FREQUENTLY ASKED QUESTIONS</h2>

    <div class="row Answers">
      <div class="col-md-6">
        <h3 class="Question">What is JavaScript Conference Armenia?</h3>
        <p class="Answer">
          JS Conference is a big IT event that brings together a huge number of IT
          professionals to attend talks, workshops, participate in
          competitions, get informed about open positions at sponsor IT companies and more.
        </p>

        <h3 class="Question">Who are the speakers?</h3>
        <p class="Answer">
          To learn more about our speakers, please,
          <a href="#Speakers">click here</a>.
        </p>

        <h3 class="Question">What are the talk topics?</h3>
        <p class="Answer">
          To see the talk sessions timetable and topics, please
          <a href="#Schedule">click here</a>.
        </p>

        <h3 class="Question">What is the conference language?</h3>
        <p class="Answer">
          The conference will be held mainly in Armenian but there are also
          English talks included in the program.
        </p>

        <h3 class="Question">When is it going to take place?</h3>
        <p class="Answer">
          The conference will take place from 10:00 to 18:00 on December 9, 2017.
        </p>

        <h3 class="Question">Where is it going to be held?</h3>
        <p class="Answer">
          JavaScript Cօnference Yerevan will be held at the B Building of
          <a href="https://goo.gl/maps/HmDBXyu3G9z" target="_blank">American University of Armenia</a>
          (40 Marshal Baghramyan Ave, Yerevan)․
        </p>

        <h3 class="Question">How to participate?</h3>
        <p class="Answer">
          The entry of JS Conference Yerevan 2017 is invitation-only so
          please make sure to request your invite
          <a href="https://goo.gl/forms/QWQzhSb7HqNn2Hem2" target="_blank">here</a>.
        </p>

      </div>
      <div class="col-md-6">

        <h3 class="Question">How much is the entry-ticket?</h3>
        <p class="Answer">
          The event entry is free of charge.
        </p>

        <h3 class="Question">When is the deadline for registration?</h3>
        <p class="Answer">
          There is no deadline but the sooner you register the more
          interesting it will be for you as a participant as you will
          have the chance to take part in the preconference activities.
        </p>

        <h3 class="Question">Who are behind the JS Conference Armenia? </h3>
        <p class="Answer">
          To see the JS Conference Armenia team, please,
          <a href="#Team">click here</a>.
        </p>

        <h3 class="Question">How can I help the team?</h3>
        <p class="Answer">
          Oh, thank you for your kindness.
          To help us make the JavaScript Conference Armenia happen please <a href="https://goo.gl/cwwyiz" target="_blank">apply here</a>
          to become a JS Conf ninja volunteer!
        </p>

        <h3 class="Question">Who supports JS Conference Armenia?</h3>
        <p class="Answer">
          To learn about our sponsors and partners, please,
          <a href="#Sponsors">click here</a>.
        </p>

        <h3 class="Question">Will I get a certificate of participation?</h3>
        <p class="Answer">
          Your certificate of participation in JS Conference is going to be
          your larger network in IT, updated knowledge,
          nice little gifts and good memories. Do you still need that piece of paper?
        </p>

      </div>
    </div>

  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
.Faq {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  margin: 120px 20px;
}

a {
  color: #4bb463;
  font-weight: bold;
}


.Title {
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 50px;
  color: #198dbf;
}

.Question {
  color: #333;
}

.Answer {
  margin-bottom: 1.5em;
}

.Answers {
  width: 65%;
}

@media (max-width: 768px) {

  .Answers {
    width: 100%;
  }

  .Title {
    font-size: 1.6em;
    margin-bottom: 20px;
  }

  .Question {
    font-size: 1em;
  }

}
</style>
