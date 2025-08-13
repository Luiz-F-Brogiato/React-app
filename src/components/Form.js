import { useState } from 'react'
function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        alert("Usuário Cadastrado")
        alert(name)
        alert(password)
    }


    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (

        <>
            <h1>
                Meu cadastro:
            </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">
                        Nome:
                    </label>
                    <input type="text"
                        name="name"
                        id="name"
                        placeholder="Digite o seu nome"
                        onChange={(e) => setName(e.target.value)}
                        />
            </div>
        <div>
            <label htmlFor="password">
                Senha
            </label>
            <input type="password"
             id="password"
              name="password" 
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
        </div>
        <div>
            <input type="submit" value="Cadastrar"></input>
        </div>
    </form >
    </>
)

}

export default Form