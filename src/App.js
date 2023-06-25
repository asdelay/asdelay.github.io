import './App.css';
import React from "react";
import CardItem from "./components/CardItem";
import data from "./data/Items.json"
import {Heading, Flex, Spacer, Box} from "@chakra-ui/react";
function App() {
    const {patch, items} = data;
    return (
        <div className="App">
            <Flex bg="red.100" direction="column" >
                <Flex wrap="wrap" mx="5%" my="50px">
                    <Heading size='2xl'>Dota items for universals</Heading>
                    <Spacer></Spacer>
                    <Heading size='l' color="gray.700">{patch}</Heading>
                </Flex>

                <Flex flexDirection="row" wrap="wrap" gap="10"  mx="10%">
                    {items.map((item)=>{
                        return (
                            <Box w="220px">
                                <CardItem
                                    name={item.itemName}
                                    picSrc={item.imageSrc}
                                    itemStats={item.stats}
                                    itemPrice={item.price}
                                />
                            </Box>
                        );
                    })}
                </Flex>
            </Flex>


        </div>
    );
}

export default App;
