import { HStack, Text, Box } from "@chakra-ui/react";

function GoldTitle() {
  const medio = "15px";
  const larga = "38px";
  const extraL = "50px";

  return (
    <HStack justifyContent="center" mt="70px">
      <Box textAlign="center" color="#393535" fontWeight="medium">
        <Text
          fontSize={{ base: larga, md: larga, lg: extraL }}
          lineHeight="100px"
        >
          CC CLASS 1°GEN
        </Text>
        <Text fontSize={{ base: medio }}>Gold. Platinum. Diamond.</Text>
      </Box>
    </HStack>
  );
}

export default GoldTitle;
