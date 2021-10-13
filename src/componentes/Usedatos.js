import { useEffect, useState } from 'react';

function Usedatos(){
    const [usuarios,setUsuarios]=useState();
    const url ='http://localhost:3000/api/usuario';

    const fetchApi = async() => {
        const response = await fetch(url);
        console.log(response.status);
        const responseJson = await response.json()
        setUsuarios(responseJson);
        console.log(responseJson);
      
      }
    
      useEffect(() =>{
        fetchApi();
      },[])
    
return usuarios

     // return [usuarios,setUsuarios];
}
export default Usedatos;


/*
function Usedatos(){
    const [usuarios,setUsuarios]=useState();
    const url ='http://localhost:3000/api/usuario';

    const fetchApi = async() => {
        const response = await fetch(url);
        console.log(response.status);
        const responseJson = await response.json()
        setUsuarios(responseJson);
        console.log(responseJson);
      
      }
    
      useEffect(() =>{
        fetchApi();
      },[])
    
return usuarios

     // return [usuarios,setUsuarios];
}
export default Usedatos;
*/