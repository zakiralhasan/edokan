import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();

    const handlLoginForm = (data) => {

    }
    return (
        <div className='login-form-container'>
            <form onSubmit={handleSubmit(handlLoginForm)}>
                <div className='login-form-container__content'>
                    <div className='login-form-container__content__top-section'>
                        <h2>Customar Login</h2>
                        <p>If you have an account, sign in with your email address.</p>
                    </div>
                    <div className='login-form-container__content__bottom-section'>
                        <div>
                            <label>
                                <span className="">Email<sup className="starlabel">*</sup></span>
                            </label>
                            <input
                                type="email"
                                {...register("email")}
                                className=""
                                placeholder='Enter your email'
                                required
                            />
                        </div>
                        <div>
                            <label>
                                <span >Password<sup className="starlabel">*</sup></span>
                            </label>
                            <input
                                type="password"
                                {...register("password")}
                                className=""
                                placeholder='Enter your password'
                                required
                            />
                        </div>
                        <p className='bottom-section__forgot-pass'>Forgot Your Password?</p>
                        <button>SIGN IN</button>
                        <p className='bottom-section__create-account'>Don't have an account? <Link className='bottom-section__create-account__link' to="/register">Create an account</Link></p>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Login;