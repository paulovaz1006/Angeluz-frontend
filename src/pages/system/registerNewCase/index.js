import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import { 
    FaPaperPlane,
} from 'react-icons/fa';
import api from '../../../services/api';

const RegisterNewCase = () => {
    const history = useHistory();
    const id = localStorage.getItem('userId');
    const [ date, setDate ] = useState('');

    const valuesInitial = {
        name: '', 
	    description: '', 
	    category: '', 
	    date_create: '', 
	    date_valid: date, 
	    id_user: parseInt(id), 
	    status: 'Aguardando Angeluz'
    }

    const validations = yup.object().shape({
        name: yup.string().required('Campo Nome Completo é Obrigatório'),
        description: yup.string().required('Campo Descrição é Obrigatório'), 
        category: yup.string().required('Campo Categoria é Obrigatório')
    });

    const registerCase = async (values) => {
        const dateValid = document.querySelector('#date_valid');
        if (dateValid.value === '') {
            dateValid.nextElementSibling.innerHTML = 'Campo data é obrigatorio';
            return false;
        } else {
            dateValid.nextElementSibling.innerHTML = '';
            const dateNow = new Date();        
            values.date_create = moment(dateNow).format('YYYY-MM-DD HH:MM:SS');
            values.date_valid = moment(date).format('YYYY-MM-DD HH:MM:SS');
            
            try {
                await api.post('cadastro-de-casos', values)
                toast.success('Cadastro realizado com sucesso, você será redirecionado para a tela de Meus Casos', {
                    autoClose: 5000,                    
                });
    
                setTimeout(() => {
                    history.push('/meus-casos')
                }, 5000);
            } catch {
                toast.error('Erro ao Cadastrar');
            }
        }
        
    }

    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
            <SideBar />
            <Header />
            <ToastContainer />
            <main id="main-container">
                <div className="bg-primary-angeluz">
                    <div className="bg-pattern bg-black-op-25">
                        <div className="content content-top text-center pt-1">
                            <div className="py-4">
                                <h1 className="font-w700 text-white mb-10">Criar Novo Caso</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content content-full">
                    <div className="row justify-content-center py-30">
                        <div className="col-lg-8 col-xl-6">
                            <div className="form-group row">
                                <Formik
                                    initialValues={valuesInitial}
                                    validationSchema={validations}
                                    onSubmit={(values) => registerCase(values)}
                                >
                                    <Form className="js-validation-be-contact w-100" autoComplete="off">                                    
                                        <div className="col-12">
                                            <label className="mb-0">Titulo</label>
                                            <Field className="form-control form-control-lg"
                                                type="text"
                                                name="name" />
                                            <ErrorMessage 
                                                component="span" 
                                                name="name" 
                                                className="text-danger d-block text-left mt-1"/>
                                        </div>
                                        <div className="col-12">
                                            <label className="mb-0 mt-2">Descrição</label>
                                            <Field className="orm-control form-control-lg mt-2"
                                                as="textarea"
                                                name="description" />
                                            <ErrorMessage 
                                                component="span" 
                                                name="description" 
                                                className="text-danger d-block text-left mt-1"/>
                                        </div>
                                        <div className="col-12">
                                            <label className="mb-0 mt-2">Categoria</label>
                                            <Field as="select"
                                                className="form-control form-control-lg"
                                                name="category" >
                                                    <option value="0">Selecione</option>
                                                    <option value="Teste 1">Teste 1</option>
                                                    <option value="Teste 2">Teste 2</option>
                                                    <option value="Teste 3">Teste 3</option>
                                                </Field>
                                            <ErrorMessage 
                                                component="span" 
                                                name="category" 
                                                className="text-danger d-block text-left mt-1"/>
                                        </div>
                                        <div className="col-12">
                                            <label className="mb-0 mt-2">Data de Validade</label>
                                            <Field>
                                                {() => (
                                                        <input
                                                            name="date_valid" 
                                                            type="date"
                                                            className="form-control form-control-lg"
                                                            onChange={(e) => setDate(e.target.value)}
                                                            value={date}
                                                            id="date_valid"
                                                        />
                                                )}
                                            </Field>   
                                            <span className="text-danger"></span>   
                                        </div>
                                        <div className="col-12 text-center mt-4">
                                            <button type="submit" className="btn-primary-angeluz min-width-175">
                                                <FaPaperPlane className="mr-2" /> Criar Novo Caso
                                            </button>
                                        </div>
                                    </Form>
                                </Formik> 
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default RegisterNewCase;