import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//Pages
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Testimonial from './pages/Testimonial';
import About from './pages/About';
import Contact from './pages/Contact';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/project/:id',
                element: <Project />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/blog/:id',
                element: <Blog />
            },
            {
                path: '/testimonial',
                element: <Testimonial />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/login',
        element: <Login />
    }
]);


const App = () => {
    return (
        <AnimatePresence>
            <RouterProvider router={router} />
        </AnimatePresence>
    );
};

export default App;