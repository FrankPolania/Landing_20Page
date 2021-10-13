import React, { Component } from "react";
import Axios from "axios";
// import { useEffect, useState } from 'react';
import "../css/tabla.css";

class ListaArboles extends Component {




  constructor() {
    super();
    this.state = {
      cod_arbol: "",
      especie: "",
      altura: "",
      diametro: "",
      estado: "",
      ubicacion: "",
      //f_reporte: "",
      responsable: "",
      users: [],
    };
    this.addPerson = this.addPerson.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }




  addPerson(e) {
   
    if (this.state._id) {
      
            fetch(`http://localhost:3000/api/arbol/${this.state._id}`, {
                method:'PUT',
                body: JSON.stringify(
                    { /*activo: this.state.activo,
                        rol: this.state.rol,
                        documentoId: this.state.documento,
                        nombre: this.state.nombre,
                        email: this.state.email,
                        pasword: this.state.password*/
                    
                        cod_arbol: this.state.cod_arbol,
                        especie: this.state.especie,
                        altura: this.state.altura,
                        diametro: this.state.diametro,
                        estado: this.state.estado,
                        ubicacion: this.state.ubicacion,
                        //f_reporte: this.state.f_reporte,
                        responsable: this.state.responsable
                    }
                ),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => {
              alert(`El arbol ${this.state.cod_arbol} ha sido actualizado`);
              this.setState({
                cod_arbol: "",
                especie: "",
                altura: "",
                diametro: "", 
                estado: "",
                ubicacion: "",
                //f_reporte: "",
                responsable: ""
              });
              this.fetchPerson();
            });
            document.getElementById("f_btn").innerHTML ="Crear"
document.getElementById("etiqueta").innerHTML ="Crear Arbol"
          
    } else {
      Axios.post("http://localhost:3000/api/newArbol/", {
        cod_arbol: this.state.cod_arbol,
        especie: this.state.especie,
        altura: this.state.altura,
        diametro: this.state.diametro,
        estado: this.state.estado,
        ubicacion: this.state.ubicacion,
        //f_reporte: this.state.f_reporte,
        responsable: this.state.responsable
      })

        .then((res) => console.log(res))
        .then((data) => {
          // console.log(data);
          alert(`El arbol ${this.state.cod_arbol} ha sido creado con éxito`);
          this.setState({
            cod_arbol: "",
            especie: "",
            altura: "",
            diametro: "", 
            estado: "",
            ubicacion: "",
            //f_reporte: "",
            responsable: ""
          });
          this.fetchPerson();
        })
        .catch((err) => {console.log(err);
        alert("el arbol no pudo ser creado, ingrese todos los campos")
        });
    }

    e.preventDefault();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    this.fetchPerson();
  }

  fetchPerson() {
    fetch("http://localhost:3000/api/arbol/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        this.setState({ users: data });
        console.log(this.state.users);
      });
  }

 

  Eliminar = (Id) => {
    var opcion = window.confirm(`Realmente desea eliminar el usuario`);
    if (opcion) {
      Axios.delete(`http://localhost:3000/api/arbol/${Id}`).then(
        this.fetchPerson()
      );
    }
    this.fetchPerson();
  };

  editUser(id) {
    fetch(`http://localhost:3000/api/arbol/${id}`)
      .then((res) => res.json())
      .then((data) => {

        this.setState({
            cod_arbol: data.cod_arbol,
            especie: data.especie,
            altura: data.altura,
            diametro: data.diametro, 
            estado: data.estado,
            ubicacion: data.ubicacion,
            //f_reporte: data.f_reporte,
            responsable: data.responsable,
            _id: data._id,
          });
console.log("entra a editar")
document.getElementById("f_btn").innerHTML ="editar"
document.getElementById("etiqueta").innerHTML ="Editar Arbol"
      });
    //this.addPerson(id)
  }
  

