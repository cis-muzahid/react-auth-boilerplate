import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        // Here you would typically send a request to your backend to handle the forgot password functionality
        // For the sake of this example, let's just show a message
        sessionStorage.setItem('resetPasswordEmail', email);
        navigate('/reset-password')
        setMessage(`Instructions to reset password sent to ${email}`);
        setEmail('');
        setError('');
    };

    const isValidEmail = (email) => {
        // Basic email validation using regular expression
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <div className='container bg-light mt-5 p-4' style={{ width: "20%" }}>
            <h2 className='bg-secondary p-2'>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        className='form-control'
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <button className='btn btn-primary' type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPassword;
