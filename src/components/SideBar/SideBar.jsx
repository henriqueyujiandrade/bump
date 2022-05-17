import BumpLogoIcon from "./Icons/BumpLogoIcon.svg";
import UserIcon from "./Icons/VectorUserIcon.svg";
import HomeIcon from "./Icons/VectorHomeIcon.svg";
import LogOut from "./Icons/LogOut.svg";
import ListUp from "./Icons/ListUp.svg";
import ListDown from "./Icons/ListDown.svg";
import ColectionIcon from "./Icons/VectorColectionIcon.svg";

import { Flex, Button, Image, Heading } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { GroupContext } from "../../Providers/Group/index.js";
import { useHistory } from "react-router-dom";

const SideBar = ({ showSideBar, setShowSideBar }) => {
    const { group } = useContext(GroupContext);
    const [drop, setDrop] = useState("isClose");
    const history = useHistory();
    const handleHome = () => {
        history.push("/dashboard");
    };
    const handleDrop = () => {
        if (drop === "isClose") {
            setDrop("isOpen");
        } else {
            setDrop("isClose");
        }
    };
    const handleLogOut = () => {
        localStorage.removeItem("User");
        localStorage.removeItem("Token");
        history.push("/");
    };

    const handleProject = (e) => {
        history.push(`/dashboard/${e.target.id}`);
    };
    return (
        <>
            <Flex
                flexDir="column"
                justifyContent="space-between"
                w={["175px", "205px", "225px"]}
                h="100vh"
                backgroundColor="#6D17B0"
                alignItems={"center "}
                p={["8px", "12px", "16px"]}
                display={[showSideBar, showSideBar, "flex"]}
            >
                <Flex flexDir={"column"} alignItems="center">
                    <Flex
                        justifyContent={[
                            "space-between",
                            "space-between",
                            "center",
                        ]}
                        w={["163px", "189px", "205px"]}
                        marginBottom="16px"
                    >
                        <Heading>
                            <Image
                                src={BumpLogoIcon}
                                alt={"Logo Bump"}
                                w={["50px", "75px", "90px"]}
                                h={["15px", "25px", "25px"]}
                            />
                        </Heading>
                        <Button
                            maxW={"30px"}
                            p="0px 0px 10px 0px"
                            h={["15px", "25px", "25px"]}
                            onClick={() => {
                                setShowSideBar("none");
                            }}
                            display={["flex", "flex", "none"]}
                            justifyContent="center"
                            alignItems={"center"}
                            backgroundColor="#6D17B0"
                            color="#ffffff"
                            _hover={{ background: "#6D17B0" }}
                        >
                            x
                        </Button>
                    </Flex>
                    <Flex marginBottom="16px">
                        <Image
                            src={UserIcon}
                            alt={"User Image"}
                            borderRadius="50%"
                            w={["60px", "90px", "110px"]}
                            h={["60px", "90px", "110px"]}
                        />
                    </Flex>
                    <Flex>
                        <Button
                            onClick={handleHome}
                            backgroundColor="#6D17B0"
                            color="#ffffff"
                            _hover={{ background: "#6D17B0" }}
                            padding={"3px"}
                        >
                            <Image src={HomeIcon} marginRight={"5px"} />
                            Home
                        </Button>
                    </Flex>
                    <Flex flexDir="column">
                        <Flex>
                            <Button
                                onClick={handleDrop}
                                backgroundColor="#6D17B0"
                                color="#ffffff"
                                _hover={{ background: "#6D17B0" }}
                                padding={"3px"}
                            >
                                <Image
                                    src={drop === "isClose" ? ListUp : ListDown}
                                    marginRight={"5px"}
                                />
                                <Image
                                    src={ColectionIcon}
                                    marginRight={"5px"}
                                />
                                Coleção
                            </Button>
                        </Flex>
                        <Flex
                            display={drop === "isClose" ? "none" : "flex"}
                            flexDir="column"
                            maxHeight={"40vh"}
                            overflowY="auto"
                        >
                            <Flex flexDir={"column"} alignItems={"flex-start"}>
                                <Button
                                    onClick={(e) => {
                                        handleProject(e);
                                    }}
                                    backgroundColor="#6D17B0"
                                    color="#ffffff"
                                    _hover={{ background: "#6D17B0" }}
                                    id={"daily"}
                                >
                                    <Image src={UserIcon} marginRight={"3px"} />
                                    Daily
                                </Button>
                                {group?.map((item) => {
                                    return (
                                        <Button
                                            onClick={(e) => {
                                                handleProject(e);
                                            }}
                                            backgroundColor="#6D17B0"
                                            color="#ffffff"
                                            _hover={{ background: "#6D17B0" }}
                                            key={item.groupId}
                                            id={item.groupId}
                                        >
                                            <Image
                                                src={UserIcon}
                                                marginRight={"3px"}
                                            />
                                            {item.name}
                                        </Button>
                                    );
                                })}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex>
                    <Button
                        onClick={handleLogOut}
                        backgroundColor="#6D17B0"
                        color="#FEEE35"
                        _hover={{ background: "#6D17B0" }}
                        padding={"3px"}
                    >
                        <Image src={LogOut} marginRight={"3.5px"} />
                        sair
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};

export default SideBar;
