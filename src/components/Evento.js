import Button from "./evento/Button";

function Evento(){

    function meuEvento(){
        alert(`Ativando o primeiro evento`)
    }

    function segundoEvento() {
        alert("Ativando o segundo evento")
    }

return(
    <>
    <p>
        Clique para disparar um evento
        <Button text="Primeiro Evento"/>
        <Button event={meuEvento} text="Primeiro evento"/>
        <Button event={segundoEvento} text="Segundo evento"/>
            Ativar!
       {/*  <button onClick={meuEvento}> 
        </button> */}
        {/* Não coloque () */}
    </p>
    </>
)

}

export default Evento
