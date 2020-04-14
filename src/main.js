import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import router from './router/index';

Vue.use(VueResource);
Vue.use(router);

// Custom Directives
Vue.directive('theme', {
  bind(el, binding) {
    if (toString(binding.value) == 'white') {
      el.style.background = 'white';
    } else if (binding.value == 'dark') {
      el.style.background = '#6b6b6b';
    }
  },
});

// Custom Filters
Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...';
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
