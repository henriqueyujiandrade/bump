import { Flex, Heading, Button, Input } from "@chakra-ui/react";

import { useState } from "react";

const Chat = () => {
    const [msg, setMsg] = useState("");

    const mensagemExemplo = [
        {
            description: "sei la to testando email 1",
            groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
            userId: 2,
            id: 1,
        },
    ];
    const mensagensTeste = [
        {
            description: "sei la to testando email 1",
            groupId: "8da51ca4-204f-4264-a9bb-989851c5badb",
            userId: 2,
            id: 1,
        },
        {
            description: "sei la to testando email 1",
            groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
            userId: 3,
            id: 1,
        },
        {
            description: "sei la to testando email 1",
            groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
            userId: 4,
            id: 1,
        },
        {
            description: "sei la to testando email 1",
            groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
            userId: 2,
            id: 1,
        },
        {
            description: "sei la to testando email 1",
            groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
            userId: 2,
            id: 1,
        },
        {
            description: "sei la to testando email 1",
            groupId: "8da51ca4-204f-4264-a9bb-989751c5aadb",
            userId: 2,
            id: 1,
        },
        {
            description: "sei la to testando email 1",
            groupId: "8da51ca4-204f-4264-a9bb-989851c5aadb",
            userId: 2,
            id: 1,
        },
    ];
    const userId = 2;
    const groupId = "8da51ca4-204f-4264-a9bb-989851c5aadb";
    const groupMsg = mensagensTeste.filter((item) => {
        return item.groupId === groupId;
    });
    const [objMsg, setObjMsg] = useState({
        groupId: groupId,
        userId: userId,
    });
    const handleSubmit = () => {
        setObjMsg({ ...objMsg, description: msg });
        console.log(objMsg, "corpo do objeto mensagem");
    };
    return (
        <>
            <Flex
                flexDir={"column"}
                w={"386px"}
                h={"718px"}
                borderRadius={"61px"}
                backgroundColor={"#ffffff"}
                p={"0px 0px 36px 0px"}
                justifyContent={"space-between"}
            >
                <Heading
                    borderRadius={"61px 61px 0px 0px"}
                    w={"386px"}
                    h={"73px"}
                    backgroundColor={"#6D17B0"}
                    color={"#fff"}
                >
                    Chat
                </Heading>
                <Flex flexDir={"column"} overflowY={"auto"}>
                    {groupMsg?.map((item) => {
                        return (
                            <Flex
                                alignSelf={
                                    userId === item.userId
                                        ? "flex-end"
                                        : "flex-start"
                                }
                                backgroundColor={
                                    userId === item.userId
                                        ? "rgba(195, 118, 255, 0.98)"
                                        : "#fff"
                                }
                                borderRadius={"5x"}
                            >
                                {item.description}
                            </Flex>
                        );
                    })}
                </Flex>
                <Flex>
                    <Input
                        w={"327px"}
                        h={"55px"}
                        borderRadius={"46px"}
                        backgroundColor={"#BDBDBD"}
                        value={msg}
                        onChange={(e) => {
                            setMsg(e.target.value);
                        }}
                        color={"#333"}
                        placeholder={"Digite sua mensagem"}
                    />
                    <Button
                        color={"#fff"}
                        backgroundColor={"#6D17B0"}
                        onClick={handleSubmit}
                    >
                        Enviar
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};

export default Chat;
