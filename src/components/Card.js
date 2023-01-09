import {  HStack, Image, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";



function Feature({ image, desc, title }) {
const pl = "5"
const pr = "5"
const pb = "3"
const pt = "3"
  return (
    <Box bg='white' borderRadius='lg'>
    <Image src={image} alt='Dan Abramov' borderRadius='lg'></Image>
    <Text pl={pl} pr={pr} pb={pb} pt={pt} color='black' fontSize='xl' fontWeight='semibold'>{title}</Text>
    <Text pl={pl} pr={pr} pb={pb} color='black'  fontSize='sm'>{desc}</Text>
    <Text pl={pl} pr={pr} pb={pb} color='black' fontSize='sm'>See More <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon></Text>
    </Box>
  )
}

const Card = ({ title, description, imageSrc}) => {
  return (
    <>
    <HStack
        >
          <Feature 
          image={imageSrc}
          title={title}
          desc={description}
          />
        </HStack>
    </>
  )
};

export default Card;
