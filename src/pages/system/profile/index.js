import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import InputMask from 'react-input-mask';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import api from '../../../services/api';
import { 
    FaUser, 
    FaAsterisk,
    FaInfo
} from 'react-icons/fa';
import './style.css';

const Profile = () => {
    const id = localStorage.getItem('userId');
    const [ user, setUser ] = useState([])
    const [ fullName, setFullName ] = useState('');
    const [ nationality, setNationality ] = useState('');
    const [ civilStatus, setCivilStatus ] = useState('');
    const [ occupation, setOccupation ] = useState('');
    const [ rg, setRg ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ cellphone, setCellphone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ photo, setPhoto ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ repeatNewPassword, setRepeatNewPassword ] = useState('');
    const [ errorPassword, setErrorPassword ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ district, setDistrict ] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ zipCode, setZipCode ] = useState('');
    
    const infoUser = () => {
        try {
            api.get(`usuario/${id}`)
            .then(response => {
                setUser(response.data)
                setPassword(response.data[0].password)
                setFullName(response.data[0].full_name);
                setNationality(response.data[0].nationality);
                setCivilStatus(response.data[0].civil_status);
                setOccupation(response.data[0].occupation);
                setRg(response.data[0].rg);
                setCpf(response.data[0].cpf);
                setPhone(response.data[0].phone);
                setCellphone(response.data[0].cellphone);
                setEmail(response.data[0].email);
                setPhoto(response.data[0].photo);
                setAddress(response.data[0].address);
                setNumber(response.data[0].number);
                setDistrict(response.data[0].district);
                setCity(response.data[0].city);
                setState(response.data[0].state);
                setZipCode(response.data[0].zip_code);
            })
        } catch {
            toast.error('Erro ao carregar suas informações');
        }        
    }

    useEffect(() => {
        infoUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    

    const upadteUser = async (e) => {

        e.preventDefault();

        if(newPassword !== '' || repeatNewPassword !== '') {
            if (newPassword !== repeatNewPassword) {
                setErrorPassword('Campo Confirme a Nova Senha é diferente de Nova Senha');
            }
        } else {
            if (newPassword !== '') {
                setPassword(newPassword)
            }

            const valuUser = {
                full_name: fullName,
                nationality: nationality,
                civil_status: civilStatus,
                occupation: occupation,
                rg: rg,
                cpf: cpf,
                phone: phone,
                cellphone: cellphone,
                email: email,
                photo: photo,
                password: password,
                address: address,
                number: number,
                district: district,
                city: city,
                state: state,
                zip_code: zipCode
            }          

            valuUser.rg = rg.replace(/[^\d]+/g,'');
            valuUser.cpf = cpf.replace(/[^\d]+/g,'');
            valuUser.zip_code = zipCode.replace(/[^\d]+/g,'');
            valuUser.phone = phone.replace(/[^\d]+/g,'');
            valuUser.cellphone = cellphone.replace(/[^\d]+/g,'');

            try {
                await api.patch(`alterar-usuario/${id}`, valuUser);
                toast.success('Perfil atualizado com sucesso');
            } catch {
                toast.error('Erro ao atualizar seu perfil');
            }
        }
    }

    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
            <SideBar />
            <Header />
            <ToastContainer />
            {user.map((data) => {
                const photoProfile = (data.photo !== null) ? data.photo : 'no-photo.jpg'
                let imgUser = `/assets/img/photo_perfil/${photoProfile}`;                 

                return (
                    <main id="main-container" key={data.id_user}>
                        
                        <div className="bg-image bg-image-bottom">
                            <div className="bg-black-op-75 py-30">
                                <div className="content content-full text-center">
                                    <div className="mb-15">
                                        <img className="img-avatar img-avatar96 img-avatar-thumb" src={imgUser} alt="" />
                                    </div>
                                    <h1 className="h3 text-white font-w700 mb-10">{fullName}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="block">
                                <div className="block-header block-header-default">
                                    <h3 className="block-title">
                                        <FaUser className="fa fa-user-circle mr-2 text-muted" /> Perfil
                                    </h3>
                                </div>
                                <div className="block-content">
                                    <form action="be_pages_generic_profile.edit.html" method="POST">
                                        <div className="row items-push">
                                            <div className="col-lg-3">
                                                <p className="text-muted">
                                                    As informações vitais da sua conta. Seu nome de usuário estará visível publicamente.
                                                </p>
                                            </div>
                                            <div className="col-lg-7 offset-lg-1">
                                                <div className="form-group row">
                                                    <div className="col-6">
                                                        <label>Nome</label>
                                                        <input type="text" className="form-control form-control-lg" 
                                                            onChange={(e) => setFullName(e.target.value)}
                                                            value={fullName}
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Estado Civil</label>
                                                        <select className="form-control form-control-lg" 
                                                            onChange={(e) => setCivilStatus(e.target.value)}
                                                            value={civilStatus}
                                                        >
                                                            <option>Estado Civil</option>
                                                            <option>Casado</option>
                                                            <option>Solteiro</option>
                                                            <option>Divorciado</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <label>E-mail</label>
                                                        <input type="email" className="form-control form-control-lg"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            value={email} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-6">
                                                        <label>Telefone</label>
                                                        <InputMask type="text" className="form-control form-control-lg" 
                                                            mask="(99) 9999-9999"
                                                            onChange={(e) => setPhone(e.target.value)}
                                                            value={phone}
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Celular</label>
                                                        <InputMask type="text" className="form-control form-control-lg" 
                                                            mask="(99) 99999-9999"
                                                            onChange={(e) => setCellphone(e.target.value)}
                                                            value={cellphone}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-6">
                                                        <label>RG</label>
                                                        <InputMask type="text" className="form-control form-control-lg" 
                                                            mask="99999999-9"
                                                            onChange={(e) => setRg(e.target.value)}
                                                            value={rg}
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>CPF</label>
                                                        <InputMask type="text" className="form-control form-control-lg" 
                                                            mask="999.999.999-99"
                                                            onChange={(e) => setCpf(e.target.value)}
                                                            value={cpf}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-6">
                                                        <label>Nacionalidade</label>
                                                        <input type="text" className="form-control form-control-lg" 
                                                            onChange={(e) => setNationality(e.target.value)}
                                                            value={nationality}
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Ocupação</label>
                                                        <input type="text" className="form-control form-control-lg" 
                                                            onChange={(e) => setOccupation(e.target.value)}
                                                            value={occupation}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-10 col-xl-6">
                                                        <div className="push">
                                                            <img className="img-avatar" src={imgUser} alt="" />
                                                        </div>
                                                        <div className="custom-file">                                                            
                                                            <input type="file" className="custom-file-input" 
                                                                onChange={(e) => setPhoto(e.target.value)}
                                                            />
                                                            <label className="custom-file-label">Trocar Imagem</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-alt-primary" onClick={upadteUser}>Atualizar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>                    
                            <div className="block">
                                <div className="block-header block-header-default">
                                    <h3 className="block-title">
                                        <FaAsterisk className="mr-2 text-muted" />   Alterar Senha
                                    </h3>
                                </div>
                                <div className="block-content">
                                    <form action="be_pages_generic_profile.edit.html" method="post">
                                        <div className="row items-push">
                                            <div className="col-lg-3">
                                                <p className="text-muted">                                            
                                                    Alterar sua senha de login é uma maneira fácil de manter sua conta segura.
                                                </p>
                                            </div>
                                            <div className="col-lg-7 offset-lg-1">
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <label>Senha Atual</label>
                                                        <input type="password" className="form-control form-control-lg"
                                                            value="*********"
                                                            disabled 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <label>Nova Senha</label>
                                                        <input type="password" className="form-control form-control-lg"
                                                            onChange={(e) => setNewPassword(e.target.value)}
                                                            value={newPassword}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <label>Confirme a Nova Senha</label>
                                                        <input type="password" className="form-control form-control-lg" 
                                                            onChange={(e) => setRepeatNewPassword(e.target.value)}
                                                            value={repeatNewPassword}
                                                        />
                                                        <span className="mt-2 text-danger">{errorPassword}</span>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-alt-primary" onClick={upadteUser}>Atualizar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="block">
                                <div className="block-header block-header-default">
                                    <h3 className="block-title">
                                        <FaInfo className="mr-2 text-muted" /> Endereço
                                    </h3>
                                </div>
                                <div className="block-content">
                                    <form action="be_pages_generic_profile.edit.html" method="post">
                                        <div className="row items-push">
                                            <div className="col-lg-3">
                                                <p className="text-muted">
                                                    Your billing information is never shown to other users and only used for creating your invoices.
                                                </p>
                                            </div>
                                            <div className="col-lg-7 offset-lg-1">
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <label>Endereço</label>
                                                        <input type="text" className="form-control form-control-lg" 
                                                            onChange={(e) => setAddress(e.target.value)}
                                                            value={data.address}
                                                        />           
                                                    </div>
                                                </div>
                                                <div className="form-group row">    
                                                    <div className="col-6">
                                                        <label>Número</label>
                                                        <input type="text" className="form-control form-control-lg" 
                                                            onChange={(e) => setNumber(e.target.value)}
                                                            value={number}
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Bairro</label>
                                                        <input type="text" className="form-control form-control-lg" 
                                                            onChange={(e) => setDistrict(e.target.value)}
                                                            value={district}
                                                        />
                                                    </div>        
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <label>Cidade</label>
                                                        <input type="text" className="form-control form-control-lg" 
                                                            onChange={(e) => setCity(e.target.value)}
                                                            value={city}
                                                        />
                                                    </div>
                                                </div>                                       
                                                <div className="form-group row">
                                                    <div className="col-6">
                                                        <label>Estado</label>
                                                        <input type="text" className="form-control form-control-lg" 
                                                            onChange={(e) => setState(e.target.value)}
                                                            value={state}
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Cep</label>
                                                        <input type="text" className="form-control form-control-lg" 
                                                            mask="99999-999"
                                                            onChange={(e) => setZipCode(e.target.value)}
                                                            value={zipCode}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-alt-primary" onClick={upadteUser}>Atualizar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                )
            })}
            
            <Footer />
        </div>
    )
}

export default Profile;