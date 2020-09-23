import React, { useState, useEffect } from "react";
import "./styles.css";

function buscaDados() {
  const url = "https://api.got.show/api/book/characters";
  return fetch(url)
    .then(async (response) => await response.json())
    .then(async (dados) => {
      return await dados;
    })
    .catch((err) => console.error("Erro ao buscar dados", err));
}

export default function App() {
  const [casos, setCasos] = useState([]);
  useEffect(() => {
    buscaDados().then((dados) => setCasos(dados));
  }, []);

  return (
    <div className="container">
      <div className="App">
        <h1>Lista </h1>
        <table className="table">
          <thead>
            <tr>
              <th>Nome </th>
              <th>Cultura </th>
              <th>Casa </th>
              <th>Criaçao </th>
            </tr>
          </thead>
          <tbody>
            {casos.map(function (item, index) {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.culture}</td>
                  <td>{item.house}</td>
                  <td>{item.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
