import CollectionContainer from "../../components/collectionContainer/CollectionContainer.js";
import ShopData from "./ShopPageData.js";



const ShopPage = () =>{
    // console.log(ShopData)

    return (
       <div className="shopPage">
        {ShopData?.map(({id,items, ...shopProps})=>{
            return(
                <CollectionContainer key={id} items={items} {...shopProps} />
            )
        })}
       </div>
    )
}


export default ShopPage;
