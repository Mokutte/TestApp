import "./App.css";
import DepartmentCart from "./departmentCart";
import { ReactComponent as PlusSvg } from "./image/plusSvg.svg";
import { useEffect, useState } from "react";
import { MainContext } from "./context";
import moment from "moment";

function App() {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      changes: false,
      departmentName: "Отдел продаж",
      directorName: "Макаренко Иван Сергеевич",
      employeesNum: 56,
    },
    {
      id: 2,
      changes: false,
      departmentName: "IT отдел",
      directorName: "Макаренко Иван Сергеевич",
      employeesNum: 72,
    },
    {
      id: 3,
      changes: false,
      departmentName: "Отдел маркетинга",
      directorName: "Макаренко Иван Сергеевич",
      employeesNum: 56,
    },
  ]);
  const [error, setError] = useState();

  
  return (
    <MainContext.Provider value={{ setError, setDepartments, departments }}>
      <div className="App">
        <div className="container">
          {departments.map((el) => (
            <DepartmentCart
              key={el.departmentName}
              changes={el.changes}
              id={el.id}
              departmentName={el.departmentName}
              directorName={el.directorName}
              employeesNum={el.employeesNum}
            />
          ))}
          <button
            className="addBlock"
            onClick={() =>
              setDepartments([
                ...departments,
                {
                  id: moment().format('LTS'),
                  changes: true,
                  departmentName: "new departament",
                  directorName: "",
                  employeesNum: 0,
                },
              ])
            }
          >
            <PlusSvg />
          </button>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
