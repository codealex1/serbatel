import { createBrowserRouter , RouterProvider,  } from 'react-router-dom';
import './App.css';
import React, { useEffect } from 'react';
import Home from './container/Home/Home';
import Apropos from './container/Apropos/Apropos';
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/a_propos',
    element: <Apropos/>
  }
  
    
])


function App() {
  useEffect(() => {
    AOS.init({
      // Vous pouvez ajouter vos options de configuration ici
      duration: 1000,
      once: true,
    });
  }, []);
  return <RouterProvider router={router}/>
}

export default App;
