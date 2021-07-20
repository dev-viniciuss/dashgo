import Link from 'next/link'
import { ElementType } from "react"

import { Text, Link as ChakraLink, Icon, LinkProps } from "@chakra-ui/react"

interface NavLinkProps extends LinkProps {
  href: string;
  icon: ElementType;
  children: string;
}

export function NavLink({ href, icon, children, ...rest}: NavLinkProps) {
  return(
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}