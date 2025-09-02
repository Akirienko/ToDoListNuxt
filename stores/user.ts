import { defineStore } from 'pinia'
import type { User } from "~/types";

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: { email: '', id: '', name: '' } as User,
    isUser: false as boolean,
  }),
  actions: {
    login(userInfo: User) {
      this.userInfo = userInfo as User
      this.isUser = true;
    },
    logout() {
      this.userInfo = { email: '', id: '', name: '' } as User
      this.isUser = false;
    }
  },
  persist: true
})