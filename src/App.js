import React from 'react';
import './App.css';
import semaforo from './semaforo2.png';
import semaforo2 from './semaforo.png';
import TrafficLightsApp from './componets/TrafficLightsApp';


const semaphoroSeq = {
  data: [
    {color: "R", duration: "3s"},
    {color: "Y", duration: "1s"},
    {color: "R", duration: "2s"},
    {color: "G", duration: "5s"}
  ]};

const AppTest = () => {
  return (
    <div className="App">
        <h1>Prueba Grupo América Digital</h1>
        <div className="AppBody">

          <h3>1. Semáforo simple</h3>
          <p>La evaluación consiste en la creación de un componente React que represente el funcionamiento un semáforo. Este semáforo cuando se inicia comienza con las 3 luces prendidas por 5 segundos. Luego comienza en rojo. La duración de cada luz es la siguiente: 5 segundos rojo, 2 segundos amarillo y 5 segundos verde. El ciclo es en ese orden.</p>
          <p>Una vez que arrancó, tiene que haber exactamente una luz prendida.</p>
          <p>Se debe mostrar de forma similar a la siguiente imagen:</p>
          <div className="exampleContainer">
            <div className="exampleImageWrapper"><img src={semaforo} alt="Semáforo todo apagado"/>Semáforo todo apagado</div>
            <div className="exampleImageWrapper"><img src={semaforo2} alt="Semáforo todo prendido"/>Semáforo todo prendido</div>
          </div>

          <h3>2. Semáforo en línea</h3>
          <p>Modificaremos el semáforo del punto anterior para que en vez de un comportamiento predeterminado, consulte al siguiente endpoint de una API: <a href="https://api-pre.americadigital.com.ar/contents/semaphore/random" target="_blank">link</a></p>
          <p>Ejemplo de respuesta del endpoint:</p>
          <code>{JSON.stringify(semaphoroSeq)}</code>

        </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="appContainer">
      <div className="appChildContainer">
        <AppTest />
      </div>
      <div className="appChildContainer">
        <TrafficLightsApp />
      </div>
    </div>
  )
}

export default App;
