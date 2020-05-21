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
        const [ phone, setPhone ] = useState('');
        
        // const [nationality, setNationality] = useState('');
        // const [civilStatus, setCivilStatus] = useState('');
        // const [occupation, setOccupation] = useState('');
        // const [rg, setRg] = useState('');
        // const [cpf, setCpf] = useState('');
        // const [address, setAddress] = useState('');
        // const [number, setNumber] = useState('');
        // const [district, setDistrict] = useState('');
        // const [zipCode, setZipCode] = useState('');
        // const [city, setCity] = useState('');
        // const [state, setState] = useState('');
        
        // const [repeatPassword, setRepeatPassword] = useState('');
        // const [email, setEmail] = useState('');
    
        // const history = useHistory();
    
        // const registerUser = async (e) => {
        //     e.preventDefault();
    
        //     const data = {
        //         full_name: fullName, 
        //         nationality: nationality, 
        //         civil_status: civilStatus, 
        //         occupation: occupation, 
        //         rg: rg, 
        //         cpf: cpf, 
        //         address: address,
        //         number: number,
        //         district: district,
        //         zip_code: zipCode,
        //         city: city,
        //         state: state,
        //         type_user: 2,
        //         password: password,
        //         email: email
        //     }
    
        //     try{
        //         const response = await api.post('cadastro-usuario', data)
        //         toast.success('Cadastro realizado com sucesso, você será redirecionado para a tela de login', {
        //             onClose: () => history.push('/login')
        //         });
        //     } catch(error) {
        //         toast.success(error.response.data.message);
        //     }        
        // }
        const validations = yup.object().shape({
            full_name: yup.string().required('Campo Nome Completo é Obrigatório'),
            nationality: yup.string().required('Campo Nacionalidade é Obrigatório'),
            civil_status: yup.string().required('Campo Estado Civil é Obrigatório'),
            occupation: yup.string().required('Campo Profissão é Obrigatório'),
            rg: yup.string().required('Campo RG é Obrigatório'),
            cpf: yup.string().required('Campo CPF é Obrigatório'),
            address: yup.string().required('Campo Endereço é Obrigatório'),
            number: yup.string().required('Campo Número é Obrigatório'),
            district: yup.string().required('Campo Bairro é Obrigatório'),
            zip_code: yup.string().required('Campo CEP é Obrigatório'),
            city: yup.string().required('Campo Cidade é Obrigatório'),
            state: yup.string().required('Campo Estado é Obrigatório'),
            email: yup.string().required('Campo E-mail é Obrigatório'),
            password: yup.string().min(6).required('No minimo 6 caracteres'),                      
            repeat_password: yup.string().min(6).required('Campo Obrigatório'), 
            phone: yup.string().required('Campo Telefone é Obrigatório')            
        });

        const handleSubmit = (values) => {
            console.log(values)
        }

        const initialValues = {
            full_name:'',
            nationality:'',
            civil_status:'',
            occupation:'',
            rg:'',
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
            phone: ''
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
                    <Formik 
                        initialValues={initialValues}
                        onSubmit={(values) => handleSubmit(values)} 
                        validationSchema={validations}>
                        <Form autoComplete="off" className="form">
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
                                        <option>Selecione</option>
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
                                                mask="(99) 9999-9999"                                                 
                                                name="phone" 
                                                placeholder="Telefone"
                                                type="text"
                                                onChange={(e) => {
                                                    setPhone(e.target.value)
                                                }}
                                                value={phone}
                                            />
                                          )}                                        
                                    />
                                    <ErrorMessage 
                                        component="span" 
                                        name="phone" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>                                
                                <div className="col col-md-6">
                                    <Field name="cellphone" 
                                        render={() => (
                                            <InputMask
                                                mask="(99) 99999-9999"
                                                required 
                                                placeholder="Celular"
                                            />
                                          )}
                                    />
                                    <ErrorMessage 
                                        component="span" 
                                        name="cellphone" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>                                
                                <div className="col col-md-6">
                                    <Field placeholder="RG"
                                        type="text"
                                        name="rg" />
                                    <ErrorMessage 
                                        component="span" 
                                        name="rg" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>
                                <div className="col col-md-6">
                                    <Field placeholder="CPF"
                                        type="text"
                                        name="cpf"/>
                                    <ErrorMessage 
                                        component="span" 
                                        name="cpf" 
                                        className="text-danger d-block text-left mt-1"/>
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
                                    <Field placeholder="CEP"
                                        type="text"
                                        name="zip_code" />
                                     <ErrorMessage 
                                        component="span" 
                                        name="zip_code" 
                                        className="text-danger d-block text-left mt-1"/>
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
                                    <Field placeholder="Senha"
                                        className="Form-Field"
                                        name="password"
                                        type="password"/>
                                    <ErrorMessage 
                                        component="span" 
                                        name="password" 
                                        className="text-danger d-block text-left mt-1"/>
                                </div>
                                <div className="col col-md-6">
                                    <Field placeholder="Repita a Senha"
                                        name="repeat_password"
                                        type="password"/>
                                    <ErrorMessage 
                                        component="span" 
                                        name="repeat_password" 
                                        className="text-danger d-block text-left mt-1"/>
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