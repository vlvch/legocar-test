import { memo } from "react";
import Layout from "../layout";
import './style.css';
import logo from 'src/img/header-logo.png';
import map from 'src/img/map.png';
import tg from 'src/img/tg.png'
import time from 'src/img/time.png'
import icon from 'src/img/lines-button.png'

function Header() {


  return (
    <>
      <Layout className={'Layout save'} style={{ borderBottom: 1 + 'px' + ' solid' + ' #CECECE' }}>
        <div className="Header">
          <img className="Header-logo" src={logo} />
          <ul className="Header-nav">
            <li>Автомобили в наличии</li>
            <li>Спецпредложения</li>
            <li>Продать авто</li>
            <li>Сервис</li>
            <li>Контакты</li>
          </ul>
          <button className="Header-button"><span>Заказать звонок</span></button>
          <img className="Header-icon" src={icon} />
        </div>
      </Layout>
      <Layout className={'Layout hide'} style={{ boxShadow: `0 4px 6px 0 rgba(0, 0, 0, .15)` }}>
        <div className="Header">
          <div className="Header-item">
            <img src={map} />
            <span>Олимпийский просп., 5, стр. 1, Москва</span>
          </div>
          <div className="Header-item">
            <img src={tg} />
            <span>Проложить маршрут</span>
          </div>
          <div className="Header-item time">
            <img src={time} />
            <span>9:00 - 21:00 (ежедневно)</span>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default memo(Header);
