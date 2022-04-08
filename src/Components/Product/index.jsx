import "./styles.css"

const Products = ({id, name, category, price, img, handleClick}) =>{

    return (
        <>
        <li className="produtoCarrosel">
            <img className="imgCarrossel" src={img} alt="" />
            <h1 className="tituloCarrosel">{name}</h1>
            <h3 className="subTituloCarrosel">{category}</h3>
            <span className="precoCarrosel">R$ {price}</span>
            <button className="buttonCarrosel" onClick={() => handleClick(id)}>Adicionar</button>
        </li>
        </>
    )

}

export default Products