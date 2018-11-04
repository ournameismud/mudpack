import '@/plugins/logger';

import webfontloader from '@/plugins/webfontloader';
import 'lazysizes';
import { getCookie, setCookie } from 'tiny-cookie';

if (module.hot) {
  module.hot.accept();
}

if (getCookie('fonts-loaded')) {
  $html.classList.add('fonts-loaded');
} else {
  webfontloader();
}

setCookie('critical-css', 1, { expires: '7D', secure: true });

async function init() {
  const [App, routes] = await Promise.all([
    import(/* webpackChunkName: "chunk-app" */ '@/core/App'),
    import(/* webpackChunkName: "chunk-views" */ '@/views')
  ]);
  /* eslint-disable-next-line */
  new App.default({
    // @property {Array} routes - routes object
    // @property {HTMLElement} rootNode - the root html node
    // @property {Array} navLinks - an array of links that should update on navigation
    // @property {Object} classes - clases applied to active links
    // @property {Function} onExit - called before the dom is updated
    // @property {Function} function - called after the dom is updated

    router: {
      routes: routes.default,
      rootNode: document.getElementById('page-wrapper'),
      navLinks: [
        ...document.querySelectorAll('header a'),
        ...document.querySelectorAll('footer a')
      ],
      classes: {
        match: 'is-current',
        root: 'is-current-root',
        parent: 'is-current-parent'
      },
      prefetchTargets: '[data-prefetch]',
      onExit() {},
      onEnter() {}
    },

    // @property {Function} routes - dynamic import of modules - function used by the loader
    chunks: behaviour =>
      import(/* webpackChunkName: "behaviour-[request]" */ `@/behaviours/${behaviour}`)
  }).mount();
}

init();

// import styles from '../css/app.pcss';

// // App main
// const main = async () => {
//   // Import our CSS
//   //const Styles = await import(/* webpackChunkName: "styles" */ '../css/app.pcss');
//   // Async load the vue module
//   const Vue = await import(/* webpackChunkName: "vue" */ 'vue');
//   // Create our vue instance
//   const vm = new Vue.default({
//     el: '#app',
//     components: {
//       confetti: () =>
//         import(/* webpackChunkName: "confetti" */ '../vue/Confetti.vue')
//     },
//     data: {},
//     methods: {},
//     mounted() {
//       console.log('change');
//     }
//   });
// };
// // Execute async function
// main().then(value => {});
