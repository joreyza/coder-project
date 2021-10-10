import './ItemListContainer.css';

const ItemListContainer = (props) =>{
    return (
<div >
    <p className='listaCont'>{props.greeting}</p>
</div>
    )
}

export default ItemListContainer