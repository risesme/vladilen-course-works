// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      isOver: false,
      steps: [
        {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ]
    }
  },
  template: `
    <div class="card">
      <h1>План по изучению Vue.js</h1>

      <div class="steps">
        <div class="steps-content">
          {{ currentStep.text }}
        </div>
        <ul class="steps-list">
          <li
            v-for="(step, idx) in steps"
            :class="['steps-item', { done: idx < activeIndex || isOver, active: idx === activeIndex && !isOver }]"
            @click="setActive(idx)"
          >
            <span>{{ idx + 1 }}</span>&nbsp;{{ step.title }}
          </li>
        </ul>
        <div v-if="!isOver">
          <button class="btn" :disabled="atBegin" @click="prev">Назад</button>
          <button
            class="btn primary"
            @click="nextOfFinish"
            v-text="atEnd ? 'Закончить' : 'Вперед'"
          ></button>
        </div>
        <div v-else>
          <button class="btn" @click="reset">Начать заново</button>
        </div>
      </div>
    </div>
  `,
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      (this.atBegin || this.activeIndex--)
    },
    reset() {
      // сброс курсора на первый элемент списка
      this.setActive(0)
    },
    nextOfFinish() {
      // кнопка вперед или закончить
      if (this.atEnd) {
        this.isOver = true
      } else {
        this.activeIndex++
      }
    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
      this.activeIndex = idx
      this.isOver = false
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    currentStep() {
      return this.steps[this.activeIndex]
    },
    // 2. выключена ли кнопка назад
    atBegin() {
      return this.activeIndex === 0
    },
    // 3. находимся ли мы на последнем шаге
    atEnd() {
      return this.activeIndex === this.steps.length - 1
    }
  }
}

Vue.createApp(App).mount('#app')