
import Item from './Item'

function List() {
    return(
        <>
        <h3>
            Minha lista

        </h3>
        <ul>
            <Item marca="Ferrari" lancamento={1985}/>
            <Item marca="Fiat" lancamento={1964}/>
            <Item marca="Renault" />
            <Item marca="Chevrolet" lancamento={"1955"} />
        </ul>
        </>
    )
}

export default List