  render() {
    return (
<>

      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-2 my-auto">
            <h2 id="etiqueta">Crear Arbol</h2>
            <form
              onSubmit={this.addPerson}
              className="border border-primary p-3"
            >

{/*cod_arbol,especie,altur:,diametro ,estado,ubicacion,f_reporte,responsable*/}

              {/* Documento, Nombre, Email, Estado, Rol */}
              <div className=" form-group">
                <label htmlFor="cod_arbolInput">Codigo de arbol</label>
                <input
                  value={this.state.cod_arbol}
                  onChange={this.handleChange}
                  name="cod_arbol"
                  type="number"
                  className="form-control border border-primary"
                  id="cod_arbolInput"
                  placeholder="Ingrese el codigo del arbol"
                />
              </div>
              <div className="form-group">
                <label htmlFor="especieInput">Especie</label>
                <input
                  value={this.state.especie}
                  onChange={this.handleChange}
                  name="especie"
                  type="text"
                  className="form-control border border-primary"
                  id="especieInput"
                  placeholder="Especie"
                />
              </div>
              <div className="form-group">
                <label htmlFor="altura1Input">Altura</label>
                <input
                  value={this.state.altura}
                  onChange={this.handleChange}
                  name="altura"
                  type="text"
                  className="form-control border border-primary"
                  id="altura1Input"
                  placeholder="Altura"
                />
              </div>
              <div className="form-group">
                <label htmlFor="diametroInput">Diametro</label>
                <input
                  value={this.state.diametro}
                  onChange={this.handleChange}
                  name="diametro"
                  type="text"
                  className="form-control border border-primary"
                  id="diametroInput"
                  placeholder="Diametro"
                />
              </div>
              <div className="form-group">
                <label htmlFor="estadoInput">Estado</label>
                <input
                  value={this.state.estado}
                  onChange={this.handleChange}
                  name="estado"
                  type="text"
                  className="form-control border border-primary"
                  id="estadoInput"
                  placeholder="Estado"
                />
              </div>
              <div className="form-group">
                <label htmlFor="ubicacionInput">Ubicacion</label>
                <input
                  value={this.state.ubicacion}
                  onChange={this.handleChange}
                  name="ubicacion"
                  type="text"
                  className="form-control border border-primary"
                  id="ubicacionInput"
                  placeholder="ubicación"
                />
              </div>{/*
              <div className="form-group">
                <label htmlFor="f_reporteInput">Fecha de reporte</label>
                <input
                  value={this.state.f_reporte}
                  onChange={this.handleChange}
                  name="f_reporte"
                  type="text"
                  className="form-control border border-primary"
                  id="f_reporteInput"
                  placeholder="Ingrese su correo electrónico"
                />
              </div>*/}
              <div className="form-group">
                <label htmlFor="responsableInput">Responsable</label>
                <input
                  value={this.state.responsable}
                  onChange={this.handleChange}
                  name="responsable"
                  type="text"
                  className="form-control border border-primary"
                  id="responsableInput"
                  placeholder="Ing. Responsable"
                />
              </div>

              <button id="f_btn" type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          {/* ------------------------------------------------------------------------------------ */}
          <div className="col">
            {/* <div className="wrap-table100"> */}
            {/* <div className="table100"> */}


            <table>
              <thead>
                <tr className="table100-head">
                  <th className="column1 text-center" colSpan="9">
                    Inventario de Arboles
                  </th>
                </tr>
              </thead>
              <thead>
                <tr className="table100-head">
                <th className="column1">cod_arbol</th>
                <th className="column2">especie</th>
                <th className="column3">altura</th>
                <th className="column4">diametro </th>
                <th className="column5">estado</th>
                <th className="column6">ubicacion</th>
                {/*<th className="column7">f_reporte</th>*/}
                <th className="column8">responsable</th>
                <th className="column9"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => {
                  return (
                    <tr key={user._id}>
                        <td className="column1">{user.cod_arbol}</td>
                        <td className="column2">{user.especie}</td>
                        <td className="column3">{user.altura}</td>
                        <td className="column4">{user.diametro} </td>
                        <td className="column5">{user.estado}</td>
                        <td className="column6">{user.ubicacion}</td>
                        {/*<td className="column7">{user.f_reporte}</td>*/}
                        <td className="column8">{user.responsable}</td>
                    <td>
                        <button
                          onClick={() => this.editUser(user._id)}
                          style={{ marginRight: "20px" }}
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => {
                            this.Eliminar(user._id);
                          }}
                        >
                          ❌
                        </button>
                      </td>
                    </tr>
                  );
                })}

              
              </tbody>
            </table>
            </div>
          </div>
        </div>
    </>
      //     </div>
      // </div>
    );
  }
}
export default ListaArboles;
















/*
import React from "react";
import { useEffect, useState } from 'react';
import '../css/tabla.css'
import Usedatos from "./Usedatos";


function ListaArboles(){
 
const Eliminar =(Id) =>{
    const url ='http://localhost:3000/api/usuario/'+Id;
    console.log(url);
    const fetchApi = async() => {
        const response = await fetch(url,{method:'DELETE'});
        console.log(response.status);
        const responseJson = await response.json()
        console.log(responseJson);
        Usedatos();
      }
      fetchApi();
}

// codigo, especie, altura,diametro, estado(nuevo, saludable ,no existe,requiere tratamiento ,dar de baja ), ubicacion, f_reporte, ing_resp
const arbolesDefault =[
    {Consecutivo:'001',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
    {Consecutivo:'002',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
    {Consecutivo:'003',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
    {Consecutivo:'004',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
    {Consecutivo:'005',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
    {Consecutivo:'006',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
    {Consecutivo:'007',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
]

const [arbolesState,setarbolesState] = useState(arbolesDefault);



    return(
<div className="container-table100">
<div className="wrap-table100">
<div className="table100">
<table>
<thead>
<tr className="table100-head">
<th className="column1 text-center" colSpan="7" >Lista Arboles </th>

</tr>
</thead>
<thead>
<tr className="table100-head">
<th className="column1">consecutivo </th>
<th className="column2">altura</th>
<th className="column3">diametro</th>
<th className="column4">Estado</th>
<th className="column5">fecha visita</th>
<th className="column6"></th>
</tr>
</thead>
<tbody>
{arbolesState.map(arbol=>(<tr key={arbol._id}>
<td className="column1">{arbol.Consecutivo}</td>
<td className="column2">{arbol.Altura}</td>
<td className="column3">{arbol.Diametro}</td>
<td className="column4">{arbol.estado}</td>
<td className="column5">{arbol.f_visita}</td>
<td className="column6"><button >✏️</button><button onClick={() => {Eliminar(arbol._id)}} >❌</button></td>

</tr>
)
    
    )}

</tbody>
</table>
</div>
</div>
</div>
    )
}
export default ListaArboles;
*/