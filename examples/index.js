'use strict';

import Vue from 'vue';
import App from './App.vue';

// materialize is being used for demonstration only
import "materialize-css/dist/css/materialize.css";
import "./scss/style.scss";
import M from 'materialize-css';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app')

