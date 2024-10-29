import React, { createContext, useState } from 'react'
//create context

export const SidebarContext = createContext();
const SidebarProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  }
  return (
    <SidebarContext.Provider
    value={{isOpen, setIsOpen, handleClose}}>
      {children}  {/* This renders any child components wrapped by SidebarProvider */}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider