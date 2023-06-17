// plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const theme = {
  dark: false,
  colors: {
    primary: '#ffb600'
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    },
    theme: {
      defaultTheme: 'theme',
      themes: {
        theme
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
