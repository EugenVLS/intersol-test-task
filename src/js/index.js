import Vue                  from 'vue';

import App from './vue/components/App.vue';
import '../scss/index.scss';

new Vue( {
    el: '#app',
    render: h => h( App ),
} );