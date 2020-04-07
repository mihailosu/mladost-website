<template>
    <div class="container-event">
        <Event v-for="e in events" 
            v-bind:key="e.id"
            v-bind:title="e.title"
            v-bind:text="e.text"
            v-bind:date="e.date"
            v-bind:genres="e.genres"/>
    </div>
</template>

<script>
import eventService from '../../services/event-service';
import Event from './Event.vue'

export default {
    name: "EventSection",
    components: {
        Event
    },
    data: function() {
        return {
            currentBatch: null,
            events: null,
            loadingEvents: false
        }
    },
    created: function() {

        this.currentBatch = 0;
        this.events = [];

        this.scroll();

        this.getNextBatch();
    },
    methods: {
        getNextBatch(){
            eventService.fetchBatch(this.currentBatch)
            .then(ret => {
                // console.log(ret)
                // this.events.concat(ret);
                for (let ind in ret){
                    this.events.push(ret[ind]);
                }
                console.log(this.events)
                this.currentBatch++;
                this.loadingEvents = false;
            });
        },
        scroll() {
            window.onscroll = () => {
                if (this.loadingEvents)
                    return
                
                let bottomOfWindow = Math.max(
                    window.pageYOffset,
                    document.documentElement.scrollTop,
                    document.body.scrollTop
                ) + window.innerHeight >= document.documentElement.offsetHeight * 0.9;

                console.log(bottomOfWindow);

                if (bottomOfWindow) {
                    this.loadingEvents = true;
                    this.getNextBatch();
                }
            }
        }
    },

}
</script>

<style scoped>


.container-event {
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: rgb(126, 14, 14);
    padding-bottom: 5%;
}

.container-event > div {
    margin: auto;
    margin-top: 2%;
}

</style>