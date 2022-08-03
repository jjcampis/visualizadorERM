<template>
<v-container>
<v-layout>
        <v-flex offset-md-2 sm12 md8 align-self-center>
           <p></p>
           <h2 color="dark">Dashboard ERM</h2>
                  <v-card class="elevation-12"
                  >
                     <v-card-title class="primary white--text">
                        Ingresar
                     </v-card-title>
                     <v-card-text>
                        <v-form>
                           <!-- <v-icon left color="#bd1919">
                              mdi-alert
                           </v-icon> -->
                           <v-text-field
                           prepend-icon="mdi-account-circle"
                              name="login"
                              placeholder=" "
                              persistent-placeholder
                              label="Nombre"
                              type="text"
                              v-model="user"
                           ></v-text-field>
                           <v-text-field
                              prepend-icon="mdi-lock"
                              id="password"
                              placeholder=" "
                              persistent-placeholder
                              name="password"
                              label="Contraseña"
                              type="password"
                              v-model="pass"
                           ></v-text-field>
                           <v-card-actions class="center">
                              <v-btn  color="primary" @click="login">Ingresar</v-btn>
                               <v-btn  color="primary" @click="otro">Ingresar</v-btn>
                           </v-card-actions>
                        </v-form>
                     </v-card-text>
                  </v-card>
        </v-flex>
</v-layout>
</v-container>
</template>

<script>
import store from '@/store';
export default{
   name: 'login',
   data:()=>{
      return {
         user:'',
         pass:''
      }
   },
   methods:{
      login(){
         console.log('entering',this.user, " ",this.pass);
         if(this.user != '' && this.pass != ''){
            if(this.user == 'red' && this.pass == 'maker2022'){
               store.dispatch('login')
               //localStorage.setItem('Login',true);
               this.$router.push('/'); 
            }else{
               console.log('usuario mal');
               console.log('cambiazooio');
            }
         }
      },
      otro(){
         store.dispatch('prueba')
         console.log("test");
      }
   }
}
</script>

<style>
/* https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/ */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
 -webkit-text-fill-color: #363333;
    -webkit-box-shadow: 0px 0px 0px 1000px #bd191926 inset;
  transition: background-color 5000s ease-in-out 0s;
}

</style>