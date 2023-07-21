<template>
    <v-container class="ma-2">
        <v-row align="center" justify="center">
            <div v-for="product in data.products" :key="n">
                <nuxt-link :to="`/product/${product.id}`">
                    <v-card height="380px" width="300px" class="ma-2">
                        <v-img :src="product.thumbnail" height="300px" width="300px" cover></v-img>
                        <v-card-title>
                            {{ product.title }}
                        </v-card-title>
                        <v-card-subtitle>
                            {{ product.title }}
                        </v-card-subtitle>
                    </v-card>
                </nuxt-link>
            </div>
        </v-row>
    </v-container>


    <!-- <v-container grid-list-xs>
        <v-flex xs1 grow>
            <div v-for="product in data.products">
                <nuxt-link :to="`/products/${product.id}`">
                    <v-sheet height="300px" width="300px" class="ma-5">
                        <img :src="product.thumbnail">
                        <text-subtitle-1>{{ product.title }}</text-subtitle-1>
                        <br />
                        <text-subtitle-2>{{ product.price }}</text-subtitle-2>
                    </v-sheet>
                </nuxt-link>
            </div>
        </v-flex>
    </v-container> -->
</template>

<script setup>
//set page title and description
useHead({
    title: "Products",
    meta: [
        { name: "description", content: "product description" },
    ]
})

const { data: data } = await useFetch('https://dummyjson.com/products?limit=20&skip=0')
</script>
 
<style  scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}


.title {
    color: white;
    padding: 0;
    text-align: center;
    font-size: 1.2em;
}

.container div :hover {
    background: orange;
}

img {
    width: 300px;
    height: 300px;
}

a {
    text-decoration: none;
}
</style>