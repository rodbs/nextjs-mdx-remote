import React, { useState, useEffect } from "react";
import {
  chakra,
  Avatar,
  Container,
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Icon,
  IconButton,
  Flex,
  Text,
  Button,
  Link,
  useColorMode,
  FormControl,
  FormLabel,
  Switch,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  OrderedList,
  ControlBox,
  Radio,
  RadioGroup,
  Tooltip,
} from "@chakra-ui/core";
import shortid from "shortid";

const compA = ({ title }) => {
  const [state, setState] = useState(0);

  const next = () => {
    setState((prev) => prev + 1);
  };

  return (
    <Container centerContent my={8}>
      <Heading size="lg" as="h4" id={shortid.generate()}>
        {title}
      </Heading>

      <Box
        color="gray.200"
        borderWidth="1px"
        borderRadius="lg"
        w="300px"
        spacing="20px"
        mx="auto"
        my={8}
        align="center"
      >
        <Text color="black">{state}</Text>
        <Button onClick={next} mt={8}>
          next
        </Button>
      </Box>
    </Container>
  );
};

export default compA;
