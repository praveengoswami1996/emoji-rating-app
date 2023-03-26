import './App.css';
import { useState, useRef, useEffect } from 'react';

import angry from './assets/angry.svg';
import almostangry from './assets/almostangry.svg';
import neutral from './assets/neutral.svg';
import smile from './assets/smile.svg';
import loveeye from './assets/loveeye.svg';

import { BsFillStarFill } from 'react-icons/bs';

const Emojis = [
    <img src={angry} alt="Angry Emoji" />,
    <img src={almostangry} alt="Disappointed Emoji" />,
    <img src={neutral} alt="Neutral Emoji" />,
    <img src={smile} alt="Smile Emoji" />,
    <img src={loveeye} alt="Loveeye Emoji" />
]

const App = () => {
    const [ratings, setRatings] = useState([true, false, false, false, false]);
    const [emoji, setEmoji] = useState(0);
    const iconDivRef = useRef(null);

    useEffect(() => {
        const { current } = iconDivRef;
        current.classList.add('flipanimation');
    }, []);

    useEffect(() => {
        const { current } = iconDivRef;
        current.classList.remove('flipanimation');
        void current.offsetLeft;
        current.classList.add('flipanimation');
    }, [ratings]);

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
                    <div className='App_container-emojis_icon' ref={iconDivRef}>
                        {Emojis[emoji]}
                    </div>
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