import { memo } from 'react';
import './style.css';

function Layout({children, style, className}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export default memo(Layout);