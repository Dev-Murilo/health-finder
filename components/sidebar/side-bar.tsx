import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { SideLink } from "./side-link";

export function SideBar() {
  const { isOpen, onClose } = useDisclosure({
    isOpen: true,
  });

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerContent py={5}>
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
  );
}
