import Link from 'next/link'

import { Text, TextProps } from '@chakra-ui/react'

interface LogoProps extends TextProps {
  href: string;
  fontSize: string;
  fontWeight: string;
  letterSpacing: string;
}

export function Logo({ href, fontSize, fontWeight, letterSpacing, ...rest }: LogoProps) {
  return(
    <Link href={href} passHref>
      <Text as="a" fontSize={fontSize} fontWeight={fontWeight} letterSpacing={letterSpacing} {...rest}>
        dashgo
        <Text as="span" ml="1" color="purple.400">.</Text>
      </Text>
    </Link>
  )
}