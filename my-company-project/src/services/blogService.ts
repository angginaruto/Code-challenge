import Backendless from "./backendless";

export const blogService = {
  async getAllBlogs() {
    return await Backendless.Data.of("Blog").find();
  },

  async createBlog(blogData: any) {
    return await Backendless.Data.of("Blog").save(blogData);
  },
};
