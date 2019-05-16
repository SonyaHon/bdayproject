<template>
  <div class="counter-item">
    <v-progress-circular color="primary" size="120" :value="progress">
      <div class="item">
        <div class="number">{{ value }}</div>
        <div class="c-title">{{ title }}</div>
      </div>
    </v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "CounterItem",
  props: ["title", "value", "total"],
  data() {
    return {};
  },
  computed: {
    progress() {
      return (this.value * 100) / this.total;
    }
  }
};
</script>

<style lang="scss" scoped>
.counter-item {
  margin: 16px;
}
.item {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .number {
    font-size: 24px;
  }
  .c-title {
    font-size: 15px;
  }
}
</style>
