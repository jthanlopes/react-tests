import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './assets/styles/themes/default'
import { GlobalStyles } from './assets/styles/global'
import { ProductProvider } from './contexts/ProductContext'

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

      <ThemeProvider theme={defaultTheme}>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
