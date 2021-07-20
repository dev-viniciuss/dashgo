import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react"
import { ReactNode, createContext, useContext } from "react"

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextProps = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()

  return(
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)