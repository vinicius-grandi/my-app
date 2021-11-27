import Item from "./Item"

function List() {
    return (
        <>
        <ul>
            <Item marca='Volksvagen'/>
            <Item marca='Chevrolet' ano={1850}/>
            <Item marca='Volksvagen' ano={1778}/>
        </ul>
        </>
    )
}

export default List