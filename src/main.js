import DefaultLayout from '~/layouts/Default.vue'

import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'

import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  faTrophy,
  faRss,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faLess,
  faWordpress,
  faGulp,
  faGrunt,
  faNpm, faGitlab, faPhp, faVuejs, faSymfony, faGitSquare, faDocker,
} from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faTrophy,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faLess,
  faWordpress,
  faGulp,
  faGrunt,
  faNpm,
  faRss,
  faCheck,
  faGitlab,
  faPhp,
  faSymfony,
  faVuejs,
  faGitSquare,
  faDocker
)

export default function (Vue, {
  head,
}) {
  Vue.use(VueScrollTo)
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)

  Vue.component('font-awesome', FontAwesomeIcon)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed&display=swap'
  })
}
