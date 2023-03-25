import './App.css';
import { useState } from 'react';
import { BsFillEmojiAngryFill, BsFillEmojiFrownFill, BsEmojiExpressionlessFill, BsFillEmojiLaughingFill, BsFillEmojiHeartEyesFill, BsFillStarFill } from 'react-icons/bs';

const Emojis = [
    <BsFillEmojiAngryFill color={"red"} className="emoji flip"/>,
    <BsFillEmojiFrownFill color={"orange"} className="emoji flip"/>,
    <BsEmojiExpressionlessFill color={"blue"} className="emoji flip"/>,
    <BsFillEmojiLaughingFill color={"chartreuse"} className="emoji flip"/>,
    <BsFillEmojiHeartEyesFill color={"green"} className="emoji flip"/>
]

const App = () => {
    const [ratings, setRatings] = useState([true, false, false, false, false]);
    const [emoji, setEmoji] = useState(0);

    const handleStarClick = (index) => {
        let updatedRatings = [];
        for (let i=0; i<=4; i++) {
            if (i <= index)
                updatedRatings.push(true);
            else 
                updatedRatings.push(false);
        }
        setRatings(updatedRatings);
        setEmoji(index);
    }    

    return (
        <div className='App'>
            <div className='App__container'>
                <div className='App__container-emojis'>
                    {Emojis[emoji]}
                </div>
                <div className='App__container-stars'>
                    {
                        ratings.map((rating, index) => {
                            return (
                                rating 
                                ? <BsFillStarFill 
                                    className='star' 
                                    color={"Gold"} 
                                    key={`mykey${index}`}
                                    onClick={() => handleStarClick(index)}
                                    />
                                : <BsFillStarFill 
                                    className='star' 
                                    color={"lightgray"} 
                                    key={`mykey${index}`}
                                    onClick={() => handleStarClick(index)}
                                    />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default App;