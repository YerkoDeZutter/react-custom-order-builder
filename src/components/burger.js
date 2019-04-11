import React from 'react';


const Burger = (props) => {

  console.log(props.order.ings);

  const burIng = props.order.ings.map((ing,i) =>{
    const divStyle = {
      'zIndex': 100-i
    };
    return(
      <div style={divStyle} className={props.ingClass.join(' ')} key={i}>
        <img src={require('../img/'+ing.ing+'.png')} alt='' />
        <input type={props.ingClass.length === 1 ? 'button' : 'hidden'} onClick={()=>{props.remove(i)}} value='-' />
      </div>
    )
  })



  const burgerList = Object.values(props.allBurgers).map((ing,i) =>{

    const burIngI = props.allBurgers[i].ings.map((ing,j) =>{
      const divStyle = {
        'zIndex': 100-j,
      };
      return(
        <div style={divStyle} className='colapsSmall' key={j}>
          <img width='75px' src={require('../img/'+ing.ing+'.png')} alt='' />
        </div>
      )
    })

    return(
      <div className='burger' onClick={()=>{props.changeBurger(i)}} key={i}>
        <img width='75px' id='bun-top' src={require('../img/bun-top.png')} alt='' />
        {burIngI}
        <img width='75px' src={require('../img/bun-bot.png')} alt='' />
      </div>
    )

  })

  return(
    <div>
      <hr />

      <div id='allBurgers'>
        <h3>{'€'+props.totalCost}</h3>
        {burgerList}

        <button className='burger' onClick={props.newBurger} >+</button>

      </div>

      <div id='burgerInfo'>



      </div>

      <div id='burger'>
        <h3>{'€'+props.order.total}</h3>
        <button id={props.order.ings.length > 0 ? 'colapsB' : 'hidden'} onClick={props.colaps} >{props.ingClass.length === 1 ? 'colaps' : 'all ing.'}</button>
        <img id='bun-top' src={require('../img/bun-top.png')} alt='' />
        {burIng}
        <img id={props.ingClass.length === 1 ? '' : 'bun-bot'} src={require('../img/bun-bot.png')} alt='' />
        <button id={props.order.ings.length > 0 ? 'colapsB' : 'hidden'} onClick={props.colaps} >{props.ingClass.length === 1 ? 'colaps' : 'all ing.'}</button>
      </div>
    </div>
  )
}

export default Burger;
