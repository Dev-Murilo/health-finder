import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  text: string;
  hoverColor?: string;
  icon?: React.ReactNode;
}

export function SideLink({
  href,
  text,
  hoverColor = "green.300",
  icon,
}: Props) {
  return (
    <Link href={href} data-testid="side-link">
      <Flex
        data-testid="side-link-container"
        align="center"
        py={4}
        mr={10}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        transition="transform 0.2s ease-in"
        px={3}
        _hover={{
          bg: hoverColor,
          color: "white",
          fontSize: "16px",
          transform: "scale(1.1)",
        }}
      >
        {icon}
        <Text ml={5} data-testid="side-link-text">
          {text}
        </Text>
      </Flex>
    </Link>
  );
}
