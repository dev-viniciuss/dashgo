import Head from 'next/head'
import Link from 'next/link'

import { Box, Flex, Divider, Stack, SimpleGrid, Button } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Heading } from '../../components/Heading'
import { Input } from '../../components/Form/Input'

export default function UserList() {
  return(
    <>
      <Head>
        <title>Dashgo | Criação de usuários</title>
      </Head>

      <Box>
        <Header />

        <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
            <Heading size="lg">Criar usuário</Heading>

            <Divider my="6" borderColor="gray.700" />

            <Stack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                <Input name="name" label="Nome completo" placeholder="Digite seu nome completo"/>
                <Input name="email" type="email" label="Email" placeholder="Digite seu email"/>
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                <Input name="password" type="password" label="Senha" placeholder="Digite sua senha"/>
                <Input name="password_confirmation" type="password" label="Confirmação de senha" placeholder="Digite sua senha novamente"/>
              </SimpleGrid>
            </Stack>
            
            <Flex mt="8" justify="flex-end">
              <Stack direction="row" spacing="4">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button colorScheme="purple">Salvar</Button>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}