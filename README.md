# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

referenced Video-https://www.youtube.com/watch?v=r8Dg0KVnfMA

need to understand:

1. /posts --> ["posts"]
2. /post/1 --> ["posts", post.id]// ["posts", 1]
3. /posts?authorId=1 --> ["posts",{authorId:1}]// for filtering
4. /posts/2/comments--> ["posts",post.id,"comments"]
