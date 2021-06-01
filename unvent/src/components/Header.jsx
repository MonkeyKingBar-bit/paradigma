import styles from '../style/layout/Header.module.scss';
import logo from '../assets/icons/headerlogo.svg';
import phone from '../assets/icons/phone.png';
import viber from '../assets/icons/viber1.png';
import telegram from '../assets/icons/telegram.png';
import whatsapp from '../assets/icons/whatsapp.png';
import OpenMap from "./OpenMap";

const Header = (props) => {
    return  (
        <div className={styles.wrapper}>
            <a href="##" className={styles.logo}>
                <img src={logo} alt="logo"/>
            </a>
            <div className={styles.item}>
                <div className={styles.prof}>
                    <p><strong>Профессиональный монтаж дымоходов</strong> любой сложности на территории Киева и Киевской обл</p>
                </div>
            </div>
            <div className={styles.item}>
                <OpenMap active={props.active} setActive={props.setActive}/>
            </div>
            <div className={styles.item}>
                    <button className={styles.consultButton}>Консультация инженера</button>
            </div>
            <div className={styles.contact}>
                    <a href="tel:+380672425878" className={styles.phone}>
                        <img src={phone} alt="phone"/>
                        <p>+38 067 242-58-78</p>
                    </a>
                    <div className={styles.messengers}>
                        <a href="##"><img src={viber} alt="viber"/></a>
                        <a href="##"><img src={telegram} alt="telegram"/></a>
                        <a href="##"><img src={whatsapp} alt="whatsapp"/></a>
                    </div>
            </div>
        </div>
    )
}

export default Header;
