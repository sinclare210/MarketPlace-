import React, { createContext, useState } from 'react'
//create context

export const SidebarContext = createContext();
const SidebarProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarContext.Provider>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider