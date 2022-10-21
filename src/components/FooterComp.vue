<template>
  <footer>
    <div class="block-footer wrapper-container" id="footer">
      <div class="btn-block">
        <v-btn
          class="button-return"
          href="#"
          id="footer"
          v-scroll-to="'#start'"
          color="indigo darken-1"
          elevation="11"
          large
          rounded
        >ВЕРНУТЬСЯ</v-btn>
      </div>

      <div class="footer-contacts">
        <a href="https://t.me/MsNaily" class="text-contact">Telegram</a>
        <a href="https://github.com/Anna-Naily" class="text-contact">Github</a>
      </div>
      <p class="text-copy">&COPY;&ensp;2022 &ensp;Anna Umanskaya</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/main.scss';

footer {
  background-color: #181e2f;
}
.block-footer {
  display: flex;
  flex-direction: column;
}
.footer-contacts {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.text-contact {
  cursor: pointer;
  position: relative;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-family: 'Work Sans', sans-serif;
}
.text-contact:after {
  display: block;
  position: absolute;
  left: 0;
  width: 0;
  height: 2px;
  margin-top: 7px;
  background-color: #397de4;
  content: '';
  transition: width 0.3s ease-out;
}
.text-contact:hover::after,
.text-contact:focus::after {
  width: 100%;
}
.text-copy {
  color: #fff;
  text-align: center;
  margin-top: 35px;
  font-family: 'Work Sans', sans-serif;
}
.btn-block {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
.button-return {
  width: fit-content;
  color: #fff;
}
</style>