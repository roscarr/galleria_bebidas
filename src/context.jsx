import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const AppContenxt = createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const getApp = async () => {
    try {
      const data = await fetch(url);
      const res = await data.json();
      console.log(res);
      const { drinks } = res;
      if (drinks) {
        const cocktail = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strInstructions,
          } = item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            ingredient: [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
            ],
            instructions: strInstructions,
          };
        });
        setInfo(cocktail);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApp();
  }, []);

  return (
    <AppContenxt.Provider value={{ info }}>{children}</AppContenxt.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContenxt);
};

export { AppProvider, AppContenxt };
