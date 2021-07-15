import { Text, TextProps } from '@chakra-ui/react'

interface LogoProps extends TextProps {
  fontSize: string;
  fontWeight: string;
  letterSpacing: string;
}

export function Logo({ fontSize, fontWeight, letterSpacing, ...rest }: LogoProps) {
  return(
    <Text fontSize={fontSize} fontWeight={fontWeight} letterSpacing={letterSpacing} {...rest}>
      dashgo
      <Text as="span" ml="1" color="purple.400">.</Text>
    </Text>
  )
}