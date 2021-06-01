import styles from "../style/components/bullet.module.scss";
import form from "../assets/icons/form.png";

const Bullet = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <img className={styles.firstImg} src={form} alt="form"/>
                <div className={styles.contentText}>
                    <p className={styles.contentBoldBig}>15</p>
                    <p><strong>лет устанавливаем дымоходы</strong> для частных лиц и организаций</p>
                </div>
            </div>
            <div className={styles.item}>
                <img src={form} alt="form"/>
                <div className={styles.content}>

                    <div className={styles.contentText}>
                        <p><strong>Бесплатный выезд инженера</strong> в пределах 30 км. от Киева</p>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <img src={form} alt="form"/>
                <div className={styles.content}>
                    <div className={styles.contentText}>
                        <p><strong>Монтаж под ключ от 1 дня,</strong> в наличии все разрешительные документ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bullet;