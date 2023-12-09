import Footer from "../Footer"
import Header from "../Header"
import Login1 from "../Login1"


const LoginForm =()=>{
    return(
        <div>
            <Header/> <br /> <br />
            <div className="text-center text-4xl font-bold">Chào mừng đến với lớp Thầy Nhân !!! <br /> <br />
            Đây là trang Login
            </div> <br /> <br />
            <Login1/>
            <Footer/>
        </div>
    )
}
export default LoginForm 