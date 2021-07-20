import Head from 'next/head'
import Link from 'next/link'

import { Flex, Stack, Button } from '@chakra-ui/react'

import { Logo } from '../components/Logo'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Dashgo | Login</title>
      </Head>
      
      <Flex w="100vw" h="100vh" align="center" justify="center" flexDirection="column">
        <Logo as="span" href="/" fontSize="4xl" fontWeight="bold" letterSpacing="tight" mb="6"/>

        <Flex as="form" width="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
          <Stack spacing="4">
            <Input 
              name="email" 
              type="email" 
              label="Email" 
              placeholder="Digite seu email"
            />
            <Input 
              name="password" 
              type="password" 
              label="Senha" 
              placeholder="Digite sua senha"
            />
          </Stack>

          <Link href="/dashboard" passHref>
            <Button type="submit" mt="6" colorScheme="purple" size="lg">Entrar</Button>          
          </Link>
        </Flex>
      </Flex>
    </>
  )
}
