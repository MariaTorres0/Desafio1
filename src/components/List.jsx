import React from "react";
import { data } from "@/app/data";

export const List = () => {
    return (
        <div className="container p-4">
            {data.map((item, index) => (
                <div className="row" key={index}>
                    <hr />
                    <h1 className="text-center">{item.descripcion}</h1>
                    <hr />
                    {item.empresas.map((value, id) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={id}>
                            <div className="card h-100">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">{value.titulo}</h5>
                                    <div className="row">
                                        <div className="col pt-3">
                                            <h6 className="card-subtitle mb-2 fw-bold">Descripción:</h6>
                                            <p className="card-text">{value.descripcion}</p>
                                        </div>
                                        <div className="col">
                                            <img src={value.imagen} className="img-fluid" alt={value.titulo} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col pt-3">
                                            <h6 className="card-subtitle mb-2 fw-bold">Características:</h6>
                                            <ul className="list-unstyled">
                                                    <li className="mb-1">
                                                        {value.caracteristicas}
                                                    </li>                                           
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
