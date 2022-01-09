import Atropos from 'atropos/react';
import { useRef } from 'react';
import style from '../styles/Core.module.scss'
import Counter from './Counter';

const dateOfWedding = new Date("2022-06-18");

const Core = () => {
    const text = useRef(null)

    return (<>
        <div className={style.core}>
            <Atropos 
                shadow={false}
                activeOffset={100}
                className={style.myAtropos}
                onEnter={() => text && text.current ? text.current.style.transform = 'scale(1.3) translateX(-15px)' : null}
                onLeave={() => text && text.current ? text.current.style.transform = 'scale(1.0) translateX(0)' : null}
            >
                <div className={style.movingContainer}>
                    <div className={style.movingFlowers}>
                        <span className={style.invitationTitle}>MEGHÍVÓ</span>
                        <Counter date={dateOfWedding}></Counter>
                        <span className={style.signoNames}>Jenni&Dávid</span>
                        <span className={style.weddingDate}>2022.06.18</span>
                        <a 
                            className={style.weddingLocation}
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