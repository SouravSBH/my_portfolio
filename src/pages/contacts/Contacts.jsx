import React from 'react'
import style from './Contacts.module.css'
import { useRive } from '@rive-app/react-canvas';
import keyboard from "./keyboard.riv"
import "../../global/css/global.css"
import { Link } from 'react-router-dom';
import GlassDiv from '../../global/components/glassDiv/GlassDiv';

export default function Contacts() {

    const { RiveComponent, rive } = useRive({
        src: keyboard,
        autoplay: false,
    })

    const [isCopied, setIsCopied] = React.useState(false);


    return (
        <div className={`${style.body}`}
            onMouseEnter={() => rive && rive.play()}>
            <RiveComponent className={`${style.rive}`}


            />
            <GlassDiv>
                <h2>
                    I'm a student, studying Software Engineering at
                </h2>
                <a className={`${style.sust}`} href="https://www.sust.edu/" target="_blank" rel="noreferrer">Shahjalal University of Science and Technology </a>
            </GlassDiv>

            <div>
                {/* 
                 Email : sourav.ahmed5654@gmail.com
                    Github : https://github.com/Sourav9063
                    Website : https://sourav9063.github.io/my_portfolio/
                    LinkedIn : https://www.linkedin.com/in/sourav-ahmed/
                    +8801760725654

                    create GlassDiv for all the links
                */}
                <GlassDiv>
                    <a href="mailto:sourav.ahmed5654@gmail.com" target="_blank" rel="noreferrer">Email : sourav.ahmed5654@gmail.com</a>
                </GlassDiv>
                <GlassDiv>
                    <div className="tooltip imposterA"
                        onMouseEnter={() => setIsCopied(() => false)}
                        onClick={(e) => {
                            navigator.clipboard.writeText("+8801760725654");
                            setIsCopied(() => true)
                            e.preventDefault();
                        }}
                    >+8801760725654
                        <span className="glass tooltiptext  text_not_selectable">{isCopied ? "Copied" : "Click To Copy"}</span>
                    </div>
                </GlassDiv>
                <GlassDiv>
                    <div className="tooltip imposterA"
                        onMouseEnter={() => setIsCopied(() => false)}
                        onClick={(e) => {
                            navigator.clipboard.writeText("+8801760725654");
                            setIsCopied(() => true)
                            e.preventDefault();
                        }}
                    >+8801775767596
                        <span className="glass tooltiptext  text_not_selectable">{isCopied ? "Copied" : "Click To Copy"}</span>
                    </div>
                </GlassDiv>
                <GlassDiv>
                    <a href="https://www.facebook.com/Sourav.Ahmed63/" target="_blank" rel="noreferrer">FaceBook</a>
                </GlassDiv>
                <GlassDiv>
                    <a href="https://www.linkedin.com/in/sourav-ahmed/" target="_blank" rel="noreferrer">LinkedIn</a>
                </GlassDiv>



            </div>

        </div>
    )
}


/* <div className={`${style.email}`}
    onClick={(e) => {
        // window.location.href = 'mailto:yourmail@domain.com';
        window.open('mailto:sourav.ahmed5654@gmail.com', '_blank');
        e.preventDefault();
    }}
>
    <h1>Email : sourav.ahmed5654@gmail.com</h1><span> hii</span>
</div> */