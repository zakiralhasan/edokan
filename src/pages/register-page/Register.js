import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const handlRegisterForm = (data) => {

    }
    return (
        <div className='register-form-container'>
            <form onSubmit={handleSubmit(handlRegisterForm)}>
                <div className='register-form-container__content'>
                    <div className='register-form-container__content__top-section'>
                        <h2>Create New Customer Account</h2>
                    </div>
                    <div className='register-form-container__content__bottom-section'>
                        <div className='bottom-section__name-section-container'>
                            <div style={{ flexGrow: "1" }}>
                                <label>
                                    <span className="">First Name<sup className="starlabel">*</sup></span>
                                </label>
                                <input
                                    type="text"
                                    {...register("firstName")}
                                    className=""
                                    placeholder='Enter your first name'
                                    required
                                />
                            </div>
                            <div style={{ flexGrow: "1" }}>
                                <label>
                                    <span className="">Last Name<sup className="starlabel">*</sup></span>
                                </label>
                                <input
                                    type="text"
                                    {...register("lastName")}
                                    className=""
                                    placeholder='Enter your last name'
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label>
                                <span className="">Mobile<sup className="starlabel">*</sup></span>
                            </label>
                            <input
                                type="number"
                                {...register("mobile")}
                                className=""
                                placeholder='Enter your mobile number'
                                required
                            />
                        </div>
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
                        <div className='bottom-section__password-section-container'>
                            <div style={{ flexGrow: "1" }}>
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
                            <div style={{ flexGrow: "1" }}>
                                <label>
                                    <span >Confirm Password<sup className="starlabel">*</sup></span>
                                </label>
                                <input
                                    type="password"
                                    {...register("confirmPassword")}
                                    className=""
                                    placeholder='Enter your confirm password'
                                    required
                                />
                            </div>
                        </div>
                        <button>CREAT AN ACCOUNT</button>
                        <p className='bottom-section__login-account'>Already have an account? <Link to="/login">Sign in</Link></p>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Register;