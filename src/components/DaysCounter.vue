<template>
    <div class="days-counter">
        <div class="days">
            {{daysWithoutAccident}}
        </div>
        <div class="wrapper">
            <div class="hours">
                {{hours}}:
            </div>
            <div class="minutes">
                {{minutes}}:
            </div>
            <div class="secs">
                {{secs}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DaysCounter",
    data() {
      return {
        daysWithoutAccident: 0,
        hours: 21,
        minutes: 17,
        secs: 23,
      };
    },
    methods: {
      async getLastDate() {
      }
    },
    mounted() {
      // set interval to change date
    }
  };
</script>

<style lang="scss" scoped>
 .days-counter {
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;

     .days {
         font-size: 90px;
     }

     .explanation {

     }

     .wrapper {
         display: flex;
         font-size: 40px;
     }
 }
</style>
