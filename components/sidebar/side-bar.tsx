import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  VStack,
  StackProps,
  BoxProps,
  Flex,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { SideLink } from "./side-link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBookOpen, FaHome, FaSearch } from "react-icons/fa";

export interface SideBarProps {
  children: React.ReactNode;
}

export function SideBar({ children }: SideBarProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const styles: {
    box: BoxProps;
    VStack: StackProps;
  } = {
    box: {
      display: "flex",
      alignSelf: "start",
      height: "100vh",
      width: "100vw",
      p: 10,
    },
    VStack: {
      pt: 3,
      align: "center",
    },
  };

  const getSiderBarHeader = (): React.ReactNode => {
    return (
      <HStack width="100%" justify="start" px={10}>
        <Image
          objectFit="contain"
          src="/images/heath-finder-logo.png"
          boxSize="100px"
          alt=""
        />
        <Button
          leftIcon={<AiOutlineMenu />}
          variant="ghost"
          aria-label="Open menu"
          onClick={onOpen}
          data-testid="open-menu-button"
          ml={10}
          my="auto"
          size="lg"
        >
          Menu
        </Button>
      </HStack>
    );
  };

  return isOpen ? (
    <VStack {...styles.VStack}>
      {getSiderBarHeader()}
      <Box {...styles.box}>{children}</Box>
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        isFullHeight
        closeOnOverlayClick={false}
      >
        <DrawerContent py={5}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex width="100%" justify="center" align="center">
              <Image
                objectFit="contain"
                src="/images/heath-finder-logo.png"
                boxSize="150px"
                alt=""
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Box w="full" pos="fixed" h="full">
              <SideLink href="/" text="Início" icon={<FaHome />} />
              <SideLink
                href="/search"
                text="Buscar serviços"
                icon={<FaSearch />}
              />
              <SideLink href="/about" text="Sobre" icon={<FaBookOpen />} />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  ) : (
    <VStack {...styles.VStack}>
      {getSiderBarHeader()}
      <Box {...styles.box}>{children}</Box>
    </VStack>
  );
}
