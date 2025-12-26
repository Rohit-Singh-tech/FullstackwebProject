import React from 'react'
import Register from './component/Register.jsx'
import Signin from './component/Signin.jsx'
import Navbar from './component/navbar.jsx'
import Footer from './component/footer.jsx'
import Home from './component/home.jsx'
import Homelock from './component/homelock.jsx'
import Admin from './component/Admin.jsx'
import Update from './component/update.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {


  const route = createBrowserRouter([
    { path: "/component/Admin", element: <Admin /> },
    {path: "/", element: <Homelock /> },
    {path:"/component/Home", element:<Home />},
    { path: "/component/Register", element: <Register /> },
    { path: "/component/Signin", element: <Signin /> },
    //{path:"/component/Admin", element:<Admin />},
    {path:"/component/update/:id", element:<Update />},
  ]);   

  
  return (
  < main className="App">
    <><Navbar />
      <RouterProvider router={route} />
    <Footer />
    </>
  </main>

  )
}

export default App
