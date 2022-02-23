import React from 'react'
import { Outlet, RouteProps } from 'react-router-dom'

type ContractGUIContainerProps = RouteProps

export const ContractGUIContainer: React.FC<ContractGUIContainerProps> = () => {
  return (
    <div className="min-h-full">
      <Outlet />
    </div>
  )
}
