import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import pc from "../assets/pc.png";
import { FaWhatsapp } from "react-icons/fa";

function Services() {
  return (
    <Stack
      backgroundImage={pc}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="90vh"
      justifyContent="center"
      margin="70px auto"
      id="services"
    >
      <Text textAlign="center" fontSize="40px" color="white" mt="80px">
        Services
      </Text>
      <Accordion w="60%" m="auto !important" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton color="white">
              <Box
                fontFamily="poppins"
                color="white"
                as="span"
                flex="1"
                textAlign="left"
              >
                Maintenance & Repair
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontFamily="poppins" color="white" pb={4}>
            We repair laptop and desktop computers of every brand. We provide
            on-site solutions for customers throughout Cambridge, and we can
            diagnose, repair, replace and upgrade any components.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton color="white">
              <Box
                fontFamily="poppins"
                color="white"
                as="span"
                flex="1"
                textAlign="left"
              >
                Collection & Return Services
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontFamily="poppins" color="white" pb={4}>
            After your request, we pickup your computer or laptop, our team of
            skilled technician diagnose the problem, we repair and return to
            you. Available across Cambridge - UK
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton color="white">
              <Box
                fontFamily="poppins"
                color="white"
                as="span"
                flex="1"
                textAlign="left"
              >
                PC Builds
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontFamily="poppins" color="white" pb={4}>
            We can help you create all sorts of computers. We enjoying building
            our customers great computers at a competitive price.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton color="white">
              <Box
                fontFamily="poppins"
                color="white"
                as="span"
                flex="1"
                textAlign="left"
              >
                Recovery & Back Up Services
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontFamily="poppins" color="white" pb={4}>
            One of our services is full PC recovery, where we recover your
            Windows, including the data that is precious to you. We can backup
            files, and we provide reliable storage solutions to make sure those
            files stay secure.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton color="white">
              <Box
                fontFamily="poppins"
                color="white"
                as="span"
                flex="1"
                textAlign="left"
              >
                Computer Cleaning
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontFamily="poppins" color="white" pb={4}>
            Computer cleaning usually involves cleaning both the hardware
            components and making use of a cleaner program to eliminate junk
            files. Hardware cleaning is necessary especially in institutions
            like schools and universities because of the cross-contamination
            between users. Removal of dust and debris from hardware components
            can improve the life span of the machine.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Link
        m="auto !important"
        href="https://api.whatsapp.com/message/JQQXGPUC55FHJ1?autoload=1&app_absent=0"
        isExternal
      >
        <Button
          rightIcon={<FaWhatsapp />}
          letterSpacing="1px"
          colorScheme="teal"
        >
          Contact
        </Button>
      </Link>
    </Stack>
  );
}

export default Services;
