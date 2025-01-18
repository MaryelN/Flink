import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ...
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placehold="Email" className="loginInput"/>
            <input placehold="Password" className="loginInput"/>
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">Create a new account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
