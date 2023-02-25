import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import nav from "../../assets/nav.png";
export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"50vh"}
      backgroundImage={
        "url(https://media.istockphoto.com/id/532252564/photo/policeman-using-laptop-in-office.jpg?s=612x612&w=0&k=20&c=UJuO-ljTgA8f9xbFgztnyZxhU2HFcvjyEzSybRdWAnM=)"
        // nav
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}
          >
            The FBI is actively searching for those involved in child abuse
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Verify yourself
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Be safe
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
