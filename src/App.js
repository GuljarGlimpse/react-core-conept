import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Shakib', 'Jafor', 'salman shah', 'Bappi', 'Guljar', 'Shahrukh', 'sabbir']
  const products = [{name: 'Mobile', price: '$999'},
  {name: 'I Phone', price: '$1299'},
  {name: 'Laptop', price: '$180'},
  {name: 'Watch', price: '$890'},
  {name: 'Battery', price: '$90'},
]

  var person = {
    name: 'Dr. Guljar ahmed',
    job: 'Programmer'
  }
  var person2 = {
    name: 'Picci mia',
    job: 'Peramoy'
  }
  var style= {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={style}>Our CEO {person.name + ' ' + person.job}</h1>
        <h2 style={{backgroundColor: 'green'}}>My pagli {person2.name + ' ' + person2.job}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(products => <li>{products.name}</li>)
          }
          {
            products.map(products => <li>{products.price}</li>)
          }
        </ul>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <About></About>
        <About></About>
        <About></About>
        <About></About>
        <About></About>
        <Player name="Rubel nayok" food="fucka" nayika="Mousumi"></Player>
        <Player name="Jashim" nayika="shabana" food="alur borta"></Player>
        <Player name="Guljar" nayika="nai" food="alur borta"></Player>
        <Player name={nayoks[0]}  nayika="shabnur" food="purnima"></Player>
        <Great name="Guljar Khan" profession="Programmer"></Great>
        <Great name="Sabbir ahmed" profession="Grapics Designer"></Great>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}
//state declare
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {setCount(count + 1)};
  const handleDecrease = () => {setCount(count - 1)};
  const buttonStyle ={
    padding: '10px 20px',
    backgroundColor: 'red',
    fontSize: '20px',
    color: 'white',
    border: '1px solid white'
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button style={buttonStyle} onClick={handleIncrease}>Increase</button>
      <button style={buttonStyle} onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[]);

  return(
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}
function Person() {
  var style= {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return<div> 
  <h1 style={style}>Name: Patlu the great</h1>
  <h3 style={style}>Perar jonk</h3>
  </div>
}
function About() {
  var style= {
    color: 'orange',
    backgroundColor: 'white'
  }
  return <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolor.</p>
}

function Player(props) {
  const personStyle ={
    border: "10px solid gold",
     padding: "100px",
     color: "orange",
     backgroundColor: "white",
  }
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <p>Nayika :{props.nayika}</p>
    <p>Food: {props.food}</p>
  </div>
  )
}

function Great(props) {
  const greatStyle ={
    border: "10px solid green",
     padding: "100px",
     color: "black",
     backgroundColor: "white",
  }
  return (
    <div style={greatStyle}>
      <h1>My Name: {props.name} </h1>
      <p>My profession: {props.profession}</p>
    </div>
  )
}

function Product(props) {
  const ProductStyle ={
    border: '2px solid black',
    borderRadius: '5px',
    backgroundColor: 'gold',
    height: '300px',
    width: '300px',
    float: 'left',
    color: 'black'
    
  }
  const buttonStyle ={
    padding: '10px 20px',
    backgroundColor: 'red',
    fontSize: '20px',
    color: 'white',
    border: '1px solid white'
  }
const {name, price} = props.product;
  return(
    <div style={ProductStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button style={buttonStyle}>Buy now</button>
    </div>
  )
}
export default App;
