import {createBrowserRouter} from 'react-router-dom';
import Layout from '../layout/client/layout/Layout';
import Home from '../pages/client/homePage/Home';
import About from '../pages/client/aboutPage/About';
import Blog from '../pages/client/blogPage/Blog';


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
                path:'yeriz',
                element: <About/>
            },
            {
                path:'surdurulebilirblog',
                element: <Blog/>
            },
            


        ]
    }
]);
export default routes;