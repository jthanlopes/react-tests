import { RouterProvider } from 'react-router-dom'

import { router } from './router'

import { GlobalStyle } from './assets/styles/global'

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
      <GlobalStyle />
    </>
  )
}

export default App
