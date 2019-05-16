<template>
    <v-layout column fill-height align-center>
      <v-flex>
        <days-counter></days-counter>
      </v-flex>
    </v-layout>
</template>

<script>
import DaysCounter from "../components/Counter";

export default {
  name: "home",
  components: { DaysCounter },
  methods: {
  }
};
</script>
