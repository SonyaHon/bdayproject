<template>
  <div class="counter">
    <counter-item title="days" v-model="days" :total="365"></counter-item>
    <counter-item title="hours" v-model="hours" :total="24"></counter-item>
    <counter-item title="minutes" v-model="minutes" :total="60"></counter-item>
    <counter-item title="seconds" v-model="secs" :total="60"></counter-item>
  </div>
</template>

<script>
import moment from "moment";
import CounterItem from "../components/CounterItem";

export default {
  name: "Counter",
  components: { CounterItem },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      secs: 0,
      lastDate: null,
      interval: null
    };
  },
  methods: {
    async getLastDate() {
      try {
        let str = (await this.axios.get('/get-last-date')).data;
        return moment(str);
      } catch (e) {
        return moment();
      }
    },
    updateDate() {
      let curDate = moment();
      // console.log(curDate.toISOString());
      // let diff = curDate.subtract(this.lastDate);
      this.days = curDate.diff(this.lastDate, 'days');
      this.hours = curDate.subtract(this.days, 'days').diff(this.lastDate, 'hours');
      this.minutes = curDate.subtract(this.days, 'days').subtract(this.hours, 'hours').diff(this.lastDate, 'minutes');
      this.secs = curDate.subtract(this.days, 'days').subtract(this.hours, 'hours').subtract(this.minutes, 'minutes').diff(this.lastDate, 'seconds');
    }
  },
  async mounted() {
    this.lastDate = await this.getLastDate();
    console.log(this.lastDate.toISOString());
    this.interval = setInterval(() => {
      this.updateDate();
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.counter {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 959px) {
  .counter {
    flex-direction: column !important;
  }
}
</style>
