import React from 'react';

function Proyecto(props){
    return(
        <div className="card mb-4">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
      className="img-fluid"
    />
    <a href="#!">
      <div className="mask"  ></div>
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.nombre}</h5>
    <p className="card-text">
        {props.text}
    </p>
    <a href={props.enlace} className="btn btn-primary ms-auto">Button</a>
  </div>
</div>
    );
}

export default Proyecto;