import SingleProduct from "./Sale"
const Product=()=>{
    return(
        <div>
        <div className='text-4xl font-bold text-center my-[40px]'>Danh sách sản phẩm</div>
          <div className=''>
              <ul className='max-w-screen-xl mx-auto flex  justify-between'>
                  <li>
                    <div className='relative'>
                        <div className='absolute px-[10px] py-[2px] right-3 rounded-lg bg-orange-500 text-white'>-40%</div>
                        <img width={200} height={200} src="image/mayloc.jpg" alt="" />                       
                    </div>
                    <div className='w-52'>
                        <SingleProduct name="Máy Lọc Không Khí Xiaomi Mi Air Purifier Gen 4 Pro" promoPrice={1207500} price={1725000}/>
                    </div>
                  </li>
                  <li>
                      <div className='relative'>
                          <div className='absolute px-[10px] py-[2px] right-3 rounded-lg bg-orange-500 text-white'>-6%</div>
                          <img width={200} height={200} src="image/hutbui.jpg" alt="" />                       
                      </div>
                      <div className='w-48 relative'>
                          <SingleProduct name="Robot Hút Bụi Lau Nhà Xiaomi Roborock S7" promoPrice={6550000} price={0}/>
                      </div>
                  </li>
                  <li>
                    <div className='relative'>
                          <div className='absolute px-[10px] py-[2px] right-3 rounded-lg bg-orange-500 text-white'>-25%</div>
                          <img width={200} height={200} src="image/daysac.png" alt="" />                       
                      </div>
                      <div className='w-48'>
                          <SingleProduct name="Cáp chuyển đổi USB-C sang SD" promoPrice={790000} price={1290000}/>
                      </div>
                  </li>
                  <li>
                    <div className='relative'>
                        <div className='absolute px-[10px] py-[2px] right-3 rounded-lg bg-orange-500 text-white'>-6%</div>
                        <img width={200} height={200} src="image/capsac.png" alt="" />                       
                    </div>
                    <div className='w-48 '>
                        <SingleProduct name="Adapter sạc Apple Type C 20W" promoPrice={520000} price={0}/>
                    </div>
                  </li>
                </ul>
            </div>
        </div>
    )
}

export default Product