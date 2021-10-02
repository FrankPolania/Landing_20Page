import React from "react";
import '../css/registro.css';

function Registro(){
    return(
<div id="registro-forms" className="col-md-5 col-lg-6">
        <h4 className="mb-4 mt-4 text-center pt-4">REGISTRO DE NUEVOS USUARIOS</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">Nombres</label>
              <input type="text" className="form-control" id="nombres" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Apellidos</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            

            <div className="col-12 col-lg-6">
              <label for="username" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username" required/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <label for="address2" className="form-label">Identificación </label>
              <input type="text" className="form-control" id="address2" placeholder="Solo números"/>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-muted">(Opcional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <label for="address" className="form-label">Dirección</label>
              <input type="text" className="form-control" id="address" placeholder="Ej:  carrera 31 # 80-20" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <label for="address2" className="form-label">Dirección</label>
              <input type="text" className="form-control" id="address2" placeholder=""/>
            </div>

            <div className="col-12 col-lg-6">
              <label for="address2" className="form-label">Departamento </label>
              <input type="text" className="form-control" id="address2" placeholder=""/>
            </div>
            
            <div className="col-12 col-lg-6">
              <label for="address2" className="form-label">Municipio </label>
              <input type="text" className="form-control" id="address2" placeholder=""/>
            </div>


          </div>

          <hr className="my-4"/>


          <button className="w-100 btn btn-primary btn-lg" type="submit">Registrar</button>
        </form>
      </div>

    );
}
export default Registro;