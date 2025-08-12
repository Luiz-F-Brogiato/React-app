/* import HelloWorld from './components/HelloWorld';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List' */
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
 /*  const nome = "Maria Eduarda";  */
/*   const name = 'Matheus';
  const nameUpper = name.toUpperCase()
  function sum(a, b) {
    return a + b
  }

  const url =  '/aprendendo-react/src/432133076_1.webp' */

  return (
    <div className="App">
     <h1>Testando Eventos</h1>
    <Evento numero="1"/>
    <Evento numero="2"/>
    <Form/>
    </div>
  );
}

export default App;
