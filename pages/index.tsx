import { Inter } from "@next/font/google";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Head, SideLink } from "components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure({
    isOpen: true,
  });

  return (
    <>
      <Head title="Heath finder - Home" />
      <main className={inter.className}>
        {/* <Text>Page in construction</Text> */}
        {/* <Button onClick={onOpen}>Abrir</Button> */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent py={5}>
            <DrawerHeader>HeathFinder</DrawerHeader>
            <DrawerBody>
              <Box w="full" pos="fixed" h="full">
                <SideLink href="/" text="Home" />
                <SideLink href="/about" text="about" />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </main>
    </>
  );
}
