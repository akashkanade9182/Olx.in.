import {Box,Grid} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import { Stack,Button,Heading,Text,Image, HStack, VStack ,GridItem} from '@chakra-ui/react'
const Card=({image,title,price,location})=>{

    return (
        <GridItem onClick={()=>console.log("work")} padding={"10px 10px"}  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}  height="auto" width="250px">
            <VStack>
            <HStack>
            <Image src={image} alt="" />
            </HStack>
            <VStack>
            <Text  fontFamily={"Time-New-Romen"} color="black" fontSize={"sm"}>{`Rs-${price}`}</Text>
            <Heading fontFamily={"Time-New-Romen"} color="black" fontWeight={"bold"}  fontSize={"lg"}>{title}</Heading>
            <Text  fontFamily={"Time-New-Romen"}color="black" fontSize={"sm"}>{`location-${location}`}</Text>
            <HStack>
                <StarIcon/><  Button h="30px" padding={"5px "} bgColor={"green.300"}>Add to favirate</Button>
            </HStack>

            </VStack>
            </VStack>

        </GridItem>


    )
}
export default Card;