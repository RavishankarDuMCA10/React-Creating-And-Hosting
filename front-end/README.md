# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

To create and establish connection of mongodb database from Mogodb Atlas to backend:

1. Create Project: "Full-stack-react"
2. Get connection of project : mongosh "mongodb+srv://cluster0.icpbrc1.mongodb.net/" --apiVersion 1 --username ${process.env.MONGODB_USERNAME} --password ${process.env.MONGODB_PASSWORD}
3. Run connection command in terminal.
4. Create free tier IP Address.
5. Switch to db "full-stack-react-db" using `use full-stack-react-db`.
6. Insert some data in the db:
   `db.articles.insertMany([{
| name: 'learn-node',
| upvotes:0,
| upvoteIds: [],
| comments: [],
| },{
| name: 'learn-react', upvotes:0,
|  upvoteIds: [],
|  comments: [],
| },{
| name: 'mongodb',
| upvotes:0,
| upvoteIds: [],
| comments: [],
| }])`
