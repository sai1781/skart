
import CollectionItem from '../Collection-item/CollectionItem'
import './CollectionContainer.scss'



const CollectionContainer = ({title, items}) =>{
  
    return (
  
       <div className='mainCollection'>
        <h1>{title}</h1>
        <div className='collection'>
            {items.map(({id,...itemsProps})=>{
                return(
                <CollectionItem key={id}  {...itemsProps}  />
                )
            })}
        </div>
       </div>   
    )
}


export default CollectionContainer