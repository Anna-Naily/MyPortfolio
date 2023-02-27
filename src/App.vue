<template>
  <v-app>
    <div class="app">
      <router-view />
      <FooterComp id="contacts" />
    </div>
  </v-app>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
export default {
  name: 'App',

  components: { FooterComp },

  data: () => ({}),
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

@import './assets/style/main.scss';

.app {
  display: flex;
  flex-direction: column;
}
</style>

