import React from "react";
import { finesAndPenaltiesParagraphs } from "../../utils/Paragraphs";
import Blog from "../Home/Blog";

const FinesPenalties = () => {
  return (
    <Blog
      heading="CITIZEN’S GUIDE TO U.S. FEDERAL LAW ON THE EXTRATERRITORIAL SEXUAL EXPLOITATION OF CHILDREN"
      paragraphs={finesAndPenaltiesParagraphs}
      top={4}
    />
  );
};

export default FinesPenalties;
