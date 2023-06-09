import { Box, Button, HStack, Link } from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";
import { Link as Dink } from "react-router-dom";

function GoldLearn() {
  const colorText = "#32BFA8";
  const medio = "18px";

  return (
    <HStack display="flex" w="18%" justifyContent="space-around" m=" 40px auto">
      <Box fontWeight="medium" color={colorText} display="contents">
        <Dink to="/learn">
          <Link fontSize={{ base: medio }}>
            <Button variant="ghost" rightIcon={<AiOutlineRight />}>
              Learn more
            </Button>
          </Link>
        </Dink>
      </Box>
      <Box fontWeight="medium" color={colorText} display="contents">
        <Link
          href="https://www.ebay.co.uk/itm/314610317863"
          isExternal
          fontSize={{ base: medio }}
        >
          <Button variant="ghost" rightIcon={<AiOutlineRight />}>
            Buy
          </Button>
        </Link>
      </Box>
    </HStack>
  );
}

export default GoldLearn;
