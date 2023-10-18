
const RegisterC = () => {



    return (
    <div className="container text-center">
        <div className="contenedor-register-login">
            <div className="contenedor-form-register">
            <div className="row gy-5"> 
                  <div className="col-lg-6">
                    <div>
                        <div className='col-lg-12'>
                        <p className="texto-register-login"> Nombre Completo </p>
                        <input placeholder="" type="text" name="nombre" id="input"className='form-control' />
                        </div>
                    </div>

                    <br />

                    <div className='col-lg-12'>
                            <div className="row gy-5">
                            <div className="form-floating">
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option value="1">Femenino</option>
                                    <option value="2">Masculino</option>
                                </select>
                                <label for="floatingSelect">Sexo</label>
                                </div>
                                                                
                            </div>
                        </div>
                    

                    <div className='col-lg-12'>
                        <p className="texto-register-login"> E-mail </p>
                        <input id="input" placeholder="" type="email" name="user_email" className='form-control' />
                    </div>

                    <div>    
                    <div className='col-lg-12'>
                        <p className="texto-register-login"> Usuario </p>
                        <input id="input" placeholder='' type="text" name="username" className='form-control '/>                </div>
                    </div>
                    <div className='col-lg-12'>
                        <p className="texto-register-login"> Contraseña </p>
                        <input id="input" placeholder='' type="text" name="password" className='form-control '/>                </div>
                
                    <div>
                    <div className='col-lg-6'>
                        <p className="texto-register-login"> Ingrese la contraseña de nuevo </p>
                        <input id="input" placeholder='' type="text" name="password" className='form-control '/>                </div>
                    </div>
                    <div className="col-lg-6">
                    <div className='container text-start'>
                        <input type="submit" value="Enviar" className='boton-submit' />
                    </div>
                    </div>
                    
                    </div>
                    <div className="col-lg-6">
                        <div className="imagen-register">
                            <img src="https://res.cloudinary.com/dehmb7i5p/image/upload/v1697472156/codigo360/pexels-yan-krukau-7011186_uhjuws.jpg" alt="" /> 
                        </div>
                    </div>
                    
            </div> 
                  </div>
         </div>
    </div>
    );
  };
  
  export default RegisterC;