import React from "react";
import Card from "./Card";

const Grid = () => {
  // Define un array con los datos personalizados para cada tarjeta
  const cardsData = [
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack: "¿Qué representan los ejes en las curvas de indiferencia?",
      textBack: "Tarjeta 1",
    },
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack: "¿Qué representa cada punto en la curva?",
      textBack: "Tarjeta 2",
    },
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack:
        "¿Qué representa la lejanía de una curva con respecto al origen?",
      textBack: "Tarjeta 3",
    },
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack: "Menciona una característica de la utilidad Marginal",
      textBack: "Tarjeta 4",
    },
    {
      titleFront: "200",
      textFront: "Medio",
      titleBack: "Menciona dos características de la curva de indiferencia",
      textBack: "Tarjeta 5",
    },
    {
      titleFront: "200",
      textFront: "Medio",
      titleBack: "¿Qué es la utilidad total?",
      textBack: "Tarjeta 6",
    },
    {
      titleFront: "200",
      textFront: "Medio",
      titleBack: "¿Qué significa la RMSM?",
      textBack: "Tarjeta 7",
    },
    {
      titleFront: "200",
      textFront: "Medio",
      titleBack: "¿Qué indica en la RMSM?",
      textBack: "Tarjeta 8",
    },
    {
      titleFront: "300",
      textFront: "Difícil",
      titleBack: "¿Cuál es la fórmula de la restricción presupuestal?",
      textBack: "Tarjeta 9",
    },
    {
      titleFront: "300",
      textFront: "Difícil",
      titleBack: "¿Cómo se relaciona la utilidad total y la utilidad marginal?",
      textBack: "Tarjeta 10",
    },
    {
      titleFront: "300",
      textFront: "Difícil",
      titleBack: "¿Qué es la utilidad marginal?",
      textBack: "Tarjeta 11",
    },
    {
      titleFront: "300",
      textFront: "Difícil",
      titleBack: "¿Cuál es la fórmula principal del RMSM?",
      textBack: "Tarjeta 12",
    },
    {
      titleFront: "400",
      textFront: "MUY Difícil",
      titleBack: "¿Qué indica la pendiente de la restricción presupuestal?",
      textBack: "Tarjeta 13",
    },
    {
      titleFront: "400",
      textFront: "MUY Difícil",
      titleBack:
        "¿Qué sucede si los bienes son complementarios o sustitutos perfectos y por qué?",
      textBack: "Tarjeta 14",
    },
    {
      titleFront: "400",
      textFront: "MUY Difícil",
      titleBack: "¿Qué representa la línea de restricción presupuestal?",
      textBack: "Tarjeta 15",
    },
    {
      titleFront: "400",
      textFront: "MUY Difícil",
      titleBack:
        "¿Cómo afecta una reducción en el ingreso del consumidor a la restricción presupuestal?",
      textBack: "Tarjeta 16",
    },

    // Agrega más tarjetas aquí
  ];

  return (
    <div className="grid">
      {cardsData.map((data, index) => (
        <Card
          key={index}
          titleFront={data.titleFront}
          textFront={data.textFront}
          titleBack={data.titleBack}
          textBack={data.textBack}
        />
      ))}
    </div>
  );
};

export default Grid;
