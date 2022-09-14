import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const LeftArrow = () => {
  const { scollPrev } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scollPrev}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};
export const ImageScrollbar = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <Box
          width="910px"
          itemID={item.id}
          overflow="hidden"
          key={item.id}
          p="1"
        >
          <Image
            width={1000}
            height={500}
            alt="property"
            src={item.url}
            placeholder="blur"
            blurDataURL={item.url}
            sizes="(max-width:500px) 100px, (max-width):1023px 400px 1000px"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};
