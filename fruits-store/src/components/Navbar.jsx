import { NavLink,useNavigate } from "react-router-dom"
import { User,X } from 'lucide-react'
import {useRef,useState } from "react"
import { Login, Register } from "../api/Api"
import { toast } from "sonner"
import round from "../assets/images/round.jpg"
import { getRole, storeToken } from "../service/auth"

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const phoneRef = useRef('')
const navigate = useNavigate()

    const Linksdata = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Place-Order',
            path: '/location'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        }
        ]
    const handleLogin = async (e) => {
        e.preventDefault()
        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try {
            const response = await Login(credentials)
            const data = await JSON.stringify(response.data)
            if (response.status === 200) {
                const token = response.data.token
                // console.log(response.data.token)
                toast.success("Login Success")
                setShowLogin(false)
                storeToken(token)
                if (token) {
                    const role = getRole()
                    if (role === "ADMIN") {
                        //navigate to dashboard
                        navigate('/admin/dashboard')
                    } else if (role === "USER") {
                        //navigate to products
                        navigate('/')
                    }
                }
            } else {
                console.log("Login Error" + data)
            }

        } catch (error) {
            if (error.response && (error.response.status === 401 || error.response.status === 400)) {
                toast.warning(error.response.data.message)
            } else {
                toast.error("Server Error")
            }
        }

        console.log(credentials)
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const credentials = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value

        }
        try {
            const response = await Register(credentials)
            const data = await JSON.stringify(response.data)
            if (response.status === 200) {
                console.log("Signup Success" + data)
                toast.success("Signup Success")
                setShowRegister(false)
                setShowLogin(true)
            }
            else {
                toast.error("Error while signup")
            }

        } catch (error) {
            // console.error(error)
            if (error.response && (error.response.status === 409 || error.response && error.response.status === 400)) {
                toast.warning(error.response.data.message)
            } else {
                toast.error("Server Error")
            }
        }

        // console.log(credentials)
    }
    const switchAuth = () => {
        if (showLogin) {
            setShowLogin(false)
            setShowRegister(true)
        } else if (showRegister) {
            setShowLogin(true)
            setShowRegister(false)
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('token')
        Navigate('/')
      }
    return (
        <>
            <div className='w-screen h-14 shadow-lime-300 gap-2 bg-lime-500 shadow-md flex flex-row justify-center items-center'>
            <img className="h-[7vh] w-[45px] top-10 bottom-10 border-radius-360 rounded-full flex justify-center align-center  " src={round} alt='logo' />
                <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-white'>
                    Fresh Fruits
                </div>
                <div className='w-[50%] h-full flex justify-end items-center '>
                    <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
                        {Linksdata.map((link, index) => (
                            <NavLink to={link.path} key={index} className='h-[65%] w-30 hover:bg-white hover:text-lime-600 text-white flex justify-center items-center rounded-sm'>
                                {link.title}
                            </NavLink>
                        ))
                        }
                    </div>
                    <button className="h-9 w-9 flex justify-center items-center border-2  rounded-full hover:bg-white hover:border-lime-600 hover:text-lime-600 ml-4 shadow-md" onClick={() => { setShowLogin(!showLogin) }}>
                        <User className="h-6 w-6 text-white hover:text-lime-500" />
                    </button>
                </div>
            </div>

            {showLogin && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-[60%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-lime-600'>Login</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowLogin(!showLogin) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-6'
                             onSubmit={handleLogin}>
                                <input type="email" name="" id="email" placeholder='Email' ref={emailRef} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm' required />
                                <input  type="password" name="" id="password" placeholder='Password' ref={passwordRef} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm' required />
                                <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-lime-400 bg-lime-600 text-white rounded-sm outline-none">Login</button>
                            </form>
                            <div className="h-[10%] w-[80%] flex justify-center items-start">
                                <p className="cursor-pointer text-lime-500 hover:text-lime-600" 
                                onClick={switchAuth}>Register ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            {showRegister && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-[75%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-lime-500'>Register</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowRegister(!showRegister) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[100%] w-[80%] flex flex-col justify-center items-center gap-6'
                                onSubmit={handleRegister}>
                                <input  type="text" name="" id="name" placeholder='Name' ref={nameRef} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-600 rounded-sm' required />
                                <input type="email" name="" id="email" placeholder='Email' ref={emailRef} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-600 rounded-sm' required />
                                <input  type="password" name="" id="password" placeholder='Password'ref={passwordRef} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-600 rounded-sm' required />
                                <input  type="number" name="" id="phone" placeholder='Phone' ref={phoneRef} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-600 rounded-sm' required />
                                {/* <input  type="text" name="" id="role" placeholder='Role' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-600 rounded-sm' required /> */}
                                
                                <button type="submit" className="w-full h-[3rem] shadow-lg shadow-gray-400 hover:shadow-lime-600 bg-lime-600 text-white rounded-sm outline-none">Register</button>
                            </form>
                            <div className="h-[10%] w-[80%] flex justify-center items-start">
                                <p className="cursor-pointer text-purple-500 hover:text-purple-600" onClick={switchAuth}>Login ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

        </>
    )
}

export default Navbar


