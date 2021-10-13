import { useEffect} from 'react';

function Mensaje(mensaje){
    const msj=() =>{ alert(mensaje);}
     useEffect(() =>{
        msj();
      },[])
}
export default Mensaje;