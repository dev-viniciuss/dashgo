import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { RiMenuLine } from 'react-icons/ri'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from '../Logo'
import { Search } from './Search'
import { Notifications } from './Notifications'
import { Profile } from './Profile'

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const { onOpen } = useSidebarDrawer()

  return(
    <Flex 
      as="header" 
      w="100%" h="20" 
      maxW={1480} 
      mx="auto" mt="4"
      px={["2" ,"6"]} 
      align="center"
    >
      { !isWideVersion && (
        <IconButton 
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64" />

      { isWideVersion && <Search />}
      
      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
      
    </Flex>
  )
}