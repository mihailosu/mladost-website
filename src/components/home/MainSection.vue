<template>
    <div class='container-main'>
        
        <Info />
        <Notifications />

    </div>
</template>

<script>
import Info from './Info.vue'
import Notifications from './Notifications.vue'

export default {
    name: "MainSection",
    components: {
        Info,
        Notifications
    }
}
</script>

<style scoped>

.container-main {
    min-width: 100vw;
    max-width: 100% !important;
    min-height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media only screen and (min-width: 786px){

    .container-main{
        flex-direction: row;
        justify-content: space-evenly; 
    }

}

</style>