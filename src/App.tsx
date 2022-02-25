import React, {useState} from 'react';
import './App.css';
import Duplicate, {CardType} from "./Duplicate";

function App() {
    const [cardList, setCardList] = useState<Array<CardType>>([
        {id: 1, order: 3, text: 'Card 3'},
        {id: 2, order: 1, text: 'Card 1'},
        {id: 3, order: 2, text: 'Card 2'},
        {id: 4, order: 4, text: 'Card 4'},
    ])

    const [currentCard, setCurrentCard] = useState<null | CardType>(null)

    function dragStartHandler(e: any, card: any) {
        setCurrentCard(card)
    }

    function dragLeaveHandler(e: any) {
        e.target.style.background = 'bisque'
    }

    function dragEndHandler(e: any) {

    }

    function dragOverHandler(e: any) {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }

    function dropHandler(e: any, card: any) {
        e.preventDefault()
        setCardList(cardList.map(c => {
            if (currentCard && (c.id === card.id)) {
                return {...c, order: currentCard.order}
            }
            if (currentCard && (c.id === currentCard.id)) {
                return {...c, order: card.order}
            }
            return c
        }))
        e.target.style.background = 'bisque'
    }

    const sortCards = (a: any, b: any) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    return (
        <div className="App">
            <h1>First list</h1>
            {cardList.sort(sortCards).map(card =>
                <div
                    onDragStart={(e: any) => dragStartHandler(e, card)}
                    onDragLeave={(e: any) => dragLeaveHandler(e)}
                    onDragEnd={(e: any) => dragEndHandler(e)}
                    onDragOver={(e: any) => dragOverHandler(e)}
                    onDrop={(e: any) => dropHandler(e, card)}
                    draggable={true}
                    className='card'>
                    {card.text}
                </div>
            )}
            <Duplicate cardList={cardList}/>
        </div>
    );
}

export default App;
