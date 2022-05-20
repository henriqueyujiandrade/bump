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
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useHistory, Link } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "../../components/Header";

import { toast } from "react-toastify"

import api from "../../Services/api";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const history = useHistory();

    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup
            .string()
            .required("Campo Obrigatório")
            .email("Email inválido"),
        password: yup
            .string()
            .required("Campo Obrigatório")
            .min(6, "Minimo 6 caracteres!"),
        passwordConfirm: yup
            .string()
            .required("Campo Obrigatório")
            .oneOf([yup.ref("password")], "Senhas não são iguais"),
        url: yup
            .string()
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        delete data.passwordConfirm;

        api.post("register", data)
            .then(() => {
                toast.success('Conta criada com sucesso')
                return history.push("/login");
            })
            .catch(() => {
                toast.error('Verifique se colocou todas as informações corretamente ou tente outro email')
            });
    };

    return (
        <>
            <Header register />
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={"#02072F"}
            >
                <Stack mx={"auto"} maxW={"lg"} py={12} px={8} width={"430px;"}>
                    <Stack align={"center"}>
                        <Heading
                            fontSize={"3xl"}
                            textAlign={"center"}
                            color="white"
                        >
                            Cadastre-se
                        </Heading>
                    </Stack>
                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.800")}
                        boxShadow={"lg"}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <form onSubmit={handleSubmit(onSubmit)} spacing={8}>
                                <FormControl py={2}>
                                    <FormLabel>Nome</FormLabel>
                                    <Input
                                        type="text"
                                        id="name"
                                        {...register("name")}
                                    />
                                    {errors.name && (
                                        <Text
                                            textAlign={"center"}
                                            color={"red"}
                                        >
                                            {errors.name.message}
                                        </Text>
                                    )}
                                </FormControl>
                                <FormControl py={2}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        id="email"
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <Text
                                            textAlign={"center"}
                                            color={"red"}
                                        >
                                            {errors.email.message}
                                        </Text>
                                    )}
                                </FormControl>
                                <FormControl py={2}>
                                    <FormLabel>Senha</FormLabel>
                                    <InputGroup>
                                        <Input
                                            id="password"
                                            {...register("password")}
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                        />
                                        <InputRightElement h={"full"}>
                                            <Button
                                                variant={"ghost"}
                                                onClick={() =>
                                                    setShowPassword(
                                                        (showPassword) =>
                                                            !showPassword
                                                    )
                                                }
                                            >
                                                {showPassword ? (
                                                    <ViewIcon />
                                                ) : (
                                                    <ViewOffIcon />
                                                )}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    {errors.password && (
                                        <Text
                                            textAlign={"center"}
                                            color={"red"}
                                        >
                                            {errors.password.message}
                                        </Text>
                                    )}
                                </FormControl>
                                <FormControl py={2}>
                                    <FormLabel>Confirme sua Senha</FormLabel>
                                    <InputGroup>
                                        <Input
                                            id="passwordConfirm"
                                            {...register("passwordConfirm")}
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                        />
                                        <InputRightElement h={"full"}>
                                            <Button
                                                variant={"ghost"}
                                                onClick={() =>
                                                    setShowPassword(
                                                        (showPassword) =>
                                                            !showPassword
                                                    )
                                                }
                                            >
                                                {showPassword ? (
                                                    <ViewIcon />
                                                ) : (
                                                    <ViewOffIcon />
                                                )}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    {errors.passwordConfirm && (
                                        <Text
                                            textAlign={"center"}
                                            color={"red"}
                                        >
                                            {errors.passwordConfirm.message}
                                        </Text>
                                    )}
                                </FormControl>
                                <FormControl py={2}>
                                    <FormLabel>Foto Perfil</FormLabel>
                                    <Input
                                        type="url"
                                        id="url"
                                        placeholder="Cole sua url"
                                        {...register("url")}
                                    />
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        type="submit"
                                        loadingText="Submitting"
                                        size="lg"
                                        bg={"#8518F5"}
                                        color={"white"}
                                        _hover={{
                                            bg: "#AF3DFF",
                                        }}
                                    >
                                        Login
                                    </Button>
                                </Stack>
                            </form>
                            <Stack pt={4}>
                                <Text align={"center"}>
                                    Já possui conta ?{" "}
                                    <Link
                                        to="/login"
                                        style={{ color: "#8518F5" }}
                                    >
                                        Login
                                    </Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
};

export default Register;
