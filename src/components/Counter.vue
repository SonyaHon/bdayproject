<template>
    <div class="days-counter">

    </div>
</template>

<script>

  import moment from 'moment';

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
 }
</style>
