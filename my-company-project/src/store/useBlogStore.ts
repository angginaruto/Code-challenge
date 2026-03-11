import { create } from "zustand";

interface Blog {
  objectId?: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  summary?: string;
}

interface BlogState {
  blogs: Blog[];
  setBlogs: (data: Blog[]) => void;
  addBlog: (newBlog: Blog) => void;
}

const useBlogStore = create<BlogState>((set) => ({
  blogs: [],

  setBlogs: (data) => set({ blogs: data }),

  addBlog: (newBlog) =>
    set((state) => ({
      blogs: [newBlog, ...state.blogs],
    })),
}));

export default useBlogStore;
