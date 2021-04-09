import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Jasim', 'Alamgir', 'Manna', 'Shuvo', 'Kanchan', ''];
  const products =[
    {name: 'Photoshop', price: '$900'},
    {name: 'Illustrator', price: '$500'},
    {name: 'CAD', price: '$200'},
    {name: 'PDF Reader', price: '$300'}
  ]

  const productNames = products.map(product => product.name);
  console.log(productNames);

  return (
    <div className="App">
       <Counter></Counter>
       <Person name="Borhan" job="Senior Kistiwala"></Person>
       <Person name="Amit Chowdhury" job="Executive Kistiwala"></Person>
       <Person name="Jewel" job="Junior Kistiwala"></Person>
       <Product name={products[0].name} price={products[0].price}></Product>
       <Product name={products[1].name} price={products[1].price}></Product>
       <Product name={products[2].name} price={products[2].price}></Product>
       <Users></Users>
       <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }

          {
            products.map(product =><li>{product.name}</li>)
          }
      </ul>
    </div>
  );
}

function Person(props){
  return (
    <div style={{border: '2px solid red', width: '400px'}}>
        <h1>My Name: {props.name}</h1>
        <h2>My Profession: {props.job}</h2>
    </div>
  )
}


function Product(props){
  const productStyle = {
      border : '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      height: '200px',
      width: '200px',
      float: 'left'
  }
  return (
    <div style={productStyle}>
        <h2>Name:{props.name}</h2>
        <h1>Price:{props.price}</h1>
        <button>Buy Now</button>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {setCount(count + 1);};
  
  return(
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  })
  return(
    <div>
      <h3>Dynamic User:{users.length}</h3>
        <ul>
            {
              users.map(user =><li>{user.phone}</li>)
            }
        </ul>
    </div>
  )
}
export default App;
