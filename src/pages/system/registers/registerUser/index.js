import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import logoImg from '../../../../assets/images/logo.png';
import './style.css'
import 'react-toastify/dist/ReactToastify.min.css'; 

export default function Register() {

    const [fullName, setName] = useState('');
    const [nationality, setNationality] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [occupation, setOccupation] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    const registerUser = async (e) => {
        e.preventDefault();

        let data = {
            full_name: fullName, 
	        nationality: nationality, 
	        civil_status: civilStatus, 
	        occupation: occupation, 
	        rg: rg, 
	        cpf: cpf, 
	        address: address,
	        number: number,
	        district: district,
	        zip_code: zipCode,
	        city: city,
	        state: state,
	        type_user: 2,
	        password: password,
	        email: email
        }
        console.log(data)
        toast.success('Cadastro realizado com sucesso, você será redirecionado para a tela de login');

        setTimeout(() => {
            history.push('/login')
        }, 6000)
        

        // try{
        //     api.post('/cadastro-usuario', data)
        //     history.push('/login')
        // } catch {
        //     (error) => {
        //         toast.error(error.message)
        //     }            
        // }        
    }
   
    return(
        <div className="container text-center">
            <ToastContainer />
             <Link to="/">
                <img src={logoImg} alt="Heroes" className="AngeluzImg"/>
             </Link>
             <div className="container-form">
                <section>
                    <h1>Cadastro de Angeluz</h1>                   
                    <form onSubmit={registerUser}>
                        <div className="row">
                            <div className="col col-md-6">
                                <input className="form-control" placeholder="Nome Completo"
                                 value={fullName}
                                 onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input className="form-control" placeholder="Nacionalidade"
                                    value={nationality}
                                    onChange={e => setNationality(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <select className="form-control" id="exampleFormControlSelect1"
                                    value={civilStatus}
                                    onChange={e => setCivilStatus(e.target.value)}>
                                    <option>Estado Civil</option>
                                    <option>Casado</option>
                                    <option>Solteiro</option>
                                    <option>Divorciado</option>
                                </select>
                            </div>
                            <div className="col col-md-6">
                            <input placeholder="Profissão"
                                    value={occupation}
                                    onChange={e => setOccupation(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="RG"
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="CPF"
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Endereço"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Número"
                                    value={number}
                                    onChange={e => setNumber(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Bairro"
                                    value={district}
                                    onChange={e => setDistrict(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="CEP"
                                    value={zipCode}
                                    onChange={e => setZipCode(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Cidade"
                                    value={city}
                                    onChange={e => setCity(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Estado"
                                    value={state}
                                    onChange={e => setState(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Senha"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Repita a Senha"
                                    value={repeatPassword}
                                    onChange={e => setRepeatPassword(e.target.value)}/>
                            </div>
                            <div className="col col-md-12">
                                <input placeholder="E-mail"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row justify-content-center flex-column align-items-center">
                            <div className="col-md-4">
                                <button className="button" type="submit">Cadastrar</button>
                            </div>
                            <Link className="back-link" to="/tipo-de-cadastro">
                                <FiArrowLeft size={16} color="#e02041"/>
                                Voltar
                            </Link>                            
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}