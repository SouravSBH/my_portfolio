import React, { useRef } from 'react'
import style from './Projects.module.css'

export default function Projects() {

    const gallery = useRef()

    const onMouseMoveFunc = (e) => {
        // console.log(e.clientX, e.clientY)
        const mouseX = e.clientX,
            mouseY = e.clientY;
        const xDecimal = mouseX / window.innerWidth,
            yDecimal = mouseY / window.innerHeight;

        const maxX = gallery.current.offsetWidth - window.innerWidth,
            maxY = gallery.current.offsetHeight - window.innerHeight;

        const panX = maxX * xDecimal * -1,
            panY = maxY * yDecimal * -1;

        gallery.current.animate({
            transform: `translate(${panX}px, ${panY}px)`
        }, {
            duration: 4000,
            fill: "forwards",
            easing: "ease"
        })
    }



    return (
        <div className={`${style.body}`} id="projects" >
            <div className={`${style.gallery}`} ref={gallery}
                onTouchMove={(event) => onMouseMoveFunc(event.touches[0])}
                onMouseMove={(event) => {
                    onMouseMoveFunc(event);
                }}>
                {/* Hall management */}
                <div className={`${style.tile} ${style.hall1}`} onClick={() => {
                    window.open("https://sourav9063.github.io/hall_management_rf/", '_blank')
                }} >
                    <img src="https://user-images.githubusercontent.com/53114581/202853827-47a44716-f0b2-4c0c-b831-5b651e6c8688.jpg" />
                </div>
                {/* uBook */}
                <div className={`${style.tile} ${style.uBook1}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/uBookSharing", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/118112856-61972c00-b407-11eb-8004-1f516bbf91f4.png" />
                </div>
                {/* obstacle */}
                <div className={`${style.tile} ${style.obstacle1}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/obstacles_detection", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/201062121-35f042c7-a4e4-4fe6-9100-8a0ba1ec8b8f.jpg" />
                </div>
                <div className={style.tile}>
                    <img src="https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70" />
                </div>

                {/* ftp */}
                <div className={`${style.tile} ${style.ftp}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/ftp_searcher", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/190019523-8446eb43-4751-446c-8505-547fe58f3ff6.jpg" />

                </div>
                {/* hungry */}
                <div className={`${style.tile} ${style.hungry}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/Hungry-Camper-scripts", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/148637656-447cdf3b-5267-4e43-99aa-7fb7237184b9.png" />
                </div>
                {/* blog */}
                <div className={`${style.tile} ${style.blog}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/Blog-CRUD-by-Nodejs", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/202858064-3a594637-0e01-4142-a17b-211b5866d448.jpg" />
                </div>
                {/* ball */}
                <div className={`${style.tile} ${style.touch}`} onClick={() => {
                    window.open("https://sourav9063.github.io/Touch-The-Ball/", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/202858785-0711683e-262e-47ac-9822-f5383d9440de.jpg" />
                </div>
                <div className={style.tile}>
                    <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70" />
                </div>
                {/* uBook */}
                <div className={`${style.tile} ${style.uBook2}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/uBookSharing", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/118114615-a91eb780-b409-11eb-8f46-851c73e3d8fd.png" />
                </div>
                {/* uBook */}
                <div className={`${style.tile} ${style.uBook3}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/uBookSharing", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/118113292-ebdf9000-b407-11eb-9a5d-d1db4f23ce4d.png" />
                </div>
                <div className={`${style.tile} ${style.hall2}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/hall_management_rf", '_blank')
                }} >
                    <img src="https://user-images.githubusercontent.com/53114581/202853980-62389a23-3935-4666-9a00-8a5824fb4151.jpg" />
                </div>
                <div className={`${style.tile} ${style.obstacle2}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/obstacles_detection", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/201062149-c11e154a-5f92-45c1-bf19-c868e4d543a9.jpg" />
                </div>

                <div className={`${style.tile} ${style.hungry1}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/Hungry-Camper-scripts", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/148637660-776055e8-1fc3-4f40-84f8-3fdc2cde4e65.png" />
                </div>
                <div className={`${style.tile} ${style.hungry2}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/Hungry-Camper-scripts", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/148637665-3e0ccf21-cb50-4c7d-99b3-51d9947b8de3.png" />
                </div>

                <div className={`${style.tile} ${style.blog1}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/Blog-CRUD-by-Nodejs", '_blank')
                }}>
                    <img src="https://user-images.githubusercontent.com/53114581/202858172-af9b10d7-1c8f-4e56-857b-86be59085c47.jpg" />
                </div>



                <div className={`${style.name}`}>Projects</div>
            </div >
        </div>

    )
}