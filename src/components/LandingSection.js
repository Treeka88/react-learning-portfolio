import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Tarek!";
const bio1 = "A frontend developer, yet to be 😁";
const bio2 = "specialized in React hopefully";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365">
        <VStack spacing={16} >
          <VStack spacing={4} alignItems="center">
            <Avatar src="https://i.pravatar.cc/150?img=7" size="xl" name="your name"  />
            <Heading as='h4' size='md' noOfLines={1}>{greeting}</Heading>
          </VStack>
          <VStack spacing={6}>
            <Heading as="h1" size="3xl" noOfLines={1}>{bio1}</Heading>
            <Heading as="h1" size="3xl" noOfLines={1}>{bio2}</Heading>
          </VStack>
        </VStack>
    </FullScreenSection>
);

export default LandingSection;
