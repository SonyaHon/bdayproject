<template>
    <v-layout row fill-height>
        <v-flex md5>
            <days-counter></days-counter>
        </v-flex>
        <v-divider vertical></v-divider>
        <v-flex class="hidden-sm-and-down">
            <charts></charts>
        </v-flex>
    </v-layout>
</template>

<script>

  import DaysCounter from "../components/DaysCounter";
  import Charts from '../components/Charts';


  export default {
    name:       "home",
    components: {DaysCounter, Charts},
  };
</script>
