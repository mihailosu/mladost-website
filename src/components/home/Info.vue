<template>
    <div class="container-info">

        <h1>MLADOST</h1>
        <h2>Subotica</h2>
        <h2>Harambasiceva 4</h2>
        <h2>Telefon</h2>
        <h2>Mail</h2>
        <h2>Facebook</h2>
        <h2>Instagram</h2>

    </div>
</template>

<script>
export default {
    name: "Info",

}
</script>

<style scoped>

.container-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid red;
    width: 80vw;
}

@media only screen and (min-width: 786px){

    .container-info {
        width: 30vw;
    }

}

</style>