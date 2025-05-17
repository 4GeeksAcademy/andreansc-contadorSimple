import React, { useState, useEffect } from "react";
import Home from "./Home";

const App = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos(prev => prev + 1);
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return <Home segundos={segundos} />;
};

export default App;

