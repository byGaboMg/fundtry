import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa"; // Importamos los íconos de play, pausa y reiniciar
import "./TimerComponent.css";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Estado para el tiempo restante (60 segundos por defecto)
  const [initialTime, setInitialTime] = useState(60); // Estado para el tiempo inicial (para poder reiniciar)
  const [isRunning, setIsRunning] = useState(false); // Estado para saber si el temporizador está corriendo
  const [inputTime, setInputTime] = useState(60); // Estado para controlar la entrada de tiempo editable

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      // Si el temporizador está corriendo, decrementa el tiempo restante cada segundo
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Detener el temporizador cuando llegue a 0
      setIsRunning(false);
    }

    // Limpiar el intervalo cuando el temporizador no esté corriendo
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStartStop = () => {
    if (isRunning) {
      // Si el temporizador está corriendo, lo pausamos sin reiniciar
      setIsRunning(false);
    } else {
      // Si el temporizador está detenido, lo iniciamos con el tiempo actual
      setIsRunning(true); // Empezamos o reanudamos el temporizador
    }
  };

  const handleReset = () => {
    // Reiniciar el temporizador con el tiempo inicial
    setTimeLeft(initialTime);
    setIsRunning(false);
  };

  const handleTimeChange = (e) => {
    // Actualizar el tiempo inicial cuando el usuario ingresa un nuevo valor
    const newTime = Math.max(1, parseInt(e.target.value, 10)); // No permitir que el tiempo sea menor a 1
    setInputTime(newTime);
    setInitialTime(newTime); // Actualizar el tiempo inicial
  };

  return (
    <div className="timer">
      <h2>Temporizador</h2>
      <div className="time">
        {timeLeft > 0 ? (
          <span>{timeLeft}s</span>
        ) : (
          <span>¡Tiempo finalizado!</span>
        )}
      </div>

      <div className="input-time">
        <label htmlFor="time">Selecciona el tiempo (en segundos):</label>
        <input
          type="number"
          id="time"
          value={inputTime}
          onChange={handleTimeChange}
          min="1"
        />
      </div>

      <div className="buttons">
        <button onClick={handleStartStop} className="play-pause-button">
          {isRunning ? <FaPause /> : <FaPlay />} {/* Botón de Play/Pausa */}
        </button>
        <button onClick={handleReset} className="reset-button">
          <FaRedo /> {/* Botón de reiniciar */}
        </button>
      </div>
    </div>
  );
};

export default Timer;
