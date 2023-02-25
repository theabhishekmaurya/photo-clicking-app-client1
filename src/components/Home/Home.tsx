import { Box } from "@chakra-ui/react";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import Camera from "./Camera";
import ContentText from "./ContentText";
import Hero from "./Hero";
import ImagesGallery from "./ImagesGallery";
import Wanted from "./Wanted";

const Home = () => {
  interface Item {
    image: string;
    date: number;
  }

  const [imageList, setImageList] = useState<Item[]>([]);

  const handleSetList = (data: Item[]) => {
    localStorage.setItem("verified-persons", JSON.stringify(data));
    setImageList(data);
  };
  useEffect(() => {
    let persons: Item[] = JSON.parse(
      localStorage.getItem("verified-persons") || JSON.stringify([])
    );
    setImageList(persons);
  }, []);
  return (
    <>
      <Hero />
      <Box p={["0px 15px", "0px 30px", "0px 15vh"]}>
        <Camera handleSetImageList={handleSetList} imageList={imageList} />
        <ImagesGallery
          imageList={imageList}
          handleSetImageList={handleSetList}
        />
        <Wanted />
        <ContentText />
      </Box>
    </>
  );
};

export default Home;
