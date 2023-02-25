import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router";

const Blog = ({
  image,
  heading,
  paragraphs,
}: {
  image?: string;
  heading?: string;
  paragraphs?: string[];
}) => {
  const { pathname } = useLocation();

  return (
    <VStack
      paddingTop="20px"
      spacing="4"
      alignItems="center"
      textAlign={"center"}
      p={
        ["/citizen-guide", "/fines-and-penalties"].includes(pathname)
          ? ["10px 10px", "10px 100px"]
          : ""
      }
    >
      <Heading mt={3} mb={3} fontSize={["2xl", "3xl"]}>
        {heading}
      </Heading>
      {image && <Image w={"100%"} h={["30vh", "50vh", "70vh"]} src={image} />}
      {paragraphs?.map((paragraph, index) => (
        <Text key={index} as="p" fontSize={["sm", "md", "lg"]}>
          {paragraph}
        </Text>
      ))}
    </VStack>
  );
};

export default Blog;
