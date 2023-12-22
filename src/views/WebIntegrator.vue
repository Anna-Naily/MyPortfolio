<template>
  <v-app>
    <div>
      <div class="project-background">
        <div class="project">
          <div class="header-block wrapper">
            <v-btn
              size="large"
              rounded="pill"
              color="grey-lighten-5"
              class="header-block__btn"
              href="https://myportfolio-orpin-two.vercel.app/"
            >Вернуться назад</v-btn>
            <div class="header-block__heading">WEB Integrator</div>
            <div class="header-block__info">
              <span class="info-span">
                <span class="info-span_blue">РОЛЬ</span>FRONT-END DEVELOPER
              </span>
              <span class="info-span">
                <span class="info-span_blue">ЗАДАЧА</span>СОЗДАТЬ САЙТ НА VUE JS С ИСПОЛЬЗОВАНИЕМ БЭМ И PIXEL PERFECT
              </span>
              <span class="info-span">
                <span class="info-span_blue">ПЕРИОД</span>ДЕКАБРЬ 2023
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="discription-block">
        <div class="discription-block__content wrapper">
          <span class="discription-block__heading">О Проекте</span>
          <p
            class="discription-block__text"
          >Проект разрабатывался в рамках стажировки, изменен в целях сохранения конфединциальности. Выполнен на Vue Js, собран с помощью Vue cli. Верстался адаптивно по макету на три брэкпоинта - 1440, 768 и 375, по БЭМ, проверялся с помощью Pixel Perfect.</p>
          <a
            href="https://web-integrator.vercel.app/"
            class="discription-block__btn"
          >Посетить Веб-сайт</a>
        </div>
      </div>
      <div class="main-project-bcg">
        <div class="main-project-block wrapper">
          <div class="left-bar">
            <div class="left-bar__heading">Реализация</div>
            <p
              class="left-bar__text"
            >Проект разработан в виде многостраничного сайта - Главная, Страница отзывов, Страница Статьи и Видео. Используемый стек: Vue js, HTML5, SCSS, Vuex, Vue-router, Vue Cli, Pixel Perfect, БЭМ, Figma, Gitlab. Верстка реализована по созданному макету в Figma. Я, как Front-end developer, в данном проекте занималась разработкой с нуля функционала страниц и их версткой.</p>
          </div>
          <div class="right-bar">
            <img src="../assets/img/adaptiveWI.png" alt />
          </div>
        </div>
      </div>
      <div class="carousel">
        <div class="carousel-content wrapper">
          <div class="carousel-content__heading">Дизайн</div>
          <v-carousel class="carousel-wrapper">
            <v-carousel-item src="../assets/img/webintegrator1.png" cover></v-carousel-item>
            <v-carousel-item src="../assets/img/webintegrator2.png" cover></v-carousel-item>
            <v-carousel-item src="../assets/img/webintegrator3.png" cover></v-carousel-item>
            <v-carousel-item src="../assets/img/webintegrator4.png" cover></v-carousel-item>
            <v-carousel-item src="../assets/img/webintegrator5.png" cover></v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
  </v-app>
</template>
    
    <script>
export default {
  name: 'WebIntegrator',
};
</script>
    
<style lang="scss" scoped>
@import '../assets/style/main.scss';
@import '../assets/style/responsiveStyle.scss';

.project-background {
  background: url('@/assets/img/webintegratorBcg.png') no-repeat;
  background-size: auto;
  background-position: center;
  height: 893px;
}
.project {
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba($color: #060c10, $alpha: 0.7);
}
.header-block {
  display: flex;
  flex-direction: column;
  .header-block__btn {
    margin-left: auto;
    margin-right: 0;

    margin-top: 20px;
    padding: 22px;
  }
  .header-block__heading {
    text-align: center;
    font-size: 65px;
    font-weight: bold;
    color: white;
    margin-top: 340px;
  }
  .header-block__info {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: bold;
    color: white;
    margin-top: 300px;
  }
}
.info-span_blue {
  color: #37a5eb;
  margin-right: 8px;
}
.discription-block {
  background-color: #060c10;
  .discription-block__content {
    width: 560px;
    margin: auto;
    padding: 60px 0px 60px 0px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .discription-block__heading {
      color: white;
      font-size: 60px;
      font-weight: bold;
    }
    .discription-block__text {
      color: white;
      font-size: 18px;
      font-weight: 300;
      margin-top: 20px;
      text-align: justify;
    }
    .discription-block__btn {
      color: white;
      font-size: 18px;
      padding: 15px;
      border: 1px solid white;
      margin-top: 20px;
      transition: 0.2s;
      text-decoration: none;
      &:hover {
        background-color: white;
        color: #060c10;
      }
    }
  }
}
.main-project-bcg {
  background-color: #eaeeee;
}
.main-project-block {
  padding: 60px 0px 60px 0px;
  display: flex;
  justify-content: space-between;
  .left-bar {
    width: 400px;
    .left-bar__heading {
      font-size: 40px;
      font-weight: bold;
      color: #060c1096;
      padding-bottom: 30px;
      border-bottom: 0.5px solid #060c102f;
    }
    .left-bar__text {
      color: rgba(0, 0, 0, 0.801);
      font-size: 16px;
      font-weight: 400;
      text-align: justify;
      margin-top: 30px;
    }
  }
  .right-bar {
    width: 400px;
  }
}
.carousel {
  background-color: #eaeeee;
  .carousel-content {
    padding: 60px 0px 60px 0px;
    display: flex;
    flex-direction: column;
    .carousel-content__heading {
      font-size: 35px;
      font-weight: bold;
      color: #060c1096;
      padding-bottom: 30px;
      border-bottom: 0.5px solid #060c102f;
      text-align: right;
      margin-bottom: 40px;
      width: 400px;
      margin-left: auto;
      margin-right: 0;
    }
  }
}
.carousel-wrapper {
  margin: auto;
  width: 900px;
}
</style>