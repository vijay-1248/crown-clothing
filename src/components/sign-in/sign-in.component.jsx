import React from 'react';


class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { name, value } = event.target;
        console.log(` ${name} : ${value}`)

        this.setState({ [name]: value });
    }
    render() {
        const { email, password } = this.state;
        return (
            <div className='signin'>
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input name='email' type='email' value={email} required onChange={this.handleChange} />
                    <label>email</label>
                    <input name='password' type='password' value={password} onChange={this.handleChange} required />
                    <label>password</label>
                    <input type='submit' value='submit form' />
                </form>
            </div>
        );
    }
}
export default Signin;