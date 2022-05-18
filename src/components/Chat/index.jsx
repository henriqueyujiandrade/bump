import {
    Flex,
    Box,
    Heading,
    Button,
    Input,
    CloseButton,
} from "@chakra-ui/react";

import { useState, useContext } from "react";
import { ChatContext } from "../../Providers/Chat/index.js";
import { useParams } from "react-router-dom";

const Chat = ({ openChat, setOpenChat }) => {
    const params = useParams();
    const userInfo = JSON.parse(localStorage.getItem("@bump:myInfo"));
    const { chat, addChat, removeChat } = useContext(ChatContext);
    const [msg, setMsg] = useState("");

    const userId = userInfo.id;
    const groupId = params.id;
    const groupMsg = chat.filter((item) => {
        return item.groupId === groupId;
    });
    const [objMsg, setObjMsg] = useState({
        name: userInfo.name,
        groupId: groupId,
        userId: userId,
    });
    const handleSubmit = () => {
        console.log(objMsg, "corpo do objeto mensagem");
        if (msg.length > 0) {
            addChat({ ...objMsg, description: msg });
            setMsg("");
        }
        setObjMsg({
            name: userInfo.name,
            groupId: groupId,
            userId: userId,
        });
    };

    //Dados chumbados para teste:

    // const [msg, setMsg] = useState("");
    // const userId = 2;
    // const groupId = "8da51ca4-204f-4264-a9bb-989851c5aadb";
    // const [objMsg, setObjMsg] = useState({
    //     name: "Joao",
    //     groupId: groupId,
    //     userId: userId,
    // });
    // const [chat, setChat] = useState([
    //     {
    //         name: "Joao",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5badb",
    //         userId: 2,
    //         id: 1,
    //     },
    //     {
    //         name: "Yasmin",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
    //         userId: 3,
    //         id: 1,
    //     },
    //     {
    //         name: "Joao",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
    //         userId: 2,
    //         id: 1,
    //     },
    //     {
    //         name: "Henrique",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
    //         userId: 4,
    //         id: 1,
    //     },
    //     {
    //         name: "Joao",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
    //         userId: 2,
    //         id: 1,
    //     },
    //     {
    //         name: "Valmir",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
    //         userId: 5,
    //         id: 1,
    //     },
    //     {
    //         name: "Joao",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
    //         userId: 2,
    //         id: 1,
    //     },
    //     {
    //         name: "Maykon",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
    //         userId: 6,
    //         id: 1,
    //     },
    //     {
    //         name: "Joao",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
    //         userId: 2,
    //         id: 1,
    //     },
    //     {
    //         name: "Igor",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
    //         userId: 7,
    //         id: 1,
    //     },
    //     {
    //         name: "Joao",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
    //         userId: 2,
    //         id: 1,
    //     },
    //     {
    //         name: "Joao",
    //         description: "sei la to testando email 1",
    //         groupId: "8da51ca4-204f-4264-a9bb-989851c5badb",
    //         userId: 2,
    //         id: 1,
    //     },
    // ]);

    // const groupMsg = chat.filter((item) => {
    //     return item.groupId === groupId;
    // });

    // const handleSubmit = () => {
    //     if (msg.length > 0) {
    //         setChat([...chat, { ...objMsg, description: msg }]);
    //         setMsg("");
    //     }
    // };

    return (
        <>
            <Flex
                display={openChat}
                position={["absolute", "absolute", "static"]}
                top={"0px"}
                left={"0px"}
                flexDir={"column"}
                w={["100vw", "100vw", "308.8px"]}
                h={["100vh", "100vh", "514.4px"]}
                borderRadius={["0px", "0px", "48.8px"]}
                backgroundColor={"#ffffff"}
                p={"0px 0px 28.8px 0px"}
                justifyContent={"space-between"}
            >
                <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={"12.8px"}
                    borderRadius={["0px", "0px", "48.8px 48.8px 0px 0px"]}
                    w={["100vw", "100vw", "308.8px"]}
                    h={"58.4px"}
                    backgroundColor={"#6D17B0"}
                >
                    <Heading color={"#fff"}>Chat</Heading>
                    <CloseButton
                        onClick={() => {
                            setOpenChat("none");
                        }}
                        color={"#fff"}
                        size="lg"
                    />
                </Flex>

                <Box
                    display={"flex"}
                    flexDir={"column-reverse"}
                    id="box"
                    overflowY="auto"
                    w={["100vw", "100vw", "308.8px"]}
                    h={["82vh", "82vh", "432px"]}
                    css={{
                        "&::-webkit-scrollbar": {
                            width: "4px",
                        },
                        "&::-webkit-scrollbar-track": {
                            width: "6px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "rgba(195, 118, 255, 0.98)",
                            borderRadius: "24px",
                        },
                    }}
                >
                    <Flex
                        p={"12px"}
                        flexDir={"column"}
                        justifyContent={"flex-end"}
                        fontSize={["24px", "22px", "16px"]}
                    >
                        {groupMsg?.map((item) => {
                            return (
                                <Flex
                                    flexDir={"column-reverse"}
                                    w={["67vw", "50vw", "160px"]}
                                    alignSelf={
                                        userId === item.userId
                                            ? "flex-end"
                                            : "flex-start"
                                    }
                                    backgroundColor={
                                        userId === item.userId
                                            ? "rgba(195, 118, 255, 0.98)"
                                            : "#c9c6c6"
                                    }
                                    borderRadius={"10px"}
                                    margin={"5px 0px 5px 0px"}
                                    p={"5px 10px 5px 10px"}
                                    _after={
                                        userId === item.userId
                                            ? {}
                                            : {
                                                  content: `'${item.name}:'`,
                                                  color: "#430d6d",
                                              }
                                    }
                                >
                                    {item.description}
                                </Flex>
                            );
                        })}
                    </Flex>
                </Box>

                <Flex alignItems={"center"} justifyContent={"space-around"}>
                    <Input
                        w={["75vw", "75vw", "224px"]}
                        h={["59px", "59px", "44px"]}
                        borderRadius={"36.8px"}
                        backgroundColor={"#BDBDBD"}
                        value={msg}
                        onChange={(e) => {
                            setMsg(e.target.value);
                        }}
                        color={"#000"}
                        placeholder={"Digite sua mensagem"}
                        _placeholder={{ color: "#333" }}
                        fontSize={["20px", "20px", "16px"]}
                    />
                    <Button
                        fontSize={["20px", "20px", "16px"]}
                        color={"#fff"}
                        backgroundColor={"#6D17B0"}
                        onClick={handleSubmit}
                        _hover={{
                            backgroundColor: "#6D17B0",
                        }}
                    >
                        Enviar
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};

export default Chat;
