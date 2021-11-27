import Button from "./eventos/button"

function Event() {
    function mensagem() {
        alert(`Change da world, my final message good PRIMEIRO EVENTO POOOGGGGG`)
    }

    function mensagem2() {
        alert(`Change da world, my final message good SEGUNDO EVENTO POOOGGGGG`)
    }

    return (
        <div>
            <h2>Clique no botão abaixo</h2>
            <Button event={mensagem} text='Primeiro Evento'/>
            <Button event={mensagem2} text='Segundo Evento'/>
        </div>
    )
}

export default Event