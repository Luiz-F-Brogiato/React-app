import { useState} from "react";

function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
 
    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email)
    }
    function limpa(){
        userEmail("")
    }


return(
    <>
    <div>
        <h2>Cadastre seu e-mail</h2>
        <form>
         <input type="email" placeholder="Digite o seu e-mail" 
         onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit" onClick={enviarEmail}>
            Enviar e-mail
        </button>
            {userEmail && (
                <div>
                O e-mail do usuário é: {userEmail}
                </div>
            )}
            <button onClick={limpa}>
                Limpar e-mail
            </button>
        </form>
    </div>
    </>
)

}

export default Condicional