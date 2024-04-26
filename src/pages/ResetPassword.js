import React, { useState } from 'react';

const ResetPassword = () => {
    const Resetemail = sessionStorage.getItem('resetPasswordEmail');

    const [formData, setFormData] = useState({
        email: Resetemail || "",
        otp: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        otpError: '',
        newPasswordError: '',
        confirmPasswordError: '',
        formError: '',
    });

    const [message, setMessage] = useState('');

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'newPassword') {
            if (value.length < 6) {
                setErrors({
                    ...errors,
                    newPasswordError: 'Password must be at least 6 characters long',
                });
            } else {
                setErrors({
                    ...errors,
                    newPasswordError: '',
                });
            }
        } else if (name === 'confirmPassword') {
            if (value !== formData.newPassword) {
                setErrors({
                    ...errors,
                    confirmPasswordError: 'Passwords do not match',
                });
            } else {
                setErrors({
                    ...errors,
                    confirmPasswordError: '',
                });
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { otp, newPassword, confirmPassword } = formData;

        if (!otp || !newPassword || !confirmPassword) {
            setErrors({
                ...errors,
                formError: 'All fields are required',
            });
            return;
        }

        if (newPassword.length < 6) {
            setErrors({
                ...errors,
                formError: 'Password must be at least 6 characters long',
            });
            return;
        }

        // Here you would typically send a request to your backend to reset the password
        // For the sake of this example, let's just show a message
        setMessage('Password reset successfully');
        setFormData({
            otp: '',
            newPassword: '',
            confirmPassword: '',
        });
        setErrors({
            otpError: '',
            newPasswordError: '',
            confirmPasswordError: '',
            formError: '',
        });
    };

    const togglePasswordVisibility = (field) => {
        if (field === 'newPassword') {
            setShowNewPassword(!showNewPassword);
        } else if (field === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Reset Password</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="otp">Enter OTP:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="otp"
                                        name="otp"
                                        value={formData.otp}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newPassword">Enter New Password:</label>
                                    <div className="input-group">
                                        <input
                                            type={showNewPassword ? 'text' : 'password'}
                                            className="form-control"
                                            id="newPassword"
                                            name="newPassword"
                                            value={formData.newPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={() => togglePasswordVisibility('newPassword')}
                                            >
                                                {showNewPassword ? 'Hide' : 'Show'}
                                            </button>
                                        </div>
                                    </div>
                                    {errors.newPasswordError && <p className="text-danger">{errors.newPasswordError}</p>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm New Password:</label>
                                    <div className="input-group">
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            className="form-control"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={() => togglePasswordVisibility('confirmPassword')}
                                            >
                                                {showConfirmPassword ? 'Hide' : 'Show'}
                                            </button>
                                        </div>
                                    </div>
                                    {errors.confirmPasswordError && <p className="text-danger">{errors.confirmPasswordError}</p>}
                                </div>
                                {errors.formError && <p className="text-danger">{errors.formError}</p>}
                                <button type="submit" className="btn btn-primary">Reset Password</button>
                            </form>
                            {message && <p className="mt-3 text-success">{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
