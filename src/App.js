import React, { useState } from "react";
import "./App.css";
import Verticalnavbar from "./component/Verticalnavbar";
import data from "./component/data";
import Cards from "./component/Cards";
import Graph from "./component/Graph";
import DonutChart from "./component/doughnut";
import Table from "./component/Table";
function App() {
  // const [figure, setFigure] = useState(data);

 

  return (
    <div class="flex flex-row bg-slate-500 h-full w-full">

      <div class="flex flex-col basis-1/6 max-h-full bg-indigo-900" >
        <Verticalnavbar/>
      </div>

      <div class="basis-5/6 bg-white w-ful ">
          <div className="mx-2">
              <Cards cards={data}></Cards>
          </div>
          <div class="flex flex-col lg:flex-row">
        <div class="flex-grow mx-11 p-4 lg:w-3/4 px-4 mb-4 border rounded-lg shadow-md"> 
              <h3 class="text-lg font-bold">Overview</h3>
              <h5 class="text-xs font-thin text-slate-400">Monthy Earning</h5>
          <Graph/>
        </div>

        <div class="p-4 lg:w-1/4 px-4 mb-4 mx-4 border rounded-lg shadow-md"> 
              <h3 class="text-lg font-bold">Customer</h3>
              <h5 class="text-xs font-thin text-slate-400">Customer that buys the product</h5>
          <DonutChart />
        </div>
      </div>

       
        <div class="bg-white p-4 border rounded-lg shadow-md mx-6">
                <Table/>
        </div>
     </div>
    </div>
  );
}

export default App;
