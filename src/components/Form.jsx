import { useState } from "react"

function Form() {
    const [name, setName] = useState()

    function cadastro(e) {
        e.preventDefault()
        alert('Você foi cadastrado com sucesso ' + name)
    }
    return (
        <form onSubmit={cadastro}>
            <p>Nome: <input 
            type="text" 
            id="nome" 
            name="nome"
            onChange={e => setName(e.target.value)}
            /></p>
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default Form