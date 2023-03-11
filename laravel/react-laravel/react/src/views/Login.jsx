import { Link } from "react-router-dom"

export default function Login() {
    const onSubmit = (ev) => {
        ev.preventDefault()
    } 
    return (
        <div className="login-signup-form animated fadeIndown">
            <div className="form">
                <form onSubmit={onSubmit} action="">
                    <div className="title logo">
                        <img className="text-center" src="https://i.ibb.co/ggYvy3h/dp-logo.png" alt="dp_logo" width="70px" height="70px" />
                    </div>
                    <br></br>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered? <Link to="/signup">Signup</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
