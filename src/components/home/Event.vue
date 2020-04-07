<template>
    <div class="event-comp">
        <h2> {{title}} </h2>
        <div v-for="g in genres" v-bind:key="g.id">
            {{g.name}}
        </div>
        <h3> {{date}} </h3>
        <p>
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    name: "Event",
    props: {
        title: null,
        text: null,
        date: null,
        genres: null
    }  
}
</script>

<style scoped>

.event-comp {
    width: 90%;
    padding: 2%;
    border-left: 2px solid rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.2);
    margin-top: 2%;
    text-align: left;
}

@media only screen and (min-width: 786px){

    .event-comp {
        width: 50%;
    }

}

</style>