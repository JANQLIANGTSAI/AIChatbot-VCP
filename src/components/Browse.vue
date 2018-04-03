<template>
    <v-card>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
        <v-flex
            v-bind="{ [`xs${card.flex}`]: true }"
            v-for="card in cards"
            :key="card.title"
        >
            <v-card>
            <v-card-media
                :src="card.src"
                :height="card.height"
            >
                <v-container fill-height fluid>
                <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                    <span class="headline white--text bold" v-text="card.title"/>
                    </v-flex>
                </v-layout>
                </v-container>
            </v-card-media>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                <v-icon>cast</v-icon>
                </v-btn>
                <v-btn icon>
                <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                <v-icon>share</v-icon>
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
    </v-card>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Check out Fresno State', src: '/static/img/videoArts/CheckoutFresnoState.webp', flex: 12, height: '400px' },
        { title: 'The American English Institute of California State University, Fresno', src: '/static/img/videoArts/FSaei.jpg', flex: 6, height: '200px' },
        { title: 'Fresno State Library', src: '/static/img/videoArts/FSLibrary.jpg', flex: 6, height: '200px' },
        { title: 'Fresno State History', src: '/static/img/videoArts/FS1977.jpg', flex: 3, height: '200px' },
        { title: 'Fresno State - SMC', src: '/static/img/videoArts/FSsmc.jpg', flex: 3, height: '200px' },
        { title: 'Fresno State - USU', src: '/static/img/videoArts/FSusu.jpg', flex: 3, height: '200px' },
        { title: 'Sports', src: '/static/img/videoArts/FSsports.jpg', flex: 3, height: '200px' }
      ]
    })
  }
</script>