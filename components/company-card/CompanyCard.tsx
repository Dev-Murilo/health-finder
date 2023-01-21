import {
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

export interface CompanyCardProps {
  title: string;
  specializations: string[];
  description: string;
  cardProps?: CardProps;
}

export function CompanyCard({
  title,
  specializations,
  description,
  cardProps = {
    w: "md",
    h: "md",
  },
}: CompanyCardProps) {
  const generateKey = (prefix: string) => {
    return `${prefix}_${new Date().getTime()}`;
  };

  return (
    <Card {...cardProps}>
      <CardHeader>
        <Heading size="lg">{title}</Heading>
      </CardHeader>
      <Divider />
      <CardBody overflowY="auto">
        <Stack spacing={5}>
          <Box width="100%" h="200px">
            <Image
              objectFit="cover"
              src="/images/company-image.jpg"
              boxSize="fit-content"
              w="100%"
              h="100%"
              alt={`Company ${title}`}
            />
          </Box>
          <HStack spacing={3}>
            {specializations.map((specialization) => (
              <Tag
                variant="solid"
                size="md"
                colorScheme="green"
                borderRadius="full"
                key={generateKey(specialization)}
              >
                {specialization}
              </Tag>
            ))}
          </HStack>
          <Text fontSize="sm">{description}</Text>
          <Divider />
          <HStack>
            <Text fontSize="sm">Localização: Salvador, Ba</Text>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
}
