function Evento({numero}){

    function meuEvento(){
        alert(`Opa! Fui ativado!${numero}`)
    }

return(
    <>
    <p>
        Clique para disparar um evento
        <button onClick={meuEvento}> {/* Não coloque () */}
            Ativar!
        </button>
    </p>
    </>
)

}

export default Evento
