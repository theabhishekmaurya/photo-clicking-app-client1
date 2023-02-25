import { Box, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
const WatchList = () => {
  const names = [
    "Sheryl A ClelandAlex",
    "Gerald D Dahlheimer",
    "Antonio Tardif",
    "Larry E. Wilson",
    "John W Harris",
    "William F Moore",
    "Jonathan Dunn",
    "Andrea williams",
    "John A kuhar",
    "craig baker",
    "Thomas R Williams",
    "Edward Sheehan Jr",
    "Dennis Robert Green",
    "Roanld Francis",
    "Myung C park",
    "Daniel Maurer",
    "Thomas E Jones",
    "Christopher Allen",
    "Charles Frech",
    "Timothy Cook",
  ];
  const titles = [
    {
      title: "PEOPLE ON THE WATCHLIST",
    },
    {
      title: "ANNOUNCE COMING ARREST LIST",
    },
    { title: "ARRESTED LIST" },
  ];

  return (
    <Box p={["20px 10px", "20px 50px", "20px 100px", "20px 200px"]}>
      <SimpleGrid
        p={["20px 10px", "20px 50px", "20px 100px"]}
        spacing={"40px"}
        minChildWidth="120px"
        justifyItems={"center"}
      >
        {titles.map(({ title }) => (
          <Stack align={"center"}>
            <ListHeader>{title}</ListHeader>
            {names.map((name) => (
              <Link href={"#"}>{name}</Link>
            ))}
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WatchList;
