import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage, { loader as articleLoader } from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './Layout';


const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children: [
    { 
      path: '/',
      element: <HomePage /> 
    },
    { 
      path: '/about',
      element: <AboutPage />,
    },
    { 
      path: '/articles',
      element: <ArticlesListPage /> 
    },
    { 
      path: '/articles/:name',
      element: <ArticlePage />,
      loader: articleLoader
    },    
  ]
}]

const router = createBrowserRouter(routes)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
