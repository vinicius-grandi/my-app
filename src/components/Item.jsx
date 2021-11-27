import PropTypes from 'prop-types'

function Item({marca, ano}) {
    return (
    <>
    <li>{marca} : {ano}</li>
    </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano: PropTypes.number
}

Item.defaultProps = {
    marca: 'Insira uma marca',
    ano: 1000
}

export default Item