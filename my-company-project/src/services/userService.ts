import Backendless from "./backendless";

export const userService = {
  async login(user: string, pass: string) {
    return await Backendless.UserService.login(user, pass, true);
  },
  async logout() {
    return await Backendless.UserService.logout();
  },
  async getCurrentUser() {
    return await Backendless.UserService.getCurrentUser();
  },
};
