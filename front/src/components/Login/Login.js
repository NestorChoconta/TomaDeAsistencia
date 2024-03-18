import React, { useState } from 'react';
import '../../styles/Login.css'; // Asegúrate de tener tu archivo CSS en el mismo directorio

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Bienvenido!!</h2>
        <p>Por favor, inicia sesión para continuar</p>
      </div>
      <form className="login-form">
        <div className="form-control">
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" placeholder="Correo electrónico" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Contraseña:</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Contraseña"
              required
            />
            <span className="toggle-password" onClick={togglePassword}></span>
          </div>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
