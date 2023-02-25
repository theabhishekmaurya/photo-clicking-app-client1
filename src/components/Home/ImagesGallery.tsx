import { InfoIcon } from "@chakra-ui/icons";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";

const ImageCard = (props: {
  image: string;
  date: number;
  handleSetImageList: Function;
  index: number;
}) => {
  const data = {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
  let date: any = new Date(props.date);
  date = date.toString().split(" ");

  date = [date[1], date[2], date[3], "-", date[4]].join(" ");

  const handleDelete = (index: number) => {
    let persons: string[] = JSON.parse(
      localStorage.getItem("verified-persons") || JSON.stringify([])
    );
    persons.splice(index, 1);
    props.handleSetImageList(persons);
  };
  useEffect(() => {}, [handleDelete]);

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW={["xs", "sm"]}
        borderWidth="1px"
        rounded="lg"
        shadow="sm"
        position="relative"
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image src={props.image} alt={`Picture of ${date}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                Verified at
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              as="p"
              lineHeight="tight"
              isTruncated
            >
              {date}
            </Box>
            <Tooltip
              label="Delete"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a display={"flex"}>
                <Icon
                  onClick={() => handleDelete(props.index)}
                  as={MdDeleteOutline}
                  h={7}
                  w={7}
                  alignSelf={"center"}
                  cursor="pointer"
                />
              </chakra.a>
            </Tooltip>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

const ImagesGallery = (props: {
  imageList: { image: string; date: number }[];
  handleSetImageList: Function;
}) => {
  let persons: string[] = JSON.parse(
    localStorage.getItem("verified-persons") || JSON.stringify([])
  );

  return (
    <Stack mt={4}>
      <Heading
        textAlign={"center"}
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
      >
        Verified List
      </Heading>
      <Flex
        gap={2}
        h={props.imageList.length > 0 ? "70vh" : "auto"}
        overflow="scroll"
        direction="row"
        wrap={"wrap"}
        mt={4}
        mb={4}
        rounded="lg"
        shadow="lg"
        p={3}
        justifyContent={
          props.imageList.length > 0
            ? { sm: "center", lg: "flex-start" }
            : "center"
        }
      >
        {props.imageList.map(({ image, date }: any, index: number) => (
          <ImageCard
            handleSetImageList={props.handleSetImageList}
            key={image}
            image={image}
            date={date}
            index={index}
          />
        ))}
        {props.imageList.length === 0 && (
          <Box textAlign="center" py={10} px={6}>
            <InfoIcon boxSize={"50px"} color={"blue.500"} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
              The list is empty
            </Heading>
            <Text color={"gray.500"}>
              Verify yourself by clicking your picture from the above camera
              option. ThankYou!
            </Text>
          </Box>
        )}
      </Flex>
    </Stack>
  );
};

export default ImagesGallery;
