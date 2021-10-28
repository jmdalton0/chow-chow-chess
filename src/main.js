import {
  createApp
} from 'vue'

import App from './App.vue'

import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  faPlus,
  faChevronLeft,
  faChevronRight,
  faCog,
  faChessPawn,
  faChessRook,
  faChessKnight,
  faChessBishop,
  faChessQueen,
  faChessKing,
  faExclamation
} from '@fortawesome/free-solid-svg-icons'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(
  faPlus,
  faChevronLeft,
  faChevronRight,
  faCog,
  faChessPawn,
  faChessRook,
  faChessKnight,
  faChessBishop,
  faChessQueen,
  faChessKing,
  faExclamation
);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');