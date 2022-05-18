<<<<<<< HEAD
<<<<<<< HEAD
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

=======
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
import {Flex,Box,FormControl,FormLabel,Input,InputGroup,InputRightElement,Stack,Button,Heading,Text,useColorModeValue} from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import {Link } from "react-router-dom";

import { LoginContext } from "../../Providers/Login";

<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import Header from "../../components/Header"

<<<<<<< HEAD
<<<<<<< HEAD
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

=======
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { confirmLogin } = useContext(LoginContext);
<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84

  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup.string().required("Campo Obrigatório").min(6, "Minimo 6 caracteres!"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data)
<<<<<<< HEAD
<<<<<<< HEAD
=======
    confirmLogin(data)

>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
    confirmLogin(data)

>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
  }

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
    <Header register/>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={8}>

            <form onSubmit={handleSubmit(onSubmit)} spacing={8}>
              <FormControl  >
                <FormLabel>Email</FormLabel>
                <Input type="email" id="email" {...register("email")} />
                {errors.email && (
                   <> 
                   <span className="email">{errors.email.message}</span>
                   <Stack align={'center'} >
                    <Heading fontSize={'1x1'} textAlign={'center'}>
                    {errors.email.message}
                    </Heading>
                    </Stack>
                    </>
                )}
              </FormControl>
              <FormControl {...register("password")}>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input id="password" {...register("password")} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                   <> 
                   <span className="error">{errors.password.message}</span>
                   <Stack align={'center'} spacing={6}>
                    <Heading fontSize={'1x1'} textAlign={'center'}>
                    {errors.password.message}
                    </Heading>
                    </Stack>
                    </>
                )}
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'#8518F5'}
                  color={'white'}
                  _hover={{
                    bg: '#AF3DFF',
                  }}>
                  Login
                </Button>
              </Stack>
            </form>
            <Stack pt={6}>
              <Text align={'center'}>
                Não tem conta ainda? <Link to="/" color={'#8518F5'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
=======
      <Header login />
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={"#02072F"}>

        <Stack mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'3xl'} textAlign={'center'} color='white'>
              Login
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={8}>

              <form onSubmit={handleSubmit(onSubmit)} spacing={8}>
                <FormControl py={3} >
                  <FormLabel>Email</FormLabel>
                  <Input type="email" id="email" {...register("email")} />
                  {errors.email && (
                    <Text textAlign={'center'} py={1} color={"red"}>
                      {errors.email.message}
                    </Text>
                  )}
                </FormControl>
                <FormControl py={3} >
                  <FormLabel>Senha</FormLabel>
                  <InputGroup>
                    <Input id="password" {...register("password")} type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && (
                    <Text textAlign={'center'} py={1} color={"red"}>
                      {errors.password.message}
                    </Text>
                  )}
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={'#8518F5'}
                    color={'white'}
                    _hover={{
                      bg: '#AF3DFF',
                    }}>
                    Login
                  </Button>
                </Stack>
              </form>
              <Stack pt={4}>
                <Text align={'center'}>
                  Não tem conta ainda? <Link to="/register" style={{ color: '#8518F5' }}>Cadastre-se</Link>
                </Text>
              </Stack>
            </Stack>
=======
      <Header login />
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={"#02072F"}>

        <Stack mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'3xl'} textAlign={'center'} color='white'>
              Login
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={8}>

              <form onSubmit={handleSubmit(onSubmit)} spacing={8}>
                <FormControl py={3} >
                  <FormLabel>Email</FormLabel>
                  <Input type="email" id="email" {...register("email")} />
                  {errors.email && (
                    <Text textAlign={'center'} py={1} color={"red"}>
                      {errors.email.message}
                    </Text>
                  )}
                </FormControl>
                <FormControl py={3} >
                  <FormLabel>Senha</FormLabel>
                  <InputGroup>
                    <Input id="password" {...register("password")} type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && (
                    <Text textAlign={'center'} py={1} color={"red"}>
                      {errors.password.message}
                    </Text>
                  )}
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={'#8518F5'}
                    color={'white'}
                    _hover={{
                      bg: '#AF3DFF',
                    }}>
                    Login
                  </Button>
                </Stack>
              </form>
              <Stack pt={4}>
                <Text align={'center'}>
                  Não tem conta ainda? <Link to="/register" style={{ color: '#8518F5' }}>Cadastre-se</Link>
                </Text>
              </Stack>
            </Stack>
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
          </Box>

        </Stack>


      </Flex>
<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
    </>
  );
}

export default Login

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======


>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84

