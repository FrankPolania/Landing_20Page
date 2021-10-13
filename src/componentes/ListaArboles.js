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