import React from 'react';
import './BurgerComponent.css';

const BurgerComponent: React.FC<{handleClick: (e: any) => void, open: boolean}> = ({handleClick, open}) => {

  return (
    <div className={"BurgerComponent flex-cols" + " " + (open ? '' : 'x-menu')} onClick={handleClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}


export default BurgerComponent;
