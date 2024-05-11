import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";


const Register = () => {
    const { createUser, updateUserProfile, setUser,setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const formRef = useRef(null);
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, photo, email, password } = data;
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Register Successfully')
                updateUserProfile(name, photo)
                setUser({ ...result?.user, photoURL: photo, displayName: name })
                formRef.current.reset();

            })

            .catch(error => {
                console.log(error.message);
                setError(error.message)
                setLoading(false)
            })
    }

    return (
        <div className='flex my-10 justify-center items-center min-h-[calc(100vh-306px)]'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-slate-200 rounded-lg shadow-lg  lg:max-w-4xl '>
                <div className='w-full px-6 py-8 md:px-8 '>


                    <p className='mt-3 text-3xl font-bold text-gray-600 '>
                        Get Your Free Account Now.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm md:text-lg font-medium text-gray-600 '
                                htmlFor='name'
                            >
                                Username
                            </label>
                            <input
                            required
                                {...register("name")}
                                id='name'
                                placeholder="Enter Your Name"
                                autoComplete='name'
                                name='name'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                           
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm md:text-lg font-medium text-gray-600 '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                            required
                                {...register("photo")}
                                id='photo'
                                placeholder="Enter Your Photo URL"
                                autoComplete='photo'
                                name='photo'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                           
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm md:text-lg font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                            required
                                {...register("email")}
                                placeholder="Enter Your Email Address"
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
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
                            required
                                {...register("password", { validate: {
                                        minLength: value => value.length >= 6,
                                        uppercase: value => /[A-Z]/.test(value),
                                        lowercase: value => /[a-z]/.test(value)
                                    }
                                })}
                                placeholder="Enter Your Password"
                                id='loggingPassword'
                                autoComplete='current-password'
                                name='password'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                            
                            {errors.password && errors.password.type === "minLength" && (
                                <p className="text-red-500">Password must be at least 6 characters long</p>
                            )}
                            {errors.password && errors.password.type === "uppercase" && (
                                <p className="text-red-500">Password must contain at least one capital letter</p>
                            )}
                            {errors.password && errors.password.type === "lowercase" && (
                                <p className="text-red-500">Password must contain at least one lowercase letter</p>
                            )}
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Register
                            </button>
                            {
                                error && <p className="text-red-500">{error}</p>
                            }
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or Login in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;