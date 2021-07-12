import React from 'react';
import { triggerToggleCard } from "../../redux/actions/memoryGame";
import {useDispatch} from 'react-redux';

const Card = ({
    text,
    image,
    open,
    id,
    disabled
}) => {
    const dispatch = useDispatch();

    return(
        <custom-card 
           text={text}
           image={image}
           open={open}
           id={id}
           disabled={disabled}
           onClick={() => dispatch(triggerToggleCard(id))}/>
    );
}

export default Card;