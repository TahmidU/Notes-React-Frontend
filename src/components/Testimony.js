import React, { useRef, useEffect } from 'react';
import { TestimonyBlock } from '../styles/Testimony';

function Testimony() {

    //const [pos, setPos] = useState(0);
    const pos = useRef(0);
    const quote = useRef();
    const reviewer = useRef();


    useEffect(
        () => {
            const interval = setInterval(() => {
                console.log('This will run every 10 seconds!');

                pos.current = pos.current + 1;

                if(pos.current === 3)
                    pos.current = 0;

                console.log(pos.current);
        
                if(pos.current === 0){
                    quote.current.textContent = `Notes is a powerful tool that can help executives,\
                    entrepreneurs and creative people capture and arrange their ideas.\
                     All you have to do is use it.`;

                    reviewer.current.textContent = `- Forbes`;
                }
        
                if(pos.current === 1){
                    quote.current.textContent = `It feels like there are endless ways to use Notes… Use it for school, work, life, and beyond.`;
                    reviewer.current.textContent = `Well + Good`;
                }
        
                if(pos.current === 2){
                    quote.current.textContent =`Notes is a powerful tool for managing your tasks right\
                     alongside all of the information you work with every day.`;
                     reviewer.current.textContent =`Inc. Magazine`;
                }
            }, 10000);
            return () => clearInterval(interval);
        }, [pos]);

    return(
        <TestimonyBlock>
            <div className='testimony_content'>
            <h1>Testimony</h1>
            <div className='testimony_quote'>
                <blockquote>
                <div ref={quote}>
                    Notes is a powerful tool that can help executives, entrepreneurs and creative people capture and arrange their ideas. All you have to do is use it.
                </div>
                </blockquote>
                <figcaption>
                    <div ref={reviewer}>
                        - Forbes
                    </div>
                </figcaption>
            </div>
            <div className='testimony_reviewers'>
                <div className='reviewers_logos'>
                <img src={require('../img/forbes_logo.png')} alt='forbes' />
                </div>
                <div className='reviewers_logos'>
                <img src={require('../img/well&good_logo.png')} alt='wellgood' />
                </div>
                <div className='reviewers_logos'>
                <img src={require('../img/inc_logo.png')} alt='inc' />
                </div>
            </div>
            </div>
    </TestimonyBlock>
  );
}

export default Testimony;