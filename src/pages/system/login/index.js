import React, { useState } from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../../assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../services/api';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [ email, setEmail ]= useState('');
    const [ password, setPassword ]= useState('');
    const [state, setState] = React.useState({
        checkedA: true,
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const history = useHistory();

    async function loga(e) {
        e.preventDefault();

        try {
            const response = await api.post('login', {
                email: email,
                password: password
            });
            
            localStorage.setItem('userId', response.data[0].id_user);
            localStorage.setItem('userName', response.data[0].full_name);
            localStorage.setItem('userType', response.data[0].type_user);
            localStorage.setItem('userPhoto', response.data[0].photo);            
            toast.success('Logado com sucesso');
           history.push('/dashboard');
        } catch {            
            toast.error('E-mail ou senha incorretos');
        }
    }

    return(
        <div className="logon-container p-4 mt-4">     
            <ToastContainer 
                autoClose={5000}
            />       
             <Link to="/" className="mt-4">
                <img src={logoImg} alt="Heroes" className="AngeluzImg mt-4"/>
             </Link>
             <div className="container-form">
                <section className="form">
                    <h1>Login</h1>
                    <div className="btn-logins">
                        <GoogleLogin
                            clientId=""
                            buttonText="Entrar com o Gmail"
                            cookiePolicy={'single_host_origin'}
                        />
                        <FacebookLogin
                            appId="1088597931155576"
                            textButton="Entrar com o Facebook"
                            cssClass="btn-face"
                            icon="fa-facebook"
                        />
                    </div>
                    <form>
                        <input placeholder="Seu E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                        <input placeholder="Sua Senha"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                        <div className="btn-logins">
                            <FormControlLabel
                                control={<Checkbox checked={state.checkedA} 
                                onChange={handleChange} 
                                name="checkedA" />}
                                label="Lembrar Senha"
                                className="checkItem"
                            />
                            <Link className="back-link" to="/register">Esqueceu a Senha?</Link>
                        </div>
                        <button className="button" type="submit" onClick={loga}>Login</button>
                        <Link className="back-link" to="/tipo-de-cadastro">
                            <FiLogIn size={16} color="#ba151c"/>
                           Cadastre-se
                        </Link>
                    </form>
                </section>
            </div>
            </div>
    )
}

export default Login;