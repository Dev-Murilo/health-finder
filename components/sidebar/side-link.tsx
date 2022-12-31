import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  text: string;
  icon?: any;
}
export function SideLink({ href, text }: Props) {
  return (
    <Link href={href}>
      <Flex
        align="center"
        py={4}
        mr={10}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
      >
        <Text ml={5}>{text}</Text>
      </Flex>
    </Link>
  );
}
