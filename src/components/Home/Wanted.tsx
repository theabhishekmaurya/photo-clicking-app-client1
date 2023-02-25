import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import wanted from "../../assets/adult.jpeg";
export default function Wanted() {
  return (
    <Stack
      className="wanted"
      minH={"50vh"}
      mt={8}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={2} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Most Wanted
            </Text>
            <br />{" "}
            <Text color={"red.400"} as={"span"}>
              Criminals
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Most wanted list for crime against children
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"red.400"}
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
            >
              Verify yourself
            </Button>
            <Button rounded={"full"}>Check verified list</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"fill"} src={wanted} />
      </Flex>
    </Stack>
  );
}
