import { chakra, Flex, Box } from "@chakra-ui/core";
import React, { useState, useEffect } from "react";
import CompA from "../components/compA";
import * as tocbot from "tocbot";

const TOCBOT_HINTS = {
  tocSelector: ".js-toc-hints",
  contentSelector: ".js-toc-content",
  headingSelector: "h4",
  positionFixedSelector: ".js-toc-hints",
  includeHtml: false,
  hasInnerContainers: false,
  isCollapsedClass: null,
};

const Toc = () => {
  useEffect(() => {
    if (tocbot) {
      tocbot.init(Object.assign({}, TOCBOT_HINTS));
    }
    return () => {
      tocbot.destroy();
    };
  });

  return (
    <Flex flexDirection="row" maxW="800px">
      <Box
        fontSize="17px"
        as="nav"
        className="js-toc-hints"
        p={4}
        position={{ base: "static ", xl: "absolute" }}
        top="100px"
        right="calc((100% - 100rem ) / 2)"
        w={{ base: "450px ", xl: "300px" }}
        //
      />
      <Box className="js-toc-content" mt={4} mb={4}>
        <CompA title="Comp 1" />
        <CompA title="Comp 2" />
      </Box>
    </Flex>
  );
};

export default Toc;
