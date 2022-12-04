import "../App.css";
import DepartmentCart from "./DepartmentCart";
import { ReactComponent as PlusSvg } from "../image/plusSvg.svg";
import { useEffect, useState, useContext } from "react";
import { MainContext } from "../context";
import moment from "moment";

export default function Main() {
    const {  error, 
        setError,
        setDepartments,
        departments,
        disabledAddButton,
        setDisabledSetButton, } = useContext(MainContext);

  useEffect(() => {
    for (let i = 0; i < departments.length; i++) {
      if (departments[i].changes) {
        setDisabledSetButton(!disabledAddButton);
      }
    }
  }, [departments]);

  return (
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
          disabled={!disabledAddButton}
          onClick={() =>
            setDepartments([
              ...departments,
              {
                id: departments.length + 1,
                changes: true,
                departmentName: "Название подразделения не заданно",
                directorName: "Руководитель подразделения не задан",
                employeesNum: 0,
                divisions: [],
              },
            ])
          }
        >
          <PlusSvg />
        </button>
      </div>
  );
}
