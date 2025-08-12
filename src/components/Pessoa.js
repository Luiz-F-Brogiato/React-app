function Pessoa({nome,idade,profissão, foto}) {
    return (
        <div>
            <img src={foto} alt={nome} srcSet=""/>
            <h2>Nome: {nome}</h2>
            <p>idade: {idade}</p>
            <p>Profissão: {profissão}</p>
        </div>
    )

}

export default Pessoa