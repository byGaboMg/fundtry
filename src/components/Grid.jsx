import React from "react";
import Card from "./Card";

const Grid = () => {
  // Define un array con los datos personalizados para cada tarjeta
  const cardsData = [
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack: "¿Qué representan los ejes en las curvas de indiferencia?",
      textBack: "Back Text 1",
    },
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack: "¿Qué representa cada punto en la curva?",
      textBack: "Back Text 2",
    },
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack:
        "¿Qué representa la lejanía de una curva con respecto al origen?",
      textBack: "Back Text 1",
    },
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack: " Menciona una característica de la utilidad Marginal",
      textBack: "Back Text 2",
    },
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack: "¿Qué representan los ejes en las curvas de indiferencia?",
      textBack: "Back Text 1",
    },
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack: "¿Qué representa cada punto en la curva?",
      textBack: "Back Text 2",
    },
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack:
        "¿Qué representa la lejanía de una curva con respecto al origen?",
      textBack: "Back Text 1",
    },
    {
      titleFront: "100",
      textFront: "Fácil",
      titleBack: " Menciona una característica de la utilidad Marginal",
      textBack: "Back Text 2",
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
