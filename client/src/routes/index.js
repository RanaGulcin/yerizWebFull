import {createBrowserRouter} from 'react-router-dom';
import Layout from '../layout/client/layout/Layout';
import Home from '../pages/client/homePage/Home';
import About from '../pages/client/aboutPage/About';
import Blog from '../pages/client/blogPage/Blog';
import BlogDetail from '../pages/client/blogDetailPage/BlogDetail';
import YerizApp from '../pages/client/yerizappPage/YerizApp';



const routes = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                index:true,
                element: <Home/>
            },
            {
                path:'hakkimizda',
                element: <About/>
            },
            {
                path:'yerizapp',
                element: <YerizApp/>
            },
            {
                path:'surdurulebilirblog',
                element: <Blog/>
            },
            {
                path:'surdurulebilirblog/:id',
                element: <BlogDetail/>
            },
            


        ]
    }
]);
export default routes;