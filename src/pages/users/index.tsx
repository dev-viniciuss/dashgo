import Head from 'next/head'
import Link from 'next/link'

import { useEffect } from 'react'

import { Box, Flex, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue } from '@chakra-ui/react'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Heading } from '../../components/Heading'
import { Pagination } from '../../components/Pagination'

export default function UserList() {
  const listTable = [1, 2, 3]

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return(
    <>
      <Head>
        <title>Dashgo | Listagem de usuários</title>
      </Head>

      <Box>
        <Header />

        <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p={["6" ,"8"]}>
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg">Usuários</Heading>
              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiAddLine} fontSize="18"/>}
                >
                  {isWideVersion ? 'Criar novo usuário' : 'Criar usuário'}
                </Button>
              </Link>
            </Flex>

            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px="6" color="gray.300" width="8">
                    <Checkbox colorScheme="purple"/>
                  </Th>
                  <Th>Usuários</Th>
                  {isWideVersion && <Th>Data de cadastro</Th>}
                  {isWideVersion && <Th width="8"></Th>}
                </Tr>
              </Thead>

              <Tbody>
                {listTable.map(table => (
                  <Tr key={table}>
                    <Td px="6">
                      <Checkbox colorScheme="purple"/>
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Marcus Vinicius</Text>
                        <Text fontSize="sm" color="gray.300">dev.mvsc@gmail.com</Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>15 de Junho, 2021</Td>}
                    {isWideVersion &&
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                        >
                          Editar
                        </Button>
                      </Td>
                    }
                  </Tr>
                ))}
              </Tbody>
            </Table>

            <Pagination />

          </Box>
        </Flex>
      </Box>
    </>
  )
}