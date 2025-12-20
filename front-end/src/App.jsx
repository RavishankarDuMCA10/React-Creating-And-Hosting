import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage'
import ArticlesListPage from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import Layout from './Layout';

const routes = [{
  path: '/',
  element: <Layout />,
  children: [
    { path: '/',element: <HomePage /> },
    { path: '/articles',element: <ArticlesListPage /> },
    { path: '/article',element: <ArticlePage /> },
    { path: '/about',element: <AboutPage /> }
  ]
}]

const router = createBrowserRouter(routes)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
