<template>
    <v-app id="inspire">
        <v-app-bar class="bg-grey-ligth-2" elevation-0 scroll-behavior="hide" scroll-threshold="100">
            <v-img class="mx-2" src="https://i.imgur.com/qgGY4tB.png" max-height="40" max-width="40" contain></v-img>
            <v-toolbar-title>Application</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn>
                <nuxt-link to="/">
                    <h4>Home</h4>
                </nuxt-link>
            </v-btn>

            <v-btn>
                <nuxt-link to="/product">
                    <h4>Product</h4>
                </nuxt-link>
            </v-btn>

            <v-btn>
                <nuxt-link to="/about">
                    <h4>About</h4>
                </nuxt-link>
            </v-btn>
        </v-app-bar>

        <v-main class="bg-grey-darken-2">
            <slot />
        </v-main>
    </v-app>
</template>
  
<script setup>
import { ref } from 'vue'

const drawer = ref(null)
</script>
  
<script>
export default {
    data: () => ({ drawer: null }),
}
</script>