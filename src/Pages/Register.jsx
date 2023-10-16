
const RegisterC = () => {



    return (
    <div className="container text-center">
        <div className="row gy-5"> 
            
         <div className="col-lg-6">

              <div>
                <div className='col-lg-12'>
                  <p className="texto-register-login"> Nombre Completo </p>
                  <input placeholder="" type="text" name="nombre" className='form-control' />
                </div>
              </div>

            <div className='col-lg-12'>
                <p className="texto-register-login"> E-mail </p>
                <input placeholder="" type="email" name="user_email" className='form-control' />
            </div>

            <div>    
            <div className='col-lg-12'>
                <p className="texto-register-login"> Usuario </p>
                <input placeholder='' type="text" name="username" className='form-control '/>                </div>
            </div>
                <div className='col-lg-12'>
                        <p className="texto-register-login"> Sexo </p>
                    <div className="row gy-5">

                        <div className="col-lg-12">
                        <input type="checkbox" id="hombre" />
                        <label for="hombre"> Hombre </label>
                        <input type="checkbox" id="mujer" />
                        <label for="mujer"> Mujer </label>
                        </div>
                        
                    </div>
                </div>
            
            <div className='col-lg-12'>
                <p className="texto-register-login"> Contraseña </p>
                <input placeholder='' type="text" name="password" className='form-control '/>                </div>
           
            <div>
            <div className='col-lg-6'>
                <p className="texto-register-login"> Ingrese la contraseña de nuevo </p>
                <input placeholder='' type="text" name="password" className='form-control '/>                </div>
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
    );
  };
  
  export default RegisterC;