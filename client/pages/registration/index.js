import { useState } from "react";
import MainLayouts from "../../components/layouts/MainLayouts";

const Registration = () => {
    const [active, setActive] = useState(false);
    const toggle = () => {
        active ? setActive(false) : setActive(true)
    }
    return (
        <MainLayouts>
            <div className="registration">
                <div className={`container ${active ? 'active' : ''}`} data-active="registration" id="container">
                    <div className="form-wrapper sign-up-container">
                        <form action="#">
                            <h2>Create Account</h2>
                            <div className="social-area">
                                <a href="#" className="social">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#" className="social">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                                <a href="#" className="social">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" name="user_name" id="user_name" placeholder="Name" />
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                name="user_password"
                                id="user_password"
                                placeholder="Password"
                            />
                            <a href="#" className="btn btn--primary">
                                Sign Up
                            </a>
                        </form>
                    </div>
                    <div className="form-wrapper sign-in-container">
                        <form action="#">
                            <h2>Sign in</h2>
                            <div className="social-area">
                                <a href="#" className="social">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#" className="social">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                                <a href="#" className="social">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                            <span>or use your account</span>
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                name="user_password"
                                id="user_password"
                                placeholder="Password"
                            />
                            <a href="#" className="link-area">
                                Forgot your password?
                            </a>
                            <a href="#" className="btn btn--primary">
                                Sign In
                            </a>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h2>Welcome Back!</h2>
                                <p>To keep connected with us please login with your personal info</p>
                                <a href="#" className="btn btn--primary ghost" 
                                    onClick={(e) => {
                                        e.preventDefault()
                                        toggle()
                                    }}>
                                    Sign In
                                </a>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h2>Hello, Friend!</h2>
                                <p>Enter your personal details and start journey with us</p>
                                <a href="#" className="btn btn--primary ghost" 
                                    onClick={(e) => {
                                        e.preventDefault()
                                        toggle()
                                    }}>
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayouts>
    )
}

export default Registration;