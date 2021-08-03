import './App.scss';
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main";
import {useState} from "react";
import BurgerMenu from "./components/Navbar/burgerMenu";

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const items = [
        {value:"Калькулятор", href:'/calc'},
        {value:"Услуги", href:'/service'},
        {value:"Наши новости", href:'/news'},
        {value:"Отзывы", href:'/recall'},
        {value:"Консультация", href:'/consult'},
        {value:"Преимущества", href:'/advantages'},
        {value:"Производство", href:'/product'},
        {value:"Вопрос-ответ", href:'/questions'},
        {value:"Контакты", href:'/contacts'},
    ];
  return (
    <div className="app">
        <div className="app-wrapper">
            <Header active={modalActive} setActive={setModalActive}/>
            <Navbar menuActive={menuActive} setMenuActive={setMenuActive}/>
            <div className="app-wrapper-content">
                <Main active={modalActive} setActive={setModalActive}/>
            </div>
            <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} items={items}/>
      </div>
    </div>
  );
}

export default App;
