import React from 'react';

const List = (props) => {


  const paddyArray = Object.keys(props.menu.patty).map((ing,i) =>{
    let curCost = Object.values(props.menu.patty)[i];
    return(
      <div className='ing' key={i} onClick={()=>{props.addOrder({ing: ing, coste: curCost})}}>
      <h2>{ing}</h2>
        <img width='150px' src={require('../img/'+ing+'.png')} alt='' />
        <p>€{curCost}</p>
      </div>
    )
  })

  const topingsArray = Object.keys(props.menu.topings).map((ing,i) =>{
    let curCost = Object.values(props.menu.topings)[i];
    return(
      <div className='ing' key={i} onClick={()=>{props.addOrder({ing: ing, coste: curCost})}}>
      <h2>{ing}</h2>
        <img width='150px' src={require('../img/'+ing+'.png')} alt='' />
        <p>€{curCost}</p>
      </div>
    )
  })

  return(
    <div>
      <div id='list'>
      <h2>paddy's</h2>
        <div className='ingBlock'>
          {paddyArray}
        </div>
        <h2>toppings</h2>
        <div className='ingBlock'>
          {topingsArray}
        </div>
      </div>
    </div>
  )

}

export default List;
