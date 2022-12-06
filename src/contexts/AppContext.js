import { createContext, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";

// AppContext = createContext({ new_color, setColor });


let new_theme_color = "#f44336";

// export const AppContextProvider = () => {
export const themeFunc = () => {

  let new_color = "#f44336";

  this.setThemeColor = this.setThemeColor.bind(this);
  this.getThemeColor = this.getThemeColor.bind(this);

  function setThemeColor(color) {
    new_color = color;
  }

  function getThemeColor() {
    return new_color;
  }

}

//   return (
//     <AppContext.Provider value={{ new_color }}>
//     </AppContext.Provider>
//   );
// };

// export { AppContext, AppContextProvider };

export const globalState = {
  new_theme_color
};

export const globalStateContext = createContext(themeFunc);