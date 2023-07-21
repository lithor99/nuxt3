<template>
    <div>

        <Head>
            <Title>{{ product.title }}</Title>
            <Meta name="description" :content="title" />
            <!-- <Style type="text/css" children="body { background-color: green; }" /> -->
        </Head>

        <div class="container">
            <img :src=product.thumbnail>
            <div class="detail">
                <h2>Name: {{ product.title }}</h2>
                <h3>Price: ${{ product.price }}</h3>
                <h3>Category: {{ product.category }}</h3>
                <h3>Brand: {{ product.brand }}</h3>
                <h5>Description: {{ product.description }}</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params


const { data: product } = await useFetch(`https://dummyjson.com/products/${id}`)
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
}

.detail {
    padding-left: 10px;
}
</style>