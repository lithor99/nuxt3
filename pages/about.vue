<template>
    <div class="container">
        <h2>About</h2>
        <img src="/images/about.svg">
    </div>
</template>

<script setup>
//set page title and description
useHead({
    title: "About",
    meta: [
        { name: "description", content: "about description" },
    ]
})
</script>

<style scoped>
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