import { memo } from "react";
import './style.css';
import Card from "../card";
import Layout from "../layout";
import first from 'src/img/1.png';
import second from 'src/img/2.png';
import third from 'src/img/3.png';
import fourth from 'src/img/4.png';
import fifth from 'src/img/5.png';
import sixth from 'src/img/6.png';
import seventh from 'src/img/7.png';

function Main() {
  return (
    <Layout className={'Layout'}>
      <div className="Main">
        <h2>Теперь услуги дилерского центра Вы можете можете получить онлайн!</h2>
        <div className="Main-cards">
          <Card
            title={'Диагностика автомобиля перед покупкой'}
            text={'Расскажем обо всех скрытых дефектах автомобиля с пробегом'}
            button={'Записаться'}>
            <img src={first}></img>
          </Card>
          <div className="Main-cards-flex">
            <Card
              title={'Онлайн показ автомобиля по видеосвязи'}
              text={'Проведем онлайн-показ интересующего автомобиля в удобное для Вас время'}
              button={'Оставить заявку'}>
              <picture> 
                <source media="(min-width:1199px)" srcSet={fifth} />
                <img className="second" src={second} />
              </picture>
            </Card>
            <Card
              title={'Онлайн бронирование'}
              text={'Забронируйте понравившийся автомобиль без визита в дилерский центр'}
              button={'Забронировать'}>
              <picture> 
                <source media="(min-width:1199px)" srcSet={seventh} />
                <img className="third" src={third} />
              </picture>
            </Card>
          </div>
          <Card
            title={'Онлайн оценка автомобиля с пробегом'}
            text={'Узнайте предварительную стоимость автомобиля за 1 мин, указав его параметры'}
            button={'Оценить'}>
            <picture> 
                <source media="(min-width:1199px)" srcSet={sixth} />
                <img className="fourth" src={fourth} />
            </picture>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default memo(Main);
