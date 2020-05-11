import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading);

let loader = null;// позволяет контролировать что прелоадер на странице будет в единственном экземпляре

/**
 * Запускает отображение прелоадера на всю страницу.
 * @param {HTMLElement=} container если необходимо отобразить прелоадер только для определенного html блока.
 */
function loaderStart(container = null) {
  if (null === loader) {
    loader = Vue.$loading.show({
      container: container,
      loader: 'dots',
      color: '#3eaf7c',
      zIndex: 999
    });
  }
}

/**
 * Останавливает отображение последнего запущенного прелоадера на странице.
 */
function loaderEnd() {
  if (null !== loader) {
    loader.hide();
    loader = null;
  }
}

export default { loaderStart, loaderEnd };