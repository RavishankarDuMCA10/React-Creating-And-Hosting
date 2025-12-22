import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import HomePage from './pages/HomePage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
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

      loader: async function() {
        const response = await axios.get('/api/articles/learn-node');
        const { upvotes, comments } = response.data;
        return { upvotes, comments };
      }
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
