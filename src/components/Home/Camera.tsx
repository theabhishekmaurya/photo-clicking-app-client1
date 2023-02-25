import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Switch,
  IconButton,
  createIcon,
  Image,
} from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { AiOutlineCamera } from "react-icons/ai";
import { TbCapture } from "react-icons/tb";

export default function Camera(props: {
  handleSetImageList: Function;
  imageList: {
    image: string;
    date: number;
  }[];
}) {
  const webcamRef = useRef<any>(null);

  const [mirrorImage, setMirrorImage] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    let persons: {
      image: string;
      date: number;
    }[] = JSON.parse(
      localStorage.getItem("verified-persons") || JSON.stringify([])
    );
    persons.push({ image: imageSrc, date: Date.now() });
    props.handleSetImageList(persons);
  }, [webcamRef]);

  const handleMirrorChange = (e: any) => {
    setMirrorImage(e.target.checked);
  };

  return (
    <Container maxW={"100%"} mt={2}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Verify your
            </Text>
            <br />
            <Text as={"span"} color={"blue.400"}>
              Identity
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Align your face propery and make sure your face is properly visible
            and you are in well lit condition with clean background. This
            verification will help FBI authorities in finding the wanted
            criminals.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
              onClick={capture}
            >
              Capture{" "}
              <Box ml={2}>
                <AiOutlineCamera />
              </Box>
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              Mirror <Switch onChange={handleMirrorChange} ml={2} size="md" />
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            {/* <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent", cursor: "pointer" }}
              icon={<TbCapture fontSize={"5vh"} />}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"90%"}
              transform={"translateX(-50%) translateY(-50%)"}
            /> */}

            <Webcam
              audio={false}
              mirrored={mirrorImage}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
