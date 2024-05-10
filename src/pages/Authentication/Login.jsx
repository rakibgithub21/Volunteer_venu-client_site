import { Link } from 'react-router-dom';
import gitbub from '../../assets/github.png';
import google from '../../assets/google.png';

const Login = () => {
    return (
        <div className=' flex my-10 justify-center items-center min-h-[calc(100vh-306px)]'>
            <div className='w-2/3 lg:w-3/6 mx-auto bg-slate-200 rounded-lg shadow-lg p-4'>

                <h3 className='text-2xl md:text-3xl font-bold font-roboto text-gray-600 '>Welcome Back!</h3>
                <p className='text-lg md:text-xl text-gray-500 font-raleway mt-1'>Please Login Here...</p>
                <div className='flex cursor-pointer bg-slate-300 items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
                    <div className='px-4 py-2'>

                        <img className='h-10 w-10' src={google} alt="" />
                    </div>

                    <span className='w-5/6 px-4 py-3 font-bold text-center'>
                        Login in with Google
                    </span>
                </div>
                <div className='flex cursor-pointer bg-gray-300 items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
                    <div className='px-4 py-2'>
                        <img className='h-10 w-10' src={gitbub} alt="" />
                    </div>

                    <span className='w-5/6 px-4 py-3 font-bold text-center'>
                        Login in with Github
                    </span>
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <span className='w-1/5 border-b border-slate-400  lg:w-1/4'></span>

                    <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                        or login with email
                    </div>

                    <span className='w-1/5 border-b border-slate-400 dark:border-gray-400 lg:w-1/4'></span>
                </div>
                <form>
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm md:text-lg font-medium text-gray-600 '
                            htmlFor='LoggingEmailAddress'
                        >
                            Email Address
                        </label>
                        <input
                            placeholder='Enter Your Email'
                            id='LoggingEmailAddress'
                            autoComplete='email'
                            name='email'
                            className='block w-full h-12 px-4 py-2 border-slate-300  text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                            type='email'
                        />
                    </div>

                    <div className='mt-4'>
                        <div className='flex justify-between'>
                            <label
                                className='block mb-2 text-sm md:text-lg font-medium text-gray-600 '
                                htmlFor='loggingPassword'
                            >
                                Password
                            </label>
                        </div>

                        <input
                            placeholder='Enter Your Password'
                            id='loggingPassword'
                            autoComplete='current-password'
                            name='password'
                            className='block w-full h-12 px-4 py-2 border-slate-300 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                            type='password'
                        />
                    </div>
                    <div className='mt-6'>
                        <button
                            type='submit'
                            className='w-full px-6 py-3 text-sm md:text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <div className='flex items-center justify-between mt-4'>
                    <span className='w-1/5 border-b border-slate-400  md:w-1/4'></span>

                    <Link
                        to='/register'
                        className='text-xs text-gray-500 uppercase  hover:underline'
                    >
                        New to here. Please Register
                    </Link>

                    <span className='w-1/5 border-b border-slate-400  md:w-1/4'></span>
                </div>
                

                

               
                
            </div>
            {/* <div className='md:col-span-1'>
                <img src={loginImage} alt="" />
            </div> */}
        </div>
    );
};

export default Login;






