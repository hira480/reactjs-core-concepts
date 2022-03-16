import logo from './logo.svg';
import './App.css';

const number = 1234;
const singers = [
  { name: 'Atif Aslam', job: 'singer' },
  { name: 'Eva B', job: 'Rap Singer' },
  { name: 'Rahat Fateh Ali', job: 'Gazal' },
  { name: 'Momina', job: 'Beparwa' }
];

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
  padding: '5px',
  borderRadius: '5px',
}

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaj'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="kopila"></Person> */}
      <h5>New Component</h5>
      <Friend movie="Singham" phone="01777890654"></Friend>
      <Friend movie="Dabang" phone='01999956789'></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props)
  return (
    <div className="container">
      <h3>Name: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
