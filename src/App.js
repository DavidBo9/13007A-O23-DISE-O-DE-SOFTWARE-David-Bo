import logo from './logo.svg';
import './App.css';

let session = true

const amigos = ['Diego', 'Victor', 'Naomi', 'Leon']

function Header({title, color}) {
  // if(title){
  //   return <h1 style={{color:color}}>{title}</h1>
  // }else{
  //   return <h1>No hay nada tilin</h1>
  // }
  // // console.log(title)
  // return <h1 style={{color:color}}>{title}</h1>
  return <h1 style={{color: color ? color : 'white'}}>{title ? title : 'No hay nada'}</h1>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenido a JSX HOLAAAAAA</h1>
        <Header title="Hola tilin" color="green"/>
        <Header title="Adios" color="purple"/>
        <Header/>
      </header>
      {session === true ? 
        <>
        <Header title = 'bienvenido' color = 'red'/>
        <p>Genial!</p>
        <ul>
          {amigos.map((amigo, i) => {
            return <li key={i}>{amigo}</li>
          })}
        </ul>
        </>
        : 
        <p>No has iniciado sesión...</p>
      }
    </div>
  );
}

// Crear componentes de amigo y amigos que es el encargado de tener toda la lista (el item)
export default App;

