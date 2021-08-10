import { Heading as ChakraHeading, HeadingProps as ChakraHeadingProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface HeadingProps extends ChakraHeadingProps {
  size: string;
  children: ReactNode;
}

export function Heading({ size, children }: HeadingProps) {
  return(
    <ChakraHeading size={size}>{children}</ChakraHeading>
  )
}