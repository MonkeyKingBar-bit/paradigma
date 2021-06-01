import map from "../assets/icons/map.svg";
import styles from '../style/components/openmap.module.scss';
import React from "react";

// const onClickMap = () => {
//     window.open("https://goo.gl/maps/V32fBxZ62Eb1Jmrm7");
// }

    const OpenMap = (props) => {
    return (
        <div className={styles.wrapper}>
            <button>
                <img src={map} alt="map"/>
                <div>
                    <p><strong> Украина, Киев, </strong> Васильковская 30</p>
                </div>
            </button>

        </div>
    )
}

export default OpenMap;
