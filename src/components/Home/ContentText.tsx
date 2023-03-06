import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import child from "../../assets/child.jpeg";
import report from "../../assets/report.jpeg";
import Blog from "./Blog";
import { homeParagraphs } from "../../utils/Paragraphs";
interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8O5CXxLVO4yrbRVbcRh1w49e-Q6C1D4uu3Q&usqp=CAU"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ContentText = () => {
  return (
    <Container maxW={"100%"} mt={4}>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={child}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Child Abuse", "Child Pornography"]} />
          <Heading marginTop="1" fontSize={["sm", " xl"]}>
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              CHILD PORN SUPPORT (1800-180-370)
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Child sexual abuse material (legally known as child pornography)
            refers to any content that depicts sexually explicit activities
            involving a child. Visual depictions include photographs, videos,
            digital or computer generated images indistinguishable from an
            actual minor......
          </Text>
          <BlogAuthor name="John Doe" date={new Date("2023-02-21T19:01:27Z")} />
        </Box>
      </Box>
      <Divider marginTop="5" />
      <Blog
        image={report}
        paragraphs={homeParagraphs}
        heading={"#STOPCHILDPORNABUSE"}
      />
    </Container>
  );
};

export default ContentText;
