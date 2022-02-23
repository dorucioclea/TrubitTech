import 'react-activity/dist/library.css'
import { ThemeProvider, theme, CSSReset, ToastProvider } from '@blockstack/ui'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ErrorBoundary } from 'components'

import { Layout } from './Layout'
import { ContractGUIRoutes } from './features'

import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <ContractGUIRoutes />
                {/* <Route
                  path={contractGUIRoutes.root.path}
                  element={contractGUIRoutes.root.element}
                >
                  {contractGUIRoutes.routes.map(({ ...route }) => (
                    <Route {...route} />
                  ))}
                </Route> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </ToastProvider>
        <CSSReset />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
