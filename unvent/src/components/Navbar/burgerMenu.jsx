import styles from '../../style/components/burgerMenu.module.scss';

const BurgerMenu = ({menuActive, setMenuActive, items}) => {
    return  (
        <div className={menuActive ? "menu active" : "menu"} onClick={() => setMenuActive(false)}>
            <div className={styles.blur}/>
            <div className={styles.menu__content} onClick={(e => e.stopPropagation())}>
                <ul>
                    {items.map(item =>
                    <li>
                        <a href={item.href}>{item.value}</a>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu;
