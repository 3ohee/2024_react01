import React from 'react';

function Item({name, isPacked}) {
    // return (
    //     <li> {name} {isPacked && '✅' } </li>
    // );

    let itemsContent = name
    if(isPacked) {
        itemsContent = name + "✅";
    } 

    return(
        <li>{itemsContent}</li>
    );

}

export default Item;