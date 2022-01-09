import Atropos from 'atropos/react';
import { useRef } from 'react';
import { core, invitationTitle, movingContainer, movingFlowers, myAtropos, signoNames, weddingDate, weddingLocation } from '../styles/Core.module.scss'
import Counter from './Counter';

const dateOfWedding = new Date("2022.06.18");

const Core = () => {
    const text = useRef(null)

    return (<>
        <div className={core}>
            <Atropos 
                shadow={false}
                activeOffset={100}
                className={myAtropos}
                onEnter={() => text && text.current ? text.current.style.transform = 'scale(1.3) translateX(-15px)' : null}
                onLeave={() => text && text.current ? text.current.style.transform = 'scale(1.0) translateX(0)' : null}
            >
                <div className={movingContainer}>
                    <div className={movingFlowers}>
                        <span className={invitationTitle}>MEGHÍVÓ</span>
                        <Counter date={dateOfWedding}></Counter>
                        <span className={signoNames}>Jenni&Dávid</span>
                        <span className={weddingDate}>2022.06.18</span>
                        <a 
                            className={weddingLocation}
                            href='https://www.google.com/maps/d/u/0/viewer?ie=UTF8&om=0&source=embed&oe=UTF8&msa=0&mid=1axWYGF4vqs-lKb0smDE60AGFnt8&ll=47.38945899999998%2C18.387487&z=17'
                            target="_blank"
                            rel="noreferrer"
                        >Gánt</a>
                    </div>
                </div>
            </Atropos>
        </div>
    </>);
}

export default Core;