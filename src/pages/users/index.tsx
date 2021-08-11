import Head from 'next/head'
import Link from 'next/link'

import { useUsers } from '../../services/hooks/useUsers'

import { Box, Flex, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner } from '@chakra-ui/react'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Heading } from '../../components/Heading'
import { Pagination } from '../../components/Pagination'

export default function UserList() {
  const { data, isLoading, error, isFetching } = useUsers()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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
              <Heading size="lg">
                  Usuários
                  { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/> }
              </Heading>
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

            { isLoading ? (
              <Flex align="center" justify="center">
                <Spinner 
                  thickness="4px"
                  emptyColor="gray.200"
                  color="purple.500"
                  size="xl"
                />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao obter dados dos usuários</Text>
              </Flex>
            ) : (
              <>
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
                    {data.map(user => (
                      <Tr key={user.id}>
                        <Td px="6">
                          <Checkbox colorScheme="purple"/>
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
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
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  )
}