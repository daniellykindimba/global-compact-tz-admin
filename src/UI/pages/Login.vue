<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Staff Login</v-toolbar-title>
                  &emsp;
                  <span :class="{'error--text': authFailed}">
                    {{ !authFailed ? 'Sign In to your account' : 'Wrong username or password' }}
                  </span>
                  <v-spacer></v-spacer>
                </v-toolbar>

                <form @submit="login" class="pb-3">
                  <v-card-text class="pb-0">
                    <v-form>
                      <v-text-field prepend-icon="person"
                        name="username" label="Username" type="email"
                        v-model="username" placeholder="Username"
                        required autocomplete="username email" />

                      <v-text-field
                        prepend-icon="lock"
                        name="password" label="Password" id="password"
                        type="password" v-model="password"
                        required autocomplete="current-password" />
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="primary" class="mr-2" :disabled="authenticating">
                      {{ authenticating ? 'Please Wait...' : 'LOGIN' }}
                    </v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import { login } from '../../services/API'
  import { saveUser } from '../../services/auth'

  export default {
    name: 'Login',
    data(){
      return {
        username: "",
        password: "",
        authenticating: false,
        authFailed: false
      }
    },
    methods: {
      async login(e){
        e.preventDefault();
        this.authenticating = true;
        this.authFailed = false;

        try {
          const user = await login({email: this.username, password: this.password});

          this.authenticating = false;
          this.username = "";
          this.password = "";
          this.$store.dispatch('setAuthUser', user);
          this.$router.replace('/');
          saveUser(user);
        } catch (error) {
          this.authenticating = false;
          this.authFailed = true;
        }
      }
    }
  }
</script>
