import "../styles/reset.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SideBar } from "components/sidebar/side-bar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SideBar>
        <Component {...pageProps} />
      </SideBar>
    </ChakraProvider>
  );
}
