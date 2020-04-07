<template>
    <h1>PANEL</h1>
</template>

<script>
export default {
    name: 'AdminPanel',
    beforeCreate: function() {

        if (!this.$store.state.token){
            this.$router.push('login')
        }
    }
}
</script>