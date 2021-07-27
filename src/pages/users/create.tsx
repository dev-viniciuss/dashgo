import Head from 'next/head'
import Link from 'next/link'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Box, Flex, Divider, Stack, SimpleGrid, Button } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Heading } from '../../components/Heading'
import { Input } from '../../components/Form/Input'

import { useForm, SubmitHandler } from 'react-hook-form'

interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function UserList() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return(
    <>
      <Head>
        <title>Dashgo | Criação de usuários</title>
      </Head>

      <Box>
        <Header />

        <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
          <Sidebar />

          <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6","8"]} onSubmit={handleSubmit(handleCreateUser)}>
            <Heading size="lg">Criar usuário</Heading>

            <Divider my="6" borderColor="gray.700" />

            <Stack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                <Input 
                  name="name" 
                  label="Nome completo"
                  placeholder="Digite seu nome completo"
                  error={errors.name}
                  {...register('name')}
                />
                <Input 
                  name="email" 
                  type="email" 
                  label="Email" 
                  error={errors.email}
                  {...register('email')}
                  placeholder="Digite seu email"
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                <Input 
                  name="password" 
                  type="password" 
                  label="Senha" 
                  placeholder="Digite sua senha"
                  error={errors.password}
                  {...register('password')}
                />
                <Input 
                  name="password_confirmation" 
                  type="password" 
                  label="Confirmação de senha" 
                  error={errors.password_confirmation}
                  {...register('password_confirmation')}
                  placeholder="Digite sua senha novamente"
                />
              </SimpleGrid>
            </Stack>
            
            <Flex mt="8" justify="flex-end">
              <Stack direction="row" spacing="4">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button type="submit" colorScheme="purple" isLoading={formState.isSubmitting}>Salvar</Button>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}