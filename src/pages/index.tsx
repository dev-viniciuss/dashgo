import Head from 'next/head'
import Link from 'next/link'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Flex, Stack, Button } from '@chakra-ui/react'

import { Logo } from '../components/Logo'
import { Input } from '../components/Form/Input'

import { useForm, SubmitHandler } from 'react-hook-form'

interface SignInFormData {
  emal: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
    
  }

  return (
    <>
      <Head>
        <title>Dashgo | Login</title>
      </Head>
      
      <Flex w="100vw" h="100vh" align="center" justify="center" flexDirection="column">
        <Logo as="span" href="/" fontSize="4xl" fontWeight="bold" letterSpacing="tight" mb="6"/>

        <Flex as="form" width="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
          <Stack spacing="4">
            <Input 
              name="email" 
              type="email" 
              label="Email" 
              placeholder="Digite seu email"
              error={errors.email}
              {...register('email')}
            />
            <Input 
              name="password" 
              type="password" 
              label="Senha" 
              placeholder="Digite sua senha"
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          
            <Button 
              type="submit" 
              mt="6" 
              colorScheme="purple" 
              size="lg"
              isLoading={formState.isSubmitting}
            >
              Entrar
            </Button>          
         
        </Flex>
      </Flex>
    </>
  )
}
