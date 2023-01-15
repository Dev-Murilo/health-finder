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
} from "@chakra-ui/react";
import React from "react";
import { SideLink } from "./side-link";

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

  return isOpen ? (
    <VStack {...styles.VStack}>
      <Button type="button" onClick={onClose} data-testid="close-menu-button">
        Fechar menu
      </Button>
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
          <DrawerHeader>HealthFinder</DrawerHeader>
          <DrawerBody>
            <Box w="full" pos="fixed" h="full">
              <SideLink href="/" text="Início" />
              <SideLink href="/search" text="Buscar serviços" />
              <SideLink href="/about" text="Sobre" />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  ) : (
    <VStack {...styles.VStack}>
      <Button type="button" onClick={onOpen} data-testid="open-menu-button">
        Abrir menu
      </Button>
      <Box {...styles.box}>{children}</Box>
    </VStack>
  );
}
