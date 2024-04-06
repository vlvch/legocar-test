import { memo } from "react";
import './style.css';
import back from 'src/img/background.png'

function Card({ title, text, button, children }) {
  return (
    <div className="Card" style={{ backgroundImage: 'url' + '(' + back + ')' }}>
      <span className="Card-title">{title}</span>
      <span className="Card-text">{text}</span>
      <div className="Card-button">
        <button>{button}</button>
      </div>
      {children}
    </div>
  )
}

export default memo(Card);