import "./App.css";
import { ReactComponent as EditIcon } from "./image/editImage.svg";
import { ReactComponent as CheckIcon } from "./image/check.svg";
import { useState, useContext } from "react";
import { MainContext } from "./context";

export default function DepartmentCart(props) {
  const [newDepartmentName, setNewDepartmentName] = useState();
  const [newDirectorName, setNewDirectorName] = useState();
  const [newEmployeesNum, setNewEmployeesNum] = useState();
  const { setDepartments, departments, disabledAddButton, setDisabledSetButton } = useContext(MainContext);

  const switchChanges = () => {
    const newDepartments = departments.map((el) =>
       el.id === props.id 
        ? { ...el, changes: !el.changes }
        : el
    );
    setDepartments(newDepartments);
  };

  const updateCart = () => {
      const newDepartments = departments.map((el) =>
        el.id === props.id 
          ? { id: el.id,
              changes: false,
              departmentName: newDepartmentName ? newDepartmentName : el.departmentName,
              directorName: newDirectorName ? newDirectorName : el.directorName,
              employeesNum: newEmployeesNum ? newEmployeesNum : el.employeesNum,
            }
          : el
      );
      console.log(newDepartments)
      setDepartments(newDepartments);
      setDisabledSetButton(!disabledAddButton)
  };



  return (
    <div className="departmentCart">
      <div className="header">
        {props.changes ? (
          <>
            <input
              type="text"
              placeholder="Название подраздела"
              className="departmentNameInput"
              value={newDepartmentName}
              onChange={(e) => setNewDepartmentName(e.target.value)}
            />
            <button className="editBtn" onClick={updateCart}>
              <CheckIcon />
            </button>
          </>
        ) : (
          <>
            <p className="departmentName">{props.departmentName}</p>
            <button className="editBtn" onClick={switchChanges}>
              <EditIcon />
            </button>
          </>
        )}
      </div>
      {props.changes ? (
        <div className="directorBlock">
          <span className="title">Руководитель</span>
          <input
            type="text"
            placeholder="Имя руководителя"
            className="directorNameInput"
            value={newDirectorName}
            onChange={(e) => setNewDirectorName(e.target.value)}
          />
        </div>
      ) : (
        <div className="directorBlock">
          <span className="title">Руководитель</span>
          <p className="directorName">{props.directorName}</p>
        </div>
      )}
      {props.changes ? (
        <div className="employeesBlock">
          <span className="title">Количечтво сотрудников</span>
          <input
            type="number"
            className="employeesNumInput"
            value={newEmployeesNum}
            onChange={(e) => setNewEmployeesNum(e.target.value)}
          />
        </div>
      ) : (
        <div className="employeesBlock">
          <span className="title">Количечтво сотрудников</span>
          <p className="employeesNum">{props.employeesNum}</p>
        </div>
      )}
    </div>
  );
}
