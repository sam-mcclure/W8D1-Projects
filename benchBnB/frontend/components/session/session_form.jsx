import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return this.props.currentUser ? (<Redirect to='/' />) : (
      <div>
        <h1>{this.props.formType}</h1>
        {this.props.link}

        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type='text' value={this.state.username}
              onChange={this.update('username')} />
          </label>

          <label>Password:
            <input type='password' value={this.state.password}
              onChange={this.update('password')} />
          </label>

          <input type="submit" value={this.props.formType} />

        </form>
      </div>
    );

  }
}

export default withRouter(SessionForm);
