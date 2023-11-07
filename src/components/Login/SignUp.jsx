import { Button } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState();
    const [pswd, setPswd] = useState();
    const [emailValid, setEmailValid] = useState('');
    const [pswdValid, setPswdValid] = useState('');

    const eValid = useRef();
    const pValid = useRef();

    const navigate = useNavigate();

    const navFun = () => {
        if (eValid.current.value === "hamza" && pValid.current.value === "hamza") {
            navigate('/main')
        } else {
            console.log('Wrong')
        }
    }

    const onSubmitHandler = () => {
        if (email === "hamza") {
            setEmailValid(true)
        } else {
            setEmailValid(false)
        } if (pswd === "hamza") {
            setPswdValid(true)
        } else {
            setPswdValid(false)
        }
        navFun();
    };

    return (
        <div className='container mx-auto'>

            <div>
                <h1 className='text-4xl text-bgBlue font-bold p-5'>TECHHRMS</h1>
            </div>
            <div className='bg-white flex items-center justify-center h-screen -mt-16'>
                <div className='w-[350px] h-[400px] shadow-xl p-5'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-3xl text-bgBlue font-semibold'>Sign in</h1>
                        <p className='text-sm'>Stay updated on current affairs in org.</p>
                    </div>
                    <form className=' flex flex-col gap-5 mt-7 '>

                        <input ref={eValid} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email' type='email' className={`w-full p-3 rounded-xl border  focus:border-gray-400 focus:outline-none focus:ring-2 ${emailValid === false ? 'border-red-400' : 'border-gray-600'}`} />

                        <p className={` ${emailValid === false ? 'flex' : 'hidden'} -mt-4 text-red-400`}>Wrong Email!</p>

                        <input ref={pValid} onChange={(e) => { setPswd(e.target.value) }} placeholder='Password' type='password' className={` ${pswdValid === false ? 'border-red-400' : 'border-gray-600'} w-full p-3 rounded-xl border focus:border-gray-400 focus:outline-none focus:ring-2`} />

                        <p className={` ${pswdValid === false ? 'flex' : 'hidden'} -mt-4 text-red-400`}>Wrong Password!</p>

                        <p className=' text-bgBlue font-semibold'>Forgot password?</p>

                        <Button onClick={onSubmitHandler} className='bg-bgBlue '>Sign in</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SignUp