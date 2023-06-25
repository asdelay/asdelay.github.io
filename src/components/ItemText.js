import React from "react";
import {Text} from "@chakra-ui/react"
function ItemText ({stats}) {
    const entireStat = Object.entries(stats);
    return(
        <Text color="grey">
            {entireStat.map(item=> <Text>{item.join(": ")}</Text>)}
        </Text>
    );

}
export default ItemText;