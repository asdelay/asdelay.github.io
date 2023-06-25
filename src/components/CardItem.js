import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Stack,
    Text,
    Image,
    Flex
} from '@chakra-ui/react'
import React from "react";
import ItemText from "./ItemText";
function CardItem ({name,picSrc,itemStats,itemPrice}) {
    const {Intelligence, Strength, Agility, Damage} = itemStats
    let resDmg = 0;
    resDmg += typeof Intelligence==="undefined"?  0: Intelligence*0.7;
    resDmg += typeof Strength==="undefined"? 0 : Strength*0.7;
    resDmg += typeof Agility==="undefined"? 0 : Agility*0.7;
    resDmg += typeof Damage==="undefined"? 0: Damage;
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={picSrc}
                    alt={name + " picture"}
                    borderRadius='lg'
                    boxSize='100px 75px'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <ItemText stats={itemStats}/>
                    <Flex wrap="wrap" justify="space-between">
                        <Text color='yellow.400' fontSize='2xl'>
                            {itemPrice}g
                        </Text>
                        <Text color='purple.500' fontSize='2xl'>
                            {resDmg.toFixed(1)} dmg
                        </Text>
                    </Flex>
                    <Text color='gray' fontSize='l'>
                        {(resDmg/itemPrice).toFixed(4)} damage/gold
                    </Text>


                </Stack>
            </CardBody>
        </Card>
    );
}

export default CardItem;