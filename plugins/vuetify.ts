import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nxutApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
    })
    nxutApp.vueApp.use(vuetify)
})