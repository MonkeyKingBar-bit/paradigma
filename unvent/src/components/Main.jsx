import styles from '../style/layout/Main.module.scss';
import License from "./License";
import Bullet from "./Bullet";
import Calculate from "./Calculate";

const Main = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <p>
                    <strong>Монтаж дымоходов из нержавеющей стали </strong>
                    для частных домов и предприятий
                </p>
            </div>
            <Bullet />
            <section className={styles.calcLicense}>
                <Calculate />
                <License active={props.active} setActive={props.setActive}/>
            </section>
        </div>
    )
}

export default Main;