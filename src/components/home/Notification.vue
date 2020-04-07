<template>
    <div class="notification-comp">
        <h2>{{ title }} </h2>
        <h3>{{ text }} </h3>
    </div>
</template>

<script>
export default {
    name: "NewNotification",
    props: {
        title: null,
        text: null,
        date: null
    }
}
</script>

<style scoped>

.notification-comp {
    width: 90%;
    margin: auto;
    margin-top: 10%;
    border-left: 2px solid rgb(219, 219, 219);
    text-align: center;
    padding: 1%;
    padding-left: 3%;
}

@media only screen and (min-width: 786px){
    
    .notification-comp{
        text-align: left;
    }

}

</style>