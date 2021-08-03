import styles from '../../style/layout/Navbar.module.scss'

const Navbar = (props) => {
    return  (
        <div>
            <div className={styles.wrapper}>
                <div className="burgerBtn" onClick={() => {props.setMenuActive(!props.menuActive)}}>
                    <span/>
                </div>
                <div className={styles.contain}>
                    <a href="##">калькулятор</a>
                    <a href="##">услуги</a>
                    <a href="##">наши новости</a>
                    <a href="##">отзывы</a>
                    <a href="##">консультация</a>
                    <a href="##">преимущества</a>
                    <a href="##">производсво</a>
                    <a href="##">вопрос-ответ</a>
                    <a href="##">контакты</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
