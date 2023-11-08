import React, { useState } from "react";


const App = () => {
    const [integrantes, setIntegrantes] = useState([
    {
        id: 0,
        name: "Paul Urcan",
        age: 21,
        img: "https://live.staticflickr.com/65535/52927864826_5ac1500a6c_o.jpg",
        github: "https://github.com/PaulUrcan"
    },
    {
        id: 1,
        name: "Matias Grande",
        age: 20,
        img: "https://live.staticflickr.com/65535/52927864911_af121a8c82_o.jpg",
        github: "https://github.com/BigMatias"
    },
    {
        id: 2,
        name: "Santiago Lacki",
        age: 25,
        img: "https://live.staticflickr.com/65535/52928312203_b14916f494_o.jpg",
        github: "https://github.com/SantiagoLacki"
    },
    {
        id: 3,
        name: "Marcos Quinteros",
        age: 19,
        img: "https://live.staticflickr.com/65535/52927279787_929b65e330_o.jpg",
        github: "https://github.com/mwarcos"
    }
    ]);

    return (
    <div>
        {integrantes.map((integrante) => (
        <div key={integrante.id} className="card">
            <div className="card-header">
            <img src={integrante.img} alt={integrante.name} />
            </div>
            <div className="card-body">
            <h4 className="card-title">{integrante.name} ({integrante.age})</h4>
            <p className="card-text">
                {integrante.github}
            </p>
            </div>
        </div>
        ))}
    </div>
    );
};

export default App;