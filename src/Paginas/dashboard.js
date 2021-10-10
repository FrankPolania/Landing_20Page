import React from "react";
import InventarioArboles from "../componentes/InventarioArboles";
import '../css/styles.css'

function Dashboard(){
    return(
        <div className="conteiner-fluid">
            <div className="row">
                <aside className="col-3 bg-dark ">
                  <div className="conteiner">
                      <div className="row">
                          <div className="col-12 p-4">
                              <a className="col-12 btn btn-primary mb-2">hola</a>
                              <a className="col-12 btn btn-primary mb-2">hola</a>

                          </div>
                      </div>
                  </div>
                </aside>
                <div className="col">
                    <InventarioArboles />
                </div>
            </div>

        </div>
    );



}

export default Dashboard;