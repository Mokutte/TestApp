import Main from "./components/Main";
import { MainContext } from "./context";
import { useEffect, useState } from "react";
import "./App.css";
import Divisions from "./components/Divisions";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

function App() {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      changes: false,
      departmentName: "Отдел продаж",
      directorName: "Макаренко Иван Сергеевич",
      employeesNum: 56,
      divisions: [],
    },
    {
      id: 2,
      changes: false,
      departmentName: "IT отдел",
      directorName: "Макаренко Иван Сергеевич",
      employeesNum: 72,
      divisions: [],
    },
    {
      id: 3,
      changes: false,
      departmentName: "Отдел маркетинга",
      directorName: "Макаренко Иван Сергеевич",
      employeesNum: 56,
      divisions: [],
    },
  ]);
  const [error, setError] = useState();
  const [disabledAddButton, setDisabledSetButton] = useState(true);
  const [currentCart, setCurrentCart] = useState();
  const [viewDivision, setViewDivision] = useState();
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/divisions",
      element: <Divisions />,
    },
  ]);

  console.log(departments)


  return (
    <MainContext.Provider
      value={{
        error,
        setError,
        setDepartments,
        departments,
        disabledAddButton,
        setDisabledSetButton,
        currentCart,
        setCurrentCart,
        viewDivision,
        setViewDivision,
      }}
    >
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </MainContext.Provider>
  );
}

export default App;
