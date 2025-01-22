import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
    };
  }

  // Function to handle input changes
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Function to handle form submission
  handleLogin = (e) => {
    e.preventDefault();
    const { username } = this.state;
    const correctUsername = 'student123';

    if (username === correctUsername) {
      this.setState({ message: 'Login successful!' });
    } else {
      this.setState({ message: 'Invalid username. Please try again.' });
    }
  };

  // Function to reset the form
  handleReset = () => {
    this.setState({ username: '', password: '', message: '' });
  };

  render() {
    const { username, password, message } = this.state;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <h2>Login Page</h2>
        <form onSubmit={this.handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="Enter username"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Enter password"
            required
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button type="submit">Login</button>
            <button type="button" onClick={this.handleReset}>Reset</button>
          </div>
        </form>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>Entered Username: {username}</p>
          {message && (
            <p style={{ color: message === 'Login successful!' ? 'green' : 'red' }}>
              {message}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default LoginPage;
