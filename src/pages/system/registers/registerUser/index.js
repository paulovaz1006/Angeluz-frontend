import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import InputMask from "react-input-mask";
import api from '../../../../services/api';
import logoImg from '../../../../assets/images/logo.png';
import './style.css'
import 'react-toastify/dist/ReactToastify.min.css'; 

const Register = () => {
    const history = useHistory();

    const [ phone, setPhone ] = useState('');
    const [ rg, setRg ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ zip_code, setZipCode ] = useState('');
    const [ cellphone, setCellphone ] = useState('');    
    const [ password, setPassword ] = useState('');  
    const [ repeatPassword, setRepeatPassword ] = useState('');    
    
    const initialValues = {
        full_name:'',
        nationality:'',
        civil_status:'',
        occupation:'',
        rg: '',
        cpf:'',
        address:'',
        number:'',
        district:'',
        zip_code:'',
        city:'',
        state:'',
        type_user: 2,
        password:'',
        email:'',
        phone: '',
        cellphone: ''            
    }

    const validations = yup.object().shape({
        full_name: yup.string().required('Campo Nome Completo é Obrigatório'),
        nationality: yup.string().required('Campo Nacionalidade é Obrigatório'),
        civil_status: yup.string().required('Campo Estado Civil é Obrigatório'),
        occupation: yup.string().required('Campo Profissão é Obrigatório'),            
        address: yup.string().required('Campo Endereço é Obrigatório'),
        number: yup.string().required('Campo Número é Obrigatório'),
        district: yup.string().required('Campo Bairro é Obrigatório'),
        city: yup.string().required('Campo Cidade é Obrigatório'),
        state: yup.string().required('Campo Estado é Obrigatório'),
        email: yup.string().required('Campo E-mail é Obrigatório')      
    });

    const validInputsMask = (form) => {
        let inputs = document.querySelectorAll('.inputRequired', form); 
        let count = 0;

        
        inputs.forEach((element) => {
            let textRequired = element.getAttribute('data-required');

            if (element.value === '') {
                element.nextElementSibling.innerHTML = `Campo ${textRequired} é obrigatório`;
                count++;
            } else if(element.nextElementSibling !== null) {
                element.nextElementSibling.innerHTML = ``;
            }
        });

        return (count === 0) ? true : false;
    }

    const validationPassword = () => {
        let password = document.querySelector('#password');
        let repeatPassword = document.querySelector('#repeat_password');
        let count = 0;

        if (password.value !== repeatPassword.value) {
            repeatPassword.nextElementSibling.innerHTML = 'Valor do Campo é diferente do campo Senha';
            repeatPassword.value = '';
            count++;
        } else {
            repeatPassword.nextElementSibling.innerHTML = '';
        }

        return (count === 0) ? true : false;
    }    

    const registerUser = async (values) => {
        if (validInputsMask('#registerUser') && validationPassword()) {
            values.rg = rg.replace(/[^\d]+/g,'');
            values.cpf = cpf.replace(/[^\d]+/g,'');
            values.zip_code = zip_code.replace(/[^\d]+/g,'');
            values.phone = phone.replace(/[^\d]+/g,'');
            values.cellphone = cellphone.replace(/[^\d]+/g,'');
            values.password = password;
           
            try{
                await api.post('cadastro-usuario', values)
                toast.success('Cadastro realizado com sucesso, você será redirecionado para a tela de login', {
                    autoClose: 5000,                    
                });

                setTimeout(() => {
                    history.push('/login')
                }, 5000);
            } catch(error) {
                toast.error(error.response.data.message);
            }  
        }                      
    }

    return(
        <div className="container text-center">
            <ToastContainer 
                autoClose={5000}
            />
            <Link to="/">
                <img src={logoImg} alt="Heroes" className="AngeluzImg"/>
            </Link>
            <div className="container-form">
                <section>
                    <h1>Cadastro de Humano</h1>                   
                    <Formik 
                        initialValues={initialValues}
                        onSubmit={(values) => registerUser(values)} 
                        validationSchema={validations}>
                        <Form autoComplete="off" className="form" id="registerUser">
                            <div className="row">
                                <div className="col col-md-6">
                                    <Field className="form-control form-field"
                                        type="text"
                                        placeholder="Nome Completo"
                                        name="full_name" />
                                    <ErrorMessage 
                                        component="span" 
                                        name="full_name" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>
                                <div className="col col-md-6">
                                    <Field className="form-control" 
                                        type="text"
                                        placeholder="Nacionalidade"
                                        name="nationality"/>
                                    <ErrorMessage 
                                        component="span" 
                                        name="nationality" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>
                                <div className="col col-md-6">                                    
                                    <Field as="select" className="form-control"
                                        name="civil_status">
                                        <option>Estado Civil</option>
                                        <option>Casado</option>
                                        <option>Solteiro</option>
                                        <option>Divorciado</option>
                                    </Field>
                                    <ErrorMessage 
                                        component="span" 
                                        name="civil_status" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>
                                <div className="col col-md-6">
                                    <Field placeholder="Profissão"
                                        type="text"
                                        name="occupation" />
                                    <ErrorMessage 
                                        component="span" 
                                        name="occupation" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>

                                <div className="col col-md-6">
                                    <Field
                                        render={() => (
                                            <InputMask
                                                name="phone" 
                                                type="text"
                                                placeholder="Telefone"
                                                mask="(99) 9999-9999"                                                  
                                                data-required="Telefone"
                                                className="inputRequired"
                                                onChange={(e) => setPhone(e.target.value)}
                                                value={phone}
                                            />
                                          )}                                        
                                    />
                                    <span className="text-danger d-block text-left mt-1"> </span>
                                </div>                                
                                <div className="col col-md-6">
                                    <Field 
                                        render={() => (
                                            <InputMask
                                                name="cellphone" 
                                                type="text"
                                                placeholder="Celular"
                                                mask="(99) 99999-9999"                                                
                                                data-required="Celular"   
                                                className="inputRequired"                                             
                                                onChange={(e) => setCellphone(e.target.value)}
                                                value={cellphone}
                                            />
                                          )}
                                    />
                                    <span className="text-danger d-block text-left mt-1"> </span>
                                </div>                                
                                <div className="col col-md-6">
                                    <Field
                                        render={() => (
                                            <InputMask
                                                name="rg" 
                                                type="text"
                                                placeholder="RG"
                                                mask="99999999-9"                                                 
                                                data-required="RG"
                                                className="inputRequired"
                                                onChange={(e) => setRg(e.target.value)}
                                                value={rg}
                                            />
                                        )}    
                                    />
                                    <span className="text-danger d-block text-left mt-1"> </span>
                                </div>
                                <div className="col col-md-6">
                                    <Field
                                        render={() => (
                                            <InputMask
                                                name="cpf" 
                                                type="text"
                                                placeholder="CPF"
                                                mask="999.999.999-99"                                                 
                                                data-required="RG"
                                                className="inputRequired"
                                                onChange={(e) => setCpf(e.target.value)}
                                                value={cpf}
                                            />
                                        )}   
                                    />
                                    <span className="text-danger d-block text-left mt-1"> </span>
                                </div>
                                <div className="col col-md-6">
                                    <Field placeholder="Endereço"
                                        type="text"
                                        name="address" />
                                    <ErrorMessage 
                                        component="span" 
                                        name="address" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>
                                <div className="col col-md-6">
                                    <Field placeholder="Número"
                                        type="text"
                                        name="number"/>
                                    <ErrorMessage 
                                        component="span" 
                                        name="number" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>
                                <div className="col col-md-6">
                                    <Field placeholder="Bairro"
                                        type="text"
                                        name="district"/>
                                    <ErrorMessage 
                                        component="span" 
                                        name="district" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>
                                <div className="col col-md-6">
                                    <Field
                                        render={() => (
                                            <InputMask
                                                name="zip_code" 
                                                type="text"
                                                placeholder="CEP"
                                                mask="99999-999"                                                 
                                                data-required="CEP"
                                                className="inputRequired"
                                                onChange={(e) => setZipCode(e.target.value)}
                                                value={zip_code}
                                            />
                                        )}/>
                                     <span className="text-danger d-block text-left mt-1"> </span>
                                </div>
                                <div className="col col-md-6">
                                    <Field placeholder="Cidade"
                                        type="text"
                                        name="city" />
                                    <ErrorMessage 
                                        component="span" 
                                        name="city" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>
                                <div className="col col-md-6">
                                    <Field placeholder="Estado"
                                        type="text"
                                        name="state"/>
                                    <ErrorMessage 
                                        component="span" 
                                        name="state" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>
                                <div className="col col-md-6">
                                    <Field 
                                        render={() => (
                                            <InputMask
                                                name="password" 
                                                type="password"
                                                placeholder="Senha"                                               
                                                data-required="Senha"
                                                className="Form-Field inputRequired"
                                                onChange={(e) => setPassword(e.target.value)}
                                                value={password}
                                                id="password"
                                            />
                                        )}
                                    />
                                    <span className="text-danger d-block text-left mt-1"> </span>
                                </div>
                                <div className="col col-md-6">
                                    <Field 
                                        render={() => (
                                            <InputMask
                                                name="repeat_password" 
                                                type="password"
                                                placeholder="Repita a Senha"                                               
                                                data-required="Repita a Senha"
                                                className="Form-Field inputRequired"
                                                id="repeat_password"
                                                onChange={(e) => setRepeatPassword(e.target.value)}
                                                value={repeatPassword}
                                            />
                                        )}
                                    />
                                    <span className="text-danger d-block text-left mt-1"> </span>
                                </div>
                                <div className="col col-md-12">
                                    <Field placeholder="E-mail"
                                        name="email"
                                        type="email"/>
                                    <ErrorMessage 
                                        component="span" 
                                        name="email" 
                                        className="text-danger d-block text-left mt-1"/>
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
                        </Form>                      
                    </Formik>                    
                </section>
            </div>
        </div>
    )
}    

export default Register;