import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }
usernameChangeHandler=(event)=>{
this.setState(({username:event.target.value}))
    }
    passwordChangeHandler=(event)=>{
this.setState({password:event.target.value})
    }

    formSubmit=(event)=>{
      event.preventDefault();
      if(this.state.password!=""&&this.state.username!="")
      this.props.handleLogin(this.state.username,this.state.password);
    }
  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
