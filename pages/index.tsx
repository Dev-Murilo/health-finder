import { Inter } from "@next/font/google";
import { Text } from "@chakra-ui/react";
import { Head } from "components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head title="Heath finder - Home" />
      <main className={inter.className}>
        <Text>Page in construction</Text>
      </main>
    </>
  );
}
