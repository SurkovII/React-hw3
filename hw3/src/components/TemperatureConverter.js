import { Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const TemperatureConverter = () => {
  const [сelsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState();

  const changeCelsium = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit((value * 9) / 5 + 32 || "");
  };
  const changeFahrenheit = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius((value - 32) / 9 * 5 || "");
  };

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
         <TextField
          label="Celsius"
          sx={{ m: 1, width: '25ch' }}
          value={сelsius}
          slotProps={{
            input: {
                endAdornment: <InputAdornment position="end">Celsius</InputAdornment>,
            },
          }}
          onChange={changeCelsium}
          variant="filled"
        />
                 <TextField
          label="Fahrenheit"
          sx={{ m: 1, width: '25ch' }}
          value={fahrenheit} 
          slotProps={{
            input: {
                endAdornment: <InputAdornment position="end">Fahrenheit</InputAdornment>,
            },
          }}
          onChange={changeFahrenheit}
          variant="filled"
        />
    </div>
  )
};
export default TemperatureConverter;