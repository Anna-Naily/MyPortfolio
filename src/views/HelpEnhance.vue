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
            <div class="header-block__heading">Help Enhance</div>
            <div class="header-block__info">
              <span class="info-span">
                <span class="info-span_blue">РОЛЬ</span>FRONT-END DEVELOPER
              </span>
              <span class="info-span">
                <span class="info-span_blue">ЗАДАЧА</span>СОЗДАТЬ ВЕБ-ВЕРСИЮ ANDROID-ПРИЛОЖЕНИЯ
              </span>
              <span class="info-span">
                <span class="info-span_blue">ПЕРИОД</span>КОНЕЦ 2022-НАЧАЛО 2023
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
          >Help Enhance - это точный симулятор системы заточки из известной многопользовательской игры Black Desert Online. Симулятор был создан по подобию своей предшествующей android-версии. Его основная задача - прогнозировать результат усиления игрового предмета, а также подсчитывать прибыль, убытки и визуализировать процесс на графике.</p>
          <a href="https://www.helpenhance.ru/" class="discription-block__btn">Посетить Веб-сайт</a>
        </div>
      </div>
      <div class="main-project-bcg">
        <div class="main-project-block wrapper">
          <div class="left-bar">
            <div class="left-bar__heading">Реализация</div>
            <p
              class="left-bar__text"
            >Как Front-end developer, я реализовала проект в виде одностраничного веб-приложения. Используемый стек: Vue Js, Vuex, HTML, SCSS, HighCharts. Макет был создан с помощью Figma по техническому заданию заказчика. Сама страница оснащена звуковым оформлением и адаптирована под стандартные экраны.</p>
          </div>
          <div class="right-bar">
            <img src="../assets/img/adaptiveHE.png" alt />
          </div>
        </div>
      </div>
      <div class="carousel">
        <div class="carousel-content wrapper">
          <div class="carousel-content__heading">Дизайн</div>
          <v-carousel class="carousel-wrapper">
            <v-carousel-item src="../assets/img/helpenhance1.png" cover></v-carousel-item>
            <v-carousel-item src="../assets/img/helpenhance2.png" cover></v-carousel-item>
            <v-carousel-item src="../assets/img/helpenhance3.png" cover></v-carousel-item>
            <v-carousel-item src="../assets/img/helpenhance4.png" cover></v-carousel-item>
            <v-carousel-item src="../assets/img/helpenhance5.png" cover></v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'HelpEnhance',
};
</script>

<style lang="scss" scoped>
@import '../assets/style/main.scss';
@import '../assets/style/responsiveStyle.scss';

.project-background {
  background: url('@/assets/img/helpenhanceBcg1.png') no-repeat;
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