
    const Login = () => {
      return (
          <div className="container text-center">  
            <div className="row gy-3">
  
              <div className="col-lg-6">
                  <img src="https://res.cloudinary.com/dehmb7i5p/image/upload/v1697479172/codigo360/pexels-antoni-shkraba-5205700_hrbeav.jpg" alt="" className="login-img"/>
              </div>
  
              <div className="col-lg-6">
                  <div className='col-lg-12'>
                  <p className="texto-register-login"> Usuario o E-Mail </p>
                  <input placeholder="" type="email" name="user_email" className='form-control' />
                </div>
                <div className='col-lg-12'>
                  <p className="texto-register-login"> Contraseña </p>
                  <input placeholder="" type="contraseña" name="user_epass" className='form-control' />
                </div>
              </div>
  
            </div>
          </div>
      );
    };
  

export default Login;
