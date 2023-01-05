import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { IAuth } from "../interfaces/auth.interfaces";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<IAuth>({
    email: "",
    password: ""
  });
  const auth = ref<boolean>(false);

  const UserMockData = ref({
    email: "heroes@test.com",
    password: "123456"
  });

  const routes = useRouter();
  
  const login = (data: IAuth) => {
    if (
      data.email === UserMockData.value.email &&
      data.password === UserMockData.value.password
    ) {
      auth.value = true;
      user.value = data;
      localStorage.setItem("user", JSON.stringify(user.value.email));
      localStorage.setItem("auth", JSON.stringify(auth.value));
      routes.push({ name: "Home" });
    }
  };

  return {
    user,
    auth,
    login
  };
});
