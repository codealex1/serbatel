import { createBrowserRouter , RouterProvider,  } from 'react-router-dom';
import './App.css';

import Home from './container/Home/Home';
import Apropos from './components/Apropos/Apropos';


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
  return <RouterProvider router={router}/>
}

export default App;
