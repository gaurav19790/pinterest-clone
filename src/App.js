import './App.css';
import react, {useState,useEffect} from "react";
import Header from './components/Header';
import Mainbord from "./components/Mainbord"
import unsplash from "./api/unsplash"

function App() {
  const[pins,setNewPins] =useState([])

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos",{
    params: {
      query:term
    }
    });
  };



  const onSearchSubmit = (term) => {

    getImages(term).then((res) => {
      let results =res.data.results;

      let newPins =[
        ...results,
        ...pins,
      ]

      newPins.sort(function(a,b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    })
  }
const getNewPins =() => {
  let promise =[];
  let pinData =[];

  let pins =[/*'ocean','bikes', 'Tokyo','cars','bali','cats','dogs'*/'drogan ball']
  pins .forEach((pinTerm) =>{
    promise.push(
      getImages(pinTerm).then((res) => {
        let results =res.data.results;
        pinData = pinData.concat(results);
        pinData.sort(function(a,b) {
          return 0.5 - Math.random(); 
        });
      })
    );
  });
  Promise.all(promise).then(() => {
    setNewPins(pinData);
  });
}; 

  useEffect(() => {
  getNewPins();
  },[])

  
  return (
    <div className="App">
     <Header onSubmit={onSearchSubmit}/>
     <Mainbord pins={pins}/>
    </div>
  );
}

export default App;
