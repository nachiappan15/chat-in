import React from 'react';

const FloatingCard = (props) => {
    const Element = props.Element
    return <>
    <div className='mx-auto my-auto rounded-3xl h-70p w-90 max-w-3xl bg-layer1-600 flex flex-col items-center absolute top-0 left-0 right-0 bottom-0'>
    <Element onClickHandler ={props.onClickHandler}/>
    </div>
    </>
};

export default FloatingCard;
