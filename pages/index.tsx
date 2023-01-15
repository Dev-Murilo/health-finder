import { Inter } from "@next/font/google";
import { HStack } from "@chakra-ui/react";
import { CompanyCard, Head } from "components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head title="Health finder - Home" />
      <main className={inter.className}>
        <HStack>
          <CompanyCard
            title="First company"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis velit mauris. In vel nibh orci. Phasellus varius convallis dolor, vel dignissim nunc fermentum vel. Phasellus at hendrerit tellus, at suscipit ipsum. Aliquam erat volutpat. Curabitur egestas erat tincidunt posuere egestas. Vivamus quis sodales mauris."
            specializations={["Geral", "Ortopedia"]}
          />
        </HStack>
      </main>
    </>
  );
}
