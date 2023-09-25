import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import ItemList from "./Components/itemsList";
import { useState } from "react";
import items from "./Data/data_dummy";

function App() {
  const [itemlst, setItemlst] = useState(items);

  // get all categories without duplicates

  const allCategories = ["الكل",...new Set(items.map((i) => i.category))]

  console.log(allCategories);
  
  // filter items by category

  const filterbyCategory = (cat) => {

    if (cat === "الكل") {
      setItemlst(items);
    } 
    
    else {
      const filtered_arr = items.filter((item) => item.category === cat);
      setItemlst(filtered_arr);
    }

  };

  // filter items by Search

  const filterbySearch = (word) => {
    if (word !== "") {
      
      const newArr = items.filter((item) => item.title === word)
      setItemlst(newArr)
      
    }
  }

  return (
    <div className="color-body font">
      <NavBar FilterSearch={filterbySearch} />
      <Container>
        <Header />
        <Categories FilterCategories={filterbyCategory} GeTALLCat = {allCategories} />
        <ItemList ItemsData={itemlst} />
      </Container>
    </div>
  );
}

export default App;
