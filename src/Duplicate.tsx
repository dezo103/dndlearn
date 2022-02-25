import React from 'react';

type PropsType = {
    cardList: Array<CardType>
}

export type CardType = {
    id: number
    order: number
    text: string
}

const Duplicate = (props: PropsType) => {
    return (
        <div>
            <h2>Second list</h2>
            { props.cardList.map(el =>
                <div className='card'>
                    { el.text }
                </div>
                )}
        </div>
    );
};

export default Duplicate;