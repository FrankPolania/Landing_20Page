import React from 'react';

function Proyecto(props){
    return(
        <div className="card mb-4">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
      class="img-fluid"
    />
    <a href="#!">
      <div class="mask"  ></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.nombre}</h5>
    <p class="card-text">
        {props.text}
    </p>
    <a href={props.enlace} class="btn btn-primary ms-auto">Button</a>
  </div>
</div>
    );
}

export default Proyecto;