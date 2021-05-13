import './Users.scss';
import * as FaIcons from 'react-icons/fa';

const login = () => {
  return (
    <div className="container">
      <div className="container_fold">
        <div className="container_wrapper">
          <img src='images/n_logo.png' className="img_logo" alt="logo"/>
          <h3>LOG IN</h3>
          <div>
            <form>
              <div className="input-container">
                <label for="email">Email</label>
                <input type="email" placeholder='abc@abc.com' className="form_input" name="email" />
              </div>
              <div className="input-container">
                <label for="email">Password</label>
                <input type="password" placeholder="password" className="form_input" name="password" />
              </div>
              <div className="input-container">
                <button type="submit" className="input-container_btn-login">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login;