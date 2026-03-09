import React, { useState } from 'react';

const LoginPage = () => {
    const [role, setRole] = useState('');

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login submission
        console.log(`Role selected: ${role}`);
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Role:
                    <select value={role} onChange={handleRoleChange}>
                        <option value="">--Select--</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;