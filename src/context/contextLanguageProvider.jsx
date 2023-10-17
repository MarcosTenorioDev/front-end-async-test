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
  };

  useEffect(() => {
    fetch("https://json-db-theta.vercel.app/data")
      .then((response) => response.json())
      .then((data) => {
        
         const filteredCards = data.items.map((item) => ({
          img: item.img,
          id: item.id,
          title: item.title[selectedLanguage],
          description: item.description[selectedLanguage],
        }));
   
        const filteredHomeContent = {
          title: data.content.home.title[selectedLanguage],
          subtitle: data.content.home.subtitle[selectedLanguage],
          slogan: data.content.home.slogan[selectedLanguage],
          startNow: data.content.home.buttons.startNow[selectedLanguage],
          watchVideo: data.content.home.buttons.watchVideo[selectedLanguage],
          mainContentSub: data.content.home.mainContent.mainContentSub[selectedLanguage],
          MoreResources: data.content.home.mainContent.MoreResources[selectedLanguage],
          MainContentTitle: data.content.home.mainContent.MainContentTitle[selectedLanguage],
          SeeAllResourcesText: data.content.home.mainContent.SeeAllResourcesText[selectedLanguage],
          SeeMoreBtn: data.content.home.mainContent.SeeMoreBtn[selectedLanguage],
        };
        
         const filteredNavbarLinks = data.navbarLinks.map((link) => ({
          page: link.page[selectedLanguage],
          href: link.href
         }))

         const filteredNavbarButtons = {
          solutions: data.navbarButtons[0].solutions[selectedLanguage],
          signIn: data.navbarButtons[1].signIn[selectedLanguage],
          start: data.navbarButtons[2].start[selectedLanguage],
        };

  
        setData({ items: filteredCards, content: { home: filteredHomeContent }, navbar: filteredNavbarLinks, navButtons: filteredNavbarButtons  }); 

      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedLanguage]);
  
  

  return (
    <DataContext.Provider value={{ data, selectedLanguage, changeLanguage }}>
      {children}
    </DataContext.Provider>
  );
};
