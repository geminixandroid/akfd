<template>
    <v-list nav dense>
        <v-list-item>
            <NuxtLink to="/"><v-icon left>mdi-home</v-icon>Главная</NuxtLink>
        </v-list-item>
        <!--<v-list-item><v-icon left>mdi-newspaper</v-icon>Новости</v-list-item>-->
        <v-list-item><v-icon left>mdi-calendar-check</v-icon>Мероприятия</v-list-item>
        <v-list-item><v-icon left>mdi-human-greeting</v-icon>Наши тренеры</v-list-item>
        <v-list-item><v-icon left>mdi-human-handsup</v-icon>Гордость федерации</v-list-item>
        <v-list-item><v-icon left>{{ handshake }}</v-icon>Партнеры федерации</v-list-item>
        <v-list-item><v-icon left>mdi-pill</v-icon>Антидопинг</v-list-item>
        <v-divider></v-divider>
        <v-list-item>
            <v-expansion-panels flat accordion>
                <v-expansion-panel>
                    <v-expansion-panel-title>Расписание</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list-item>
                            <v-list-item-title>
                                СШОР-3
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                г.Барнаул
                            </v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                ПОСПЕЛИХИНСКАЯ ДЮСШ
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                с.Поспелиха
                            </v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                СК Питон
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                г.Барнаул
                            </v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                Сингитай
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                г.Барнаул
                            </v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                СПК ПАРТИЗАН
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                г.Барнаул
                            </v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                СК Пересвет
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                с.Березовка
                            </v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                СК Алан
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                с.Черемное
                            </v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                СК FERRUM
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                с.Бобровка
                            </v-list-item-subtitle>
                        </v-list-item>
                        <v-divider></v-divider>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>Ведущие спортсмены</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list-item>до 21 года</v-list-item>
                        <v-list-item>до 18 лет</v-list-item>
                        <v-list-item>до 16 лет</v-list-item>
                        <v-list-item>до 14 лет</v-list-item>
                        <v-list-item>до 12 лет</v-list-item>
                        <v-divider></v-divider>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>Судейство</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list-item>Коллегия судей</v-list-item>
                        <v-list-item>Правила соревнований</v-list-item>
                        <v-list-item>ЕВСК</v-list-item>
                        <v-list-item>Новости</v-list-item>
                        <v-divider></v-divider>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>Федерация</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list-item>Руководство</v-list-item>
                        <v-list-item>История</v-list-item>
                        <v-divider></v-divider>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-list-item>
    </v-list>
</template>

<script>
import { mdiHandshake, mdiPodium } from '@mdi/js'
export default {
    name: "Navigation",
    data: () => {
        return {
            items: [],
            podium: mdiPodium,
            handshake: mdiHandshake
        }
    },
}
</script>