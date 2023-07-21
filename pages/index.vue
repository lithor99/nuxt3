<template>
    <div class="container">
        <h1>Home</h1>
        <img src="/images/home.svg">
    </div>
</template>

<script setup>
//set page title and description
useHead({
    title: "Home",
    meta: [
        { name: "description", content: "home description" },
    ]
})
</script>

<style  scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    width: 400px;
    height: 500px
}
</style>