export const Item = ({id, description, price, image})=>{
    return(
        <div >
            <p>Id:{id}</p>
            <p>Descripcion:{description}</p>
            <p>Precio: {price}</p>
            <img src={image} />
        </div>
    )
}