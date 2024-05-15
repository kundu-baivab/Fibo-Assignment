# React + Vite
## NOTE 
Due to delay in rerendering of component when using useState, the bottom navigation contains a little bug. It reroutes to new page but the option color doesnt change due to slow updation of state. However, if option is clicked twice then the state is updated and required route os reached.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
