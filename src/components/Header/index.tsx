import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from '../Logo'
import { Search } from './Search'
import { Notifications } from './Notifications'
import { Profile } from './Profile'

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
    <Flex 
      as="header" 
      w="100%" h="20" 
      maxW={1480} 
      mx="auto" mt="4"
      px="6" 
      align="center"
    >
      <Logo fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64" />

      { isWideVersion && <Search />}
      
      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
      
    </Flex>
  )
}