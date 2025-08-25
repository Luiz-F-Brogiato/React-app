/* import HelloWorld from './components/HelloWorld';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional'; 
import OutraLista from './components/OutraLista'; */
import {useState} from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  const [nome, setNome] = useState()
  /* const meusItens = ['React', 'Vue', 'Angular'] */

 /*  const nome = "Maria Eduarda";  */
/*   const name = 'Matheus';
  const nameUpper = name.toUpperCase()
  function sum(a, b) {
    return a + b
  }

  const url =  '/aprendendo-react/src/432133076_1.webp' */

  return (
    <div className="App">
     <h1>State Lift</h1>
     <SeuNome setNome={setNome}/>
     {nome}
     <Saudacao nome={nome}/>
   {/*  <Evento numero="1"/>
    <Form/>
    <Condicional/> */}
    {/* <OutraLista itens={meusItens}/> */}
    </div>
  );
}

export default App;
