import styles from '../style/components/license.module.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, Zoom, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ticket1 from '../assets/images/cert1.png';
import ticket2 from '../assets/images/cert2.png';
import ticket3 from '../assets/images/cert3.png';
import React from 'react';
import Module from "./Modal/module";

SwiperCore.use([Navigation, Pagination, Scrollbar, Zoom, A11y]);

const License = (props) => {
    return (
            <div className={styles.wrapper}>
                <h1>Лицензии и сертификаты в наличии</h1>
                <Swiper
                    spaceBetween={-26}
                    slidesPerView={3}
                    navigation
                    //scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <img src={ticket1} alt="certificate" onClick={() => {props.setActive(true)}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ticket2} alt="certificate" onClick={() => {props.setActive(true)}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ticket3} alt="certificate" onClick={() => {props.setActive(true)}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ticket1} alt="certificate" onClick={() => {props.setActive(true)}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ticket2} alt="certificate" onClick={() => {props.setActive(true)}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ticket3} alt="certificate" onClick={() => {props.setActive(true)}}/>
                    </SwiperSlide>
                </Swiper>
                <Module active={props.active} setActive={props.setActive}>
                    <img src={ticket1} alt="certificate" className={styles.openImg}/>
                </Module>
        </div>
    );
};

export default  License;