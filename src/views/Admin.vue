<template>
    <div class="admin-container">
        <router-view />  
    </div>  
</template>

<script>
export default {
    name: 'Admin',
    created: () => {
        console.log("ADMIN")
    }
}
</script>

<style scoped>

.admin-container {
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
    justify-content: center;
    background-color: rgb(126, 14, 14);
    color: rgb(219, 219, 219);
    
}

</style>