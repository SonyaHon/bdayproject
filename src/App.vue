<template>
    <v-app>
        <v-toolbar dense>
            <v-toolbar-title>Polina`s days without accidents</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <home></home>
        </v-content>
    </v-app>
</template>

<script>

    import Home from './views/Home';

    export default {
      name: 'c-app',
      components: {Home}
    }
</script>

<style lang="scss">

</style>
