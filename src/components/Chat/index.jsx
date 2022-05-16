import { Flex, Heading, Button, Input } from "@chakra-ui/react";

const Chat = () => {
  return (
    <>
      <Flex flexDir={"column"}>
        <Heading>Chat</Heading>
        <Flex flexDir={"column"}></Flex>
        <Flex>
          <Input />
          <Button>Enviar</Button>
        </Flex>
      </Flex>
    </>
  );
};
