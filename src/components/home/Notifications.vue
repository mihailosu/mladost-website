<template>
    
    <div class="container-notifications">
        
        <h1 class="moto-header" v-if="!notifications">Neki brutalan moto</h1>
        <div v-else>
            <NewNotification v-for="n in notifications"
                v-bind:key="n.id"
                v-bind:title="n.title"
                v-bind:text="n.text"
                v-bind:date="n.date"></NewNotification>
        </div>

    </div>

</template>

<script>

import notificationService from '../../services/notification-service'
import NewNotification from './Notification.vue'

export default {
    name: "Notifications",
    components: {
        NewNotification
    },
    data: function() {
        return {
            notifications: null,
        }
    },
    created: function() {
        notificationService.fetchLatest()
            .then(ret => {
                console.log(ret);
                this.notifications = ret;
            });
    }
}
</script>

<style scoped>

.container-notifications {

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;


}

.moto-header {
    font-size: 10vh;
}

@media only screen and (min-width: 786px){

    .container-notifications {
        width: 30vw;
        max-height: 100vh;
    }

}



</style>