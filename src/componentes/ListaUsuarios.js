import React, { Component } from "react";
import Axios from "axios";
// import { useEffect, useState } from 'react';
import "../css/tabla.css";

class ListaUsuarios extends Component {
  constructor() {
    super();
    this.state = {
      activo: false,
      rol: "g",
      documento: "",
      nombre: "",
      email: "",
      password: "",
      modificado: "",
      users: [],
    };
    this.addPerson = this.addPerson.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addPerson(e) {
    /*
        fetch('http://localhost:3000/api/newUsuario/', {
            method: 'POST',
            body: JSON.stringify({
                "activo": this.state.activo,
                "rol": this.state.rol,
                "documentoId": this.state.documento,
                "nombre": this.state.nombre,
                "email": this.state.email,
                "pasword": this.state.password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            */
    if (this.state._id) {
      
            fetch(`http://localhost:3000/api/usuario/${this.state._id}`, {
                method:'PUT',
                body: JSON.stringify(
                    { activo: this.state.activo,
                        rol: this.state.rol,
                        documentoId: this.state.documento,
                        nombre: this.state.nombre,
                        email: this.state.email,
                        pasword: this.state.password}
                ),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => {
              alert(`usuario ${this.state.nombre} actualizado`);
              this.setState({
                activo: false,
                rol: "g",
                documento: "",
                nombre: "",
                email: "",
                password: "",
              });
              this.fetchPerson();
            });
            
           /*
      Axios.put(`http://localhost:3000/api/usuario/${this.state._id}`, {
        activo: this.state.activo,
        rol: this.state.rol,
        documentoId: this.state.documento,
        nombre: this.state.nombre,
        email: this.state.email,
        pasword: this.state.password,
      })
      
        .then((res) => res.json())
        .then((data) => {
          alert("usuario actualizado");
          this.setState({
            activo: false,
            rol: "g",
            documento: "",
            nombre: "",
            email: "",
            password: "",
          });
          this.fetchPerson();
        });*/
    } else {
      Axios.post("http://localhost:3000/api/newUsuario/", {
        activo: this.state.activo,
        rol: this.state.rol,
        documentoId: this.state.documento,
        nombre: this.state.nombre,
        email: this.state.email,
        pasword: this.state.password,
      })

        .then((res) => console.log(res))
        .then((data) => {
          // console.log(data);
          alert(`El usuario ${this.state.nombre} ha sido creado con éxito`);
          this.setState({
            activo: false,
            rol: "g",
            documento: "",
            nombre: "",
            email: "",
            password: "",
          });
          this.fetchPerson();
        })
        .catch((err) => {console.log(err);
        alert("el usuario no pudo ser creado, ingrese todos los campos")
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
    fetch("http://localhost:3000/api/usuario/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        this.setState({ users: data });
        console.log(this.state.users);
      });
  }

  /*
    Eliminar = (Id) => {
        const url = 'http://localhost:3000/api/usuario/' + Id;
        console.log(url);
        const fetchApi = async () => {
            const response = await fetch(url, { method: 'DELETE' });
            console.log(response.status);
            const responseJson = await response.json()
            console.log(responseJson);
        }
        fetchApi()
    }
    */

  Eliminar = (Id) => {
    var opcion = window.confirm(`Realmente desea eliminar el usuario`);
    if (opcion) {
      Axios.delete(`http://localhost:3000/api/usuario/${Id}`).then(
        this.fetchPerson()
      );
    }
    this.fetchPerson();
  };

  editUser(id) {
    fetch(`http://localhost:3000/api/usuario/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          activo: false,
          rol: "g",
          documento: data.documentoId,
          nombre: data.nombre,
          email: data.email,
          _id: data._id,
        });
      });
    //this.addPerson(id)
  }

  render() {
    return (
      <div className="container">
        <div className="row h-100">
          <div className="col my-auto">
            <h2>Crear Usuario</h2>
            <form
              onSubmit={this.addPerson}
              className="border border-primary p-3"
            >
              {/* Documento, Nombre, Email, Estado, Rol */}
              <div className="form-group">
                <label htmlFor="documentoInput">Documento</label>
                <input
                  value={this.state.documento}
                  onChange={this.handleChange}
                  name="documento"
                  type="number"
                  className="form-control border border-primary"
                  id="documentoInput"
                  placeholder="Ingrese su documento"
                />
              </div>
              <div className="form-group">
                <label htmlFor="nombreInput">Nombre</label>
                <input
                  value={this.state.nombre}
                  onChange={this.handleChange}
                  name="nombre"
                  type="text"
                  className="form-control border border-primary"
                  id="nombreInput"
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email1Input">Correo Electrónico</label>
                <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  type="email"
                  className="form-control border border-primary"
                  id="email1Input"
                  placeholder="Ingrese su correo electrónico"
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  className="form-control border border-primary"
                  id="passwordInput"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
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
                  <th className="column1 text-center" colSpan="7">
                    Lista de Usuarios{" "}
                  </th>
                </tr>
              </thead>
              <thead>
                <tr className="table100-head">
                  <th className="column1">Documento </th>
                  <th className="column2">Nombre</th>
                  <th className="column3">Email</th>
                  <th className="column4">Estado</th>
                  <th className="column5">Rol</th>
                  <th className="column6">Modificado</th>
                  <th className="column6">Acción</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => {
                  return (
                    <tr key={user._id}>
                      <td className="column1">{user.documentoId}</td>
                      <td className="column2">{user.nombre}</td>
                      <td className="column3">{user.email}</td>
                      <td className="column4">
                        {user.activo.toString() ? "Inactivo" : "Activo"}
                      </td>
                      <td className="column5">{user.rol}</td>
                      <td className="column6">{user.f_ult_modificacion}</td>
                      <td className="column7">
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

                {/* {!this.props.usuarios ? 'cargando' : this.props.usuarios.map(usuario => (<tr key={usuario._id}>
                                    <td className="column1">{usuario.documentoId}</td>
                                    <td className="column2">{usuario.nombre}</td>
                                    <td className="column3">{usuario.email}</td>
                                    <td className="column4">{usuario.activo ? 'activo' : 'inactivo'}</td>
                                    <td className="column5">{usuario.rol}</td>
                                    <td className="column6">{usuario.f_ult_modificacion}</td>
                                    <td className="column6">
                                        <button style={{ marginRight: '20px' }}>✏️</button>
                                        <button onClick={() => { this.Eliminar(usuario._id) }} >❌</button></td>

                                </tr>
                                )

                                )} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      //     </div>
      // </div>
    );
  }
}
export default ListaUsuarios;

/*
<td className="column1">{!props.usuarios ? 'cargarndo':props.usuario.documentoId}</td>
<td className="column2">{!props.usuarios ? 'cargarndo':props.usuario.nombre} </td>
<td className="column3">{!props.usuarios ? 'cargarndo':props.usuario.email}</td>
<td className="column4">{!props.usuarios ? 'cargarndo':props.usuario.activo}</td>
<td className="column5">{!props.usuarios ? 'cargarndo':!props.usuario.rol ? 'activo':'inactivo'}</td>
<td className="column6">{!props.usuarios ? 'cargarndo':props.usuarios[0].f_ult_modificacion}</td>
<td className="column6"><button >✏️</button><button >❌</button><button >✏️</button></td>
*/
