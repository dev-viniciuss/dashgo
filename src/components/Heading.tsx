import { Heading as ChakraHeading, HeadingProps as ChakraHeadingProps } from '@chakra-ui/react'

interface HeadingProps extends ChakraHeadingProps {
  size: string;
  children: string;
}

export function Heading({ size, children }: HeadingProps) {
  return(
    <ChakraHeading size={size}>{children}</ChakraHeading>
  )
}