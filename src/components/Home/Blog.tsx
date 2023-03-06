import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { useLocation } from "react-router";

const Blog = ({
  image,
  heading,
  paragraphs,
  top,
}: {
  image?: string;
  heading?: string;
  paragraphs?: string[];
  top?: number;
}) => {
  const { pathname } = useLocation();
  const links = [
    "https://www.csmonitor.com/USA/Justice/2014/0122/Child-porn-3.4-million-for-two-photos-Court-grapples-with-restitution",
    "https://www.thedailybeast.com/todd-roatsey-counselor-of-the-year-busted-for-child-porn-posed-as-teen-to-chat-with-own-students-feds-say",
  ];
  return (
    <Stack
      paddingTop="20px"
      spacing={5}
      p={
        ["/citizen-guide", "/fines-and-penalties"].includes(pathname)
          ? ["10px 10px", "10px 100px", "10px 15%"]
          : ""
      }
    >
      <Heading
        lineHeight={1.5}
        textAlign={"center"}
        mt={3}
        mb={5}
        fontSize={["2xl", "3xl"]}
      >
        {heading}
      </Heading>
      {image && <Image w={"100%"} h={["30vh", "50vh", "70vh"]} src={image} />}
      {top && (
        <Flex gap={6}>
          <Box border={"2px solid blue"}></Box>
          <Stack spacing={4}>
            {paragraphs?.map(
              (paragraph, index) => index < top && <Text>{paragraph}</Text>
            )}
          </Stack>
        </Flex>
      )}
      {top &&
        paragraphs?.map(
          (paragraph, index) =>
            index >= top && (
              <Text
                textAlign={"left"}
                key={index}
                as="p"
                fontSize={["sm", "md", "lg"]}
              >
                {paragraph}
              </Text>
            )
        )}
      {!top &&
        paragraphs?.map((paragraph, index) => (
          <Text
            textAlign={"left"}
            key={index}
            as="p"
            fontSize={["sm", "md", "lg"]}
          >
            {paragraph}
          </Text>
        ))}
      {pathname === "/citizen-guide" && (
        <Box>
          <Text mb={2}>See More :</Text>
          <Stack>
            <Link target={"_blank"} href={links[0]}>
              {links[1]}
            </Link>
            <Link target={"_blank"} href={links[1]}>
              {links[1]}
            </Link>
          </Stack>
        </Box>
      )}
    </Stack>
  );
};

export default Blog;
