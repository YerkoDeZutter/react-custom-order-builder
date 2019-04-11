import React, { Component } from 'react';
import List from './components/list';
import Burger from './components/burger';

class App extends Component {

  state = {
    menu: {
      patty: {
        beef: 1.75,
        chicken: 2
      },
      topings: {
        tomato: 0.25,
        chees: 0.65,
        sla: 0.25,
        onion: 0.45,
        pickels: 0.45
      }
    },
    order: {
      burgers: [{ings:[],total:0}],
      total: 0
    },
    colaps: false,
    burger: 0
  }

  addOrder = (orderdObj) => {
    // console.log(this.state.order.ings.filter(value=>{return orderdObj.ing === value.ing}).length === 0);

    let newIngsList = [...this.state.order.burgers[this.state.burger].ings, orderdObj];

    let burgerList = this.state.order.burgers;

    burgerList[this.state.burger].ings = newIngsList;
    burgerList[this.state.burger].total = ((Math.round(burgerList[this.state.burger].total * 100)) + (Math.round(orderdObj.coste * 100)))/ 100;

    let newTotal = ((Math.round(this.state.order.total * 100)) + (Math.round(orderdObj.coste * 100)))/ 100

    this.setState({
      order: {
        burgers : burgerList,
        total: newTotal
      }
    })

  }



  remove = (i) => {

    // Math.round(num * 100) / 100

    // console.log((Math.round(this.state.order.total * 100) / 100) +' - '+ (Math.round(this.state.order.ings[i].coste * 100) / 100) + ' = ' + ((Math.round(this.state.order.total * 100)) - (Math.round(this.state.order.ings[i].coste * 100)))/ 100);

    let newTotal = ((Math.round(this.state.order.total * 100)) - (Math.round(this.state.order.burgers[this.state.burger].ings[i].coste * 100)))/ 100

    let burgerList = this.state.order.burgers;

    burgerList[this.state.burger].total = ((Math.round(burgerList[this.state.burger].total * 100)) - (Math.round(this.state.order.burgers[this.state.burger].ings[i].coste * 100)))/ 100;

    let newOrder = this.state.order.burgers[this.state.burger].ings;
    newOrder.splice(i, 1)

    burgerList[this.state.burger].ings = newOrder;

    this.setState({
      order:{
        burgers : burgerList,
        total: newTotal,
      }
    })
  }

  colaps = () => {
    this.setState({
      colaps: !this.state.colaps
    })
  }

  newBurger = () => {

    let newBurger = this.state.order.burgers;

    console.log(newBurger);

    newBurger.push({ings:[],total:0});

    this.setState({
      burgers: newBurger,
      burger: this.state.order.burgers.length - 1,
      colaps: false
    })
  }

  changeBurger = (i) => {
    this.setState({
      burger: i,
      colaps: false
    })
  }


  menuSize = Object.keys(this.state.menu).length;

  render() {
    let ingClass = ['orIng']
    if(this.state.colaps){
      ingClass.push('colaps')
    }
    return (
      <div className="App">

        <List menu={this.state.menu} addOrder={this.addOrder} />

        <Burger ingClass={ingClass} changeBurger={this.changeBurger} colaps={this.colaps} newBurger={this.newBurger} allBurgers={this.state.order.burgers} order={this.state.order.burgers[this.state.burger]} totalCost={this.state.order.total} remove={this.remove} />

      </div>
    );
  }
}

export default App;
