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
import { useState, useContext } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

import { LoginContext } from "../../Providers/Login";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "../../components/Header";
import { GroupContext } from "../../Providers/Group";
import { TasksContext } from "../../Providers/Tasks";
import { MemberContext } from "../../Providers/Member";
import { ChatContext } from "../../Providers/Chat";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { setTokenGroup, setMyInfo } = useContext(GroupContext);
    const { setTokenTask, setMyInfoInTask } = useContext(TasksContext);
    const { setTokenMember, setMyInfoInMembers } = useContext(MemberContext);
    const { setTokenChat, setMyInfoChat } = useContext(ChatContext);
    const { confirmLogin } = useContext(LoginContext);

    const schema = yup.object().shape({
        email: yup
            .string()
            .required("Campo Obrigatório")
            .email("Email inválido"),
        password: yup.string().required("Campo Obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        confirmLogin(
            setTokenGroup,
            setMyInfo,
            setTokenTask,
            setMyInfoInTask,
            setTokenMember,
            setMyInfoInMembers,
            setTokenChat,
            setMyInfoChat,
            data
        );
    };
    return (
        <>
            <Header login />
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={"#02072F"}
            >
                <Stack mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading
                            fontSize={"3xl"}
                            textAlign={"center"}
                            color="white"
                        >
                            Login
                        </Heading>
                    </Stack>
                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.800")}
                        boxShadow={"lg"}
                        p={8}
                    >
                        <Stack spacing={8}>
                            <form onSubmit={handleSubmit(onSubmit)} spacing={8}>
                                <FormControl py={3}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        id="email"
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <Text
                                            textAlign={"center"}
                                            py={1}
                                            color={"red"}
                                        >
                                            {errors.email.message}
                                        </Text>
                                    )}
                                </FormControl>
                                <FormControl py={3}>
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
                                            py={1}
                                            color={"red"}
                                        >
                                            {errors.password.message}
                                        </Text>
                                    )}
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
                                    Não tem conta ainda?{" "}
                                    <Link
                                        to="/register"
                                        style={{ color: "#8518F5" }}
                                    >
                                        Cadastre-se
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

export default Login;
