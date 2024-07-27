import React from "react";
import { data } from "@/app/data";

export const List = () => {
    return (
        <div className="container p-4">
            <hr />
            <h1 className="text-center">Crisis económicas</h1>
            <hr />
            {data.map((item, index) => (
                <div className="row" key={index}>
                    {item.crisis_economicas.map((value, id) => (
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
                                            <img src={value.imagen_de_referencia} className="img-fluid" alt={value.titulo} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col pt-3">
                                            <h6 className="card-subtitle mb-2 fw-bold">Características:</h6>
                                            <ul className="list-unstyled">
                                                {Object.entries(value.caracteristicas).map(([key, caracteristica], idx) => (
                                                    <li key={idx} className="mb-1">
                                                        <strong>{key}:</strong> {caracteristica}
                                                    </li>
                                                ))}
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
