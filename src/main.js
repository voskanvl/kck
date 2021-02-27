import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

Vue.config.productionTip = false;

window.app = new Vue({
	customOption: 'что-нибудь',
	created: function() {
		// console.log(this.$options); // => 'что-нибудь'
	},
	render: h => h(App),
}).$mount('#app');
