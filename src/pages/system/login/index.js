import React, { useState } from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../../assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';
// import api from '../../../services/api';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Login = () => {
    const [ id, setId ]= useState('');
    const [ password, setPassword ]= useState('');
    const [state, setState] = React.useState({
        checkedA: true,
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const history = useHistory();

      const loga = () => {
        history.push('/dashboard');
      }
    
    // const history = useHistory('');

    // async function handleLogin(e) {
    //     e.preventDefault();

    //     try {
    //         const response = await api.post('sessions', { id });
    //         console.log(response.data.nome)
    //         localStorage.setItem('ongId', id);
    //         localStorage.setItem('ongName', response.data.nome);
    //         history.push('/profile');
    //     } catch {
    //         alert('Falha no login, tente novamente')
    //     }
    // }

    return(
        <div className="logon-container">
             <Link to="/">
                <img src={logoImg} alt="Heroes" className="herosImg"/>
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
                                value={id}
                                onChange={e => setId(e.target.value)} />
                        <input placeholder="Sua Senha"
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
                            <Link className="back-link" to="/register">
                            Esqueceu a Senha?
                        </Link>
                        </div>
                        <button className="button" type="submit" onClick={loga}>Login</button>
                        <Link className="back-link" to="/tipo-de-cadastro">
                            <FiLogIn size={16} color="#ba151c"/>
                           Quero ser um Angeluz
                        </Link>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Login;