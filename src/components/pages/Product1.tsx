
import Footer from "../Footer"
import Header from "../Header"
import ProductList from "../ProductList"


const ProductList1 =()=>{
    return(
        <div>
            <Header/> <br /> <br />
            <div className="text-center text-4xl font-bold text-red-500">Chào mừng đến với lớp Thầy Nhân !!! <br /> <br />
            Đây là trang Product <br /> <br />
            <hr /> 
            </div> <br /> <br />
            <ProductList/>
            <Footer/>
        </div>
    )
}
export default ProductList1