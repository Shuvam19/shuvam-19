<template>
  <div class="login">
    <input type="email" class="input-field login-email-id" v-model="email" />
    <input
      type="password"
      class="input-field login-password"
      v-model="password"
    />
    <button class="login-button" @click="loginDetails">Login</button>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginDetails() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$store.commit("setAuthentication", true);
          this.$router.push({ name: "Add-Project" });
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input-field {
  border: none;
  border-radius: 50px;
  border: #b0bbda 1px solid;
  background: transparent;
  resize: none;
  outline: none;
  margin: 10px;
  padding: 10px;
  width: 300px;
  height: 30px;
  font-size: 20px;
  text-align: center;
  color: #b0bbda;
}

.login-password {
  font-size: 30px;
}

.login-button {
  border: none;
  outline: none;
  margin: 30px;
  padding: 15px;
  width: 200px;
  border-radius: 50px;
  background: transparent;
  color: #64ffda;
  border: #64ffda 1px solid;
}
</style>