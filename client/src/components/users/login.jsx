import './Users.scss';
import * as FaIcons from 'react-icons/fa';

const login = () => {
  return (
    <div className="user_container">
      <div className="user_container_fold">
        <div className="user_container_wrapper">
          <img src='images/n_logo.png' className="img_logo" alt="logo"/>
          <h3>LOG IN</h3>
          <div>
            <form>
              <div className="user_input-container">
                <label for="email">Email</label>
                <input type="email" placeholder='abc@abc.com' className="user_form_input" name="email" />
              </div>
              <div className="user_input-container">
                <label for="email">Password</label>
                <input type="password" placeholder="password" className="user_form_input" name="password" />
              </div>
              <div className="user_input-container">
                <button type="submit" className="user_input-container_btn-login">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login;