import './Users.scss';

const register = () => {
  return (
    <div className="container">
      <div className="container_fold">
        <div className="container_wrapper">
          <img src='images/n_logo.png' className="img_logo" alt="logo"/>
          <h3>USER REGISTRATION</h3>
          <div>
            <form>
              <div className="input-container">
                <label for="name">Name</label>
                <input type="text" placeholder='Enter Full Name' className="form_input" name="name" />
              </div>
              <div className="input-container">
                <label for="email">Email</label>
                <input type="email" placeholder='abc@abc.com' className="form_input" name="email" />
              </div>
              <div className="input-container">
                <label for="password">Password</label>
                <input type="password" placeholder="password" className="form_input" name="password"/>
              </div>
              <div className="input-container">
                <label for="password">Confirm Password</label>
                <input type="password" placeholder="confirm password" className="form_input" name="confirm_password"/>
              </div>
              <div className="input-container">
                <button type="submit" className="input-container_btn-login">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default register;