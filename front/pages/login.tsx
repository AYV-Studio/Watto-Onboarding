import Sidebar from '../components/sidebar/index' ;
import {FaFacebookF,FaLinkedinIn,FaGoogle , FaRegEnvelope} from 'react-icons/fa';
import { MdLockOutline} from 'react-icons/md';
const LoginPage = () => (
  <Sidebar title="Signin Page" >
    <div className=" flex flex-col  items-center justify-centre min-h-screen py-2   px-20 text-center bg-gray-100">
   
    <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
    <div className="w-3/5 p-5">
        <div className="py-10">
            <h2 className='text-3xl font-bold text-violet-500 mb-2'>Sign in to Account</h2>
            <div className="border-2 w-10 border-violet-500 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                    <FaFacebookF className="text-sm"/>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                    <FaLinkedinIn className="text-sm"/>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                    <FaGoogle className="text-sm"/>
                </a>
                </div>{/* social logo */}
                <p className='text-gray-400 my-3'>or use your email account</p>
                <div className='flex flex-col items-center'>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'> 
                    <FaRegEnvelope className='text-gray-400 m-2'/>
                    <input type="email" name="email" placeholder="Email" className='bg-gray-100 outline-none text-sm flex-1'/>
                    </div>
                    <div className='bg-gray-100 w-64 p-2 flex items-center'> 
                    <MdLockOutline className='text-gray-400 m-2'/>
                    <input type="password" name="password" placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1'/>
                    </div>
                    <div className='flex justify-between w-64 mb-5'>
                        <label className='flex items-center text-xs'><input type="checkbox" name='remember'className='mr-1' />Remember me</label>
                        <a href='#' className='text-xs'> Forgot Password?</a>
                    </div>
                    <a href='#' className="border-2 border-violet text-violet-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-violet-500 hover:text-white">Sign Ip</a>
                </div>
        </div>
        </div>{/* for sign in section*/}
    <div className="w-2/5 bg-violet-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
        <h2 className="text-3xl font-bold mb-2">Hello,friend!</h2>
        <div className="border-2 w-10 border-white inline-block mb-2"></div>
        <p className="mb-10">Fill up personal information and start journey with us.</p>
        <a href='/signup' className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-violet-500">Sign Up</a>
    </div>{/* for register section*/}
    </div>
    </div>
  </Sidebar>
)

export default LoginPage