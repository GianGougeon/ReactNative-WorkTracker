import React, { useEffect, useState } from "react";
import Home from "./src/screens/Home/Home.js";
import Data from "./src/data/data.json";
import Details from "./src/screens/Details/Details.js";
const App = () => {
    const [itemsList, setItemsList] = useState(Data);
    const [itemSelected, setItemSelected] = useState();
    return itemSelected ? (
        <Details
            itemSelected={itemSelected}
            setItemsList={setItemsList}
            setItemSelected={setItemSelected}
            itemsList={itemsList}
        />
    ) : (
        <Home
            data={itemsList}
            setItemSelected={setItemSelected}
            setItemsList={setItemsList}
        />
    );
};

export default App;
