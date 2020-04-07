<template>
    <div class="login-comp">

        <h1>Log In</h1>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-user-shield"></i></span>
            </div>
            <input type="text" v-model="form.username" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-key"></i></span>
            </div>
            <input type="password" v-model="form.password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        

        <b-button   variant='light'
                block
                class="fetch-more-btn"
                :disabled="form.username == '' || form.password == ''"
                v-on:click="login()">Prijavi se</b-button>
    </div>
</template>

<script>
import loginService from '../../services/login-service';

export default {
    name: 'AdminLogin',
    data: function() {
        return {
            form: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {


            loginService.login(this.form.username, this.form.password)
                .then(response => {

                    console.log(response);

                    if (response && response.status == 200) {
                        
                        response.json()
                            .then(token => {

                                token = token.token

                                this.$store.state.token = token;

                                console.log(this.$router.currentRoute)

                                this.$router.push('panel')
                            });

                    }
                    else {
                        console.log("AAAAA")
                        this.form.username = "";
                        this.form.password = "";

                    }
                })
                .catch(err => {
                    console.log(err);
                })
                

        }
    }
}
</script>

<style scoped>

.login-comp {

    width: 90%;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.2);
}

.login-comp > * {
    width: 90%;
    margin: auto;
    margin-top: 2%;
    margin-bottom: 2%;
}

@media only screen and (min-width: 786px){

    .login-comp {
        width: 40%;
    }

}

</style>