import BodyIndex from "../Body"
import Footer from "../Footer"
import SimpleForm from "../Form"
import Header from "../Header"
import ProductList from "../ProductList"
import Slide from "../Slide"
import WhatOffer from "../WhatWeOffer"




const HomePage=() =>{
    return(
        <div>
            <Header/>
            <Slide/> <br /> <br />
            <BodyIndex/> <br /> <br />
            <WhatOffer/> <br /> <br />
            <ProductList/> <br /> <br />
            <SimpleForm/>
            <Footer/>
        </div>
    )
}
export default HomePage