<template>
    <div>
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