import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const LanguageProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("pt");

  const changeLanguage = (languageCode) => {
    setSelectedLanguage(languageCode);
    /* console.log(languageCode); */
  };

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((jsonData) => {
        /*  console.log(jsonData);  */
        const filteredData = jsonData.map((item) => {
          return {
            img: item.img,
            id: item.id,
            title: item.title[selectedLanguage],
            description: item.description[selectedLanguage],
          };
        });

      /*console.log(filteredData)
        console.log("jsonDataFilteredAcima");
        console.log(selectedLanguage);
        console.log("selectedLanguage"); */
        setData(filteredData);
      })
      .catch((error) => console.error("Error :", error));
  }, [selectedLanguage]);
  

  return (
    <DataContext.Provider value={{ data, selectedLanguage, changeLanguage }}>
      {children}
    </DataContext.Provider>
  );
};
