import { useState } from 'react';
import './Card.css'

const Card = ({ card }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    }

    return (
        <div className="card" onClick={handleFlip}>
            <p>{flipped ? card.answer : card.question}</p>
        </div>
    )
}



export default Card