import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCopyright , faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram , faTwitter , faFacebook , faPinterest } from '@fortawesome/free-brands-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faCartShopping ,faCopyright , faInstagram , faTwitter, faFacebook, faPinterest, faAngleLeft, faAngleRight)


/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
