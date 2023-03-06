import { Text } from "@chakra-ui/react";
import { citizenGuideParagraphs } from "../../utils/Paragraphs";
import Blog from "../Home/Blog";

const CitizenGuide = () => {
  return (
    <>
      <Blog
        heading="CITIZEN’S GUIDE TO U.S. FEDERAL LAW ON CHILD PORNOGRAPHY"
        paragraphs={citizenGuideParagraphs}
        top={10}
      />
    </>
  );
};

export default CitizenGuide;
