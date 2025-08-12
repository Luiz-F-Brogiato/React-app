import HelloWorld from './components/HelloWorld';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'

function App() {
  const nome = "Maria Eduarda"; 
/*   const name = 'Matheus';
  const nameUpper = name.toUpperCase()
  function sum(a, b) {
    return a + b
  }

  const url =  '/aprendendo-react/src/432133076_1.webp' */

  return (
    <div className="App">
    { <h1>Testando Eventos</h1>
     /* 
      <p>Olá, {nameUpper}</p>
      <p>Soma: {2 + 2}</p>
      <p>Soma de função: {sum(50, 21)}</p>
      <img src={url} alt="Minha Imagen"/> */}
      <Frase/>
      <HelloWorld/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome="Maria"/>
      <SayMyName nome={nome}/>
      <Pessoa
      nome="Rodrigo"
      idade="28"
      profissão="Programador"
      foto="https://via.placeholder.com/150"
      />
      <List/>
    </div>
  );
}

export default App;
