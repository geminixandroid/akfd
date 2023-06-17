<template lang="pug">
v-app
  v-navigation-drawer(v-model="drawer" app width="300px" temporary)
    Navigation
  v-app-bar(app color="primary" hide-on-scroll)
    v-app-bar-nav-icon(@click="drawer = !drawer")
    v-img.mr-2(src="/img/logo.svg" width="32" height="32" max-width="32" max-height="32" contain)
    v-toolbar-title(v-if="$vuetify.display.xs")
      span АКФД
    v-toolbar-title.text-uppercase(v-else)
      span Алтайская Краевая Федерация Джиу-Джитсу
    v-spacer
    v-btn(href="https://instagram.com/altai_jiu_jitsu_federation" target="_blank" icon)
      v-icon mdi-instagram
    v-btn(href="https://vk.com/altayjiujitsu" target="_blank" icon)
      v-icon mdi-vk
    v-btn(href="https://ok.ru/altjiujitsu" target="_blank" icon)
      v-icon mdi-odnoklassniki
    v-btn(href="mailto:altai.jiujitsu@gmail.com" icon)
      v-icon mdi-gmail
  v-container(fluid style="background-color: #fafafa")
    slot
  v-footer(app)
    v-spacer
    v-btn.overline( small right variant=text href="mailto:geminixandroid@gmail.com")
      span разработан: geminixandroid@gmail.comv-icon
      v-icon mdi-email-outline
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Navigation } from '#components'

const drawer = ref(false)
</script>
