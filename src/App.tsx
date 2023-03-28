import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Layout } from './pages/Layout'
import { router } from './router'

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <RouterProvider router={router} />
    </>
  )
}

export default App
