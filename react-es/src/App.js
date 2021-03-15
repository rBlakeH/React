import './App.css';
import buff from "./buff.JPG"

function Header(props){
  return(
    <header>
      <h1>{props.name}'s Houese</h1>
    </header>
  )
}

function Main(props){
  return(
    <section>
      <p>It's the {props.adjective} in town!</p>
      <img src={buff} height={200}/>
      <img src="https://github.com/rblakeh.png" height={200} alt="Blake riding a buffalo"/>
      <ul style={{textAlign: "left"}}>
        {props.items.map((item) => 
        <li key={item.id}>{item.title}</li>)}
      </ul>
    </section>
  )
}

function Footer(props){
  return(
    <footer>
<p>Copyright {props.year}</p>
    </footer>
  )
}

const items = [
  "Dirt Block",
  "Gold Ore",
  "Stone Pickaxe",
  "Iron Ore"
];

const itemObjects = items.map((item, i) => ({id: i, title: item}));
console.log(itemObjects);



function App() {
  return (
    <div className="App">
      <Header name="Blake"/>
      <Main adjective="Ballin" items = {itemObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
