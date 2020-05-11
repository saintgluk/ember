export const resizeWindow = {
  data() {
    return {
      /** @type {number} хранит значение высоты страницы в px */
      windowHeight: 0,
      /** @type {number} хранит высоту сумму значений известных элементов */
      minusWindowHeight: 0
    };
  },
  mounted() {
    /**
     * Подписывает метод на событие изменения окна.
     */
    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowHeight);
      this.getWindowHeight();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowHeight);
  },
  methods: {

    /**
     * @field windowHeight - высчитывает высоту окна.
     * @field minusWindowHeight - высчитывает высоту известных блоков на странице.
     */
    getWindowHeight() {
      this.windowHeight = document.documentElement.clientHeight;
      this.minusWindowHeight = (this.$el.querySelector('.btn-line') ? this.$el.querySelector('.btn-line').offsetHeight : 0) +
      (this.$el.querySelector('table thead') ? this.$el.querySelector('table thead').offsetHeight : 0) +
      (this.$el.querySelector('.b-table-top-row') ? this.$el.querySelector('.b-table-top-row').offsetHeight : 0) +
      (this.$el.querySelector('.footer-table') ? this.$el.querySelector('.footer-table').offsetHeight : 0);
    }
  }
};