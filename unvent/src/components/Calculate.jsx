import styles from '../style/components/calculate.module.scss';
import calculate from "../assets/icons/calc.png";

const Calculate = () => {
    return (
        <div>
            <div className={styles.text}>
                <p>Рассчитайте стоимость монтажа вашего дымохода за 1 минуту и <span>получите скидку 15%</span></p>
            </div>
            <button className={styles.calcButton}>
                <img src={calculate} alt="calculate"/>
                <p>Рассчитать стоимость монтажа и получить скидку</p>
            </button>
        </div>
    )
}

export default Calculate;