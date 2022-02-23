import React from 'react'
import { Route } from 'react-router-dom'

import { ContractGUIContainer } from './Container'

const DebugGUI = () => (
  <div>
    <h1>Debugging</h1>
    <h2>Contract GUI</h2>
  </div>
)

const New = () => (
  <div>
    <h1>New</h1>
    <h2>Contract GUI</h2>
  </div>
)

// export const contractGUIRoutes: {
//   root: {
//     path: string
//     element: React.ReactNode
//   }
//   routes: RouteProps[]
// } = {
//   root: {
//     path: 'contract-gui',
//     element: (p: any) => <ContractGUIContainer {...p} />,
//   },
//   routes: [
//     {
//       path: 'debug',
//       index: true,
//       element: (p: any) => <DebugGUI {...p} />,
//     },
//   ],
// }

export const ContractGUIRoutes = () => (
  <>
    <Route path="contract-gui" element={ContractGUIContainer}>
      <Route path="debug" element={DebugGUI} />
      <Route path="new" element={New} />
    </Route>
  </>
)
