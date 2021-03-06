import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    useColorModeValue,
    Menu,
    MenuButton,
    Avatar,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";

import { MemberContext } from "../../Providers/Member";

import logo from "./Bump.svg";

export default function WithSubnavigation({
    login,
    register,
    homeLogado,
    homeDeslogado,
}) {
    const { myInfoInMembers } = useContext(MemberContext);
    console.log(myInfoInMembers.url)
    const history = useHistory();
    const color = useColorModeValue("#6D17B0");
    const hover = useColorModeValue("#A993D7");
    const button = useColorModeValue(" #FEEE35 ");
    const buttonH = useColorModeValue("#D6D793");
    const colorT = useColorModeValue("gray.200", "gray.900");

    return (
        <>
            {login || register ? (
                <Box>
                    <Flex
                        bg={"#6D17B0"}
                        minH={"60px"}
                        py={{ base: 3 }}
                        px={{ base: 20 }}
                        borderStyle={"solid"}
                        borderColor={colorT}
                        align={"center"}
                    >
                        <Flex
                            flex={{ base: 1 }}
                            justify={{ base: "center", md: "start" }}
                        >
                            <Text>
                                <img
                                    onClick={() => {
                                        history.push("/");
                                    }}
                                    src={logo}
                                    alt="logo"
                                />
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            ) : null}

            {homeDeslogado ? (
                <Box>
                    <Flex
                        bg={color}
                        minH={"60px"}
                        py={{ base: 2 }}
                        px={{ base: 20 }}
                        borderStyle={"solid"}
                        borderColor={colorT}
                        align={"center"}
                    >
                        <Flex
                            flex={{ base: 1 }}
                            justify={{ base: "center", md: "start" }}
                        >
                            <Text>
                                <img

                                    src={logo}
                                    alt="logo"
                                />
                            </Text>
                        </Flex>

                        <Stack
                            flex={{ base: 1, md: 0 }}
                            justify={"flex-end"}
                            direction={"row"}
                            spacing={6}
                        >
                            <Button
                                as={"a"}
                                fontSize={"sm"}
                                fontWeight={400}
                                color={" #FFFFFF"}
                                variant={"link"}
                                href={"/register"}
                                _hover={{bg: hover}}
        
                            >
                                Cadastre-se
                            </Button>
                            <Button
                                as={"a"}
                                fontSize={"sm"}
                                fontWeight={600}
                                color={"black"}
                                bg={button}
                                href={"/login"}
                                _hover={{
                                    bg: buttonH
                                }}
                            >
                                Login
                            </Button>
                        </Stack>
                    </Flex>
                </Box>
            ) : null}

            {homeLogado ? (
                <Box>
                    <Flex
                        bg={color}
                        minH={"60px"}
                        py={{ base: 2 }}
                        px={{ base: 20 }}
                        spacing={6}
                        borderStyle={"solid"}
                        borderColor={colorT}
                        align={"center"}
                    >
                        <Flex
                            flex={{ base: 1 }}
                            justify={{ base: "start", md: "start" }}
                        >
                            <Text>
                                <img
                                    src={logo}
                                    alt="logo"
                                />
                            </Text>
                        </Flex>

                        <Stack
                            flex={{ base: 1, md: 0 }}
                            justify={"flex-end"}
                            px={{ base: 5 }}
                            direction={"row"}
                            spacing={6}
                            minH={"40px"}
                        >
                            <Button
                                as={"a"}
                                fontSize={"sm"}
                                fontWeight={400}
                                color={" #FFFFFF"}
                                variant={"link"}
                                href={"/"}
                                _hover={{
                                    bg: hover
                                }}
                                onClick={() => localStorage.clear()}
                            >
                                Sair
                            </Button>
                        </Stack>

                        <Flex alignItems={"center"} px={{ base: 10 }}>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <Avatar
                                        size={"sm"}
                                        src={myInfoInMembers.url ? myInfoInMembers.url : "http://www.rachegebran.com.br/wp-content/uploads/perfil.jpg"}
                                        alt="Foto de Perfil"
                                    />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Link 1</MenuItem>
                                    <MenuItem>Link 2</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>
                </Box>
            ) : null}
        </>
    );
}
