import "@/styles/main.scss";
import { createVuetify } from "vuetify";
import config from "@/config";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const options = config.vuetify;
const vuetify = createVuetify({
  components,
  directives,
  ...options
});

export default vuetify;
