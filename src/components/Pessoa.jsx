
function Pessoa({nome, idade, profissao, sexo, imagem }) {
    return (
        <div>
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <p>Sexo: {sexo}</p>
        </div>
    )
}

export default Pessoa