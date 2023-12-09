type Iproduct = {
    name: string;
    price: number;
    promoPrice: number
} 

const SingleProduct = ({name, price, promoPrice=0}: Iproduct) => {
  return (
    <div className="item">
        
        <h3 className="py-[20px] font-bold">{name}</h3>
        <div>
            {
                promoPrice > 0 ? (
                    <div>
                        <strong className="text-red-500">{promoPrice}</strong> 
                        <del className="text-gray-500">{price}</del>
                    </div>
                )
                : (
                    <strong>{price}</strong>
                )
            }
        </div>
    </div>
  )
}

export default SingleProduct