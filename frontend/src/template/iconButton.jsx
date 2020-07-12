import React from 'react';
import If from './if';

export default (props) => {
  return (  
    <If test={!props.hide}>
      <button className={'btn btn-' + props.style} onClick={props.onClick}>
        <i className={'fa fa-' + props.icon}/>
      </button>
    </If>
  )
}