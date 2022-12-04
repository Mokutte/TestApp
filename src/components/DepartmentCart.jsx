import "../App.css";
import { ReactComponent as EditIcon } from "../image/editImage.svg";
import { ReactComponent as CheckIcon } from "../image/check.svg";
import { ReactComponent as NextSvg } from "../image/nextSvg.svg";
import { useState, useContext } from "react";
import { MainContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function DepartmentCart(props) {
  const [newDepartmentName, setNewDepartmentName] = useState();
  const [newDirectorName, setNewDirectorName] = useState();
  const [newEmployeesNum, setNewEmployeesNum] = useState();
  const {
    setDepartments,
    departments,
    disabledAddButton,
    setDisabledSetButton,
    currentCart,
    setCurrentCart,
    setViewDivision,
  } = useContext(MainContext);
  const navigate = useNavigate()


  const switchChanges = () => {
    const newDepartments = departments.map((el) =>
      el.id === props.id ? { ...el, changes: !el.changes } : el
    );
    setDepartments(newDepartments);
  };

  const updateCart = () => {
    const newDepartments = departments.map((el) =>
      el.id === props.id
        ? {
            id: el.id,
            changes: false,
            departmentName: newDepartmentName
              ? newDepartmentName
              : el.departmentName,
            directorName: newDirectorName ? newDirectorName : el.directorName,
            employeesNum: newEmployeesNum ? newEmployeesNum : el.employeesNum,
          }
        : el
    );
    setDepartments(newDepartments);
    setDisabledSetButton(!disabledAddButton);
  };

  const dragStartHadler = (e) => {
    setCurrentCart(props);
  };

  const dragLeaveHadler = (e) => {};

  const dragEndHadler = (e) => {};

  const dragOverHadler = (e) => {
    e.preventDefault();
  };

  const dropHadler = () => {
    const newDepartments = departments.map((el) =>
      el.id === props.id
        ? { ...el, divisions: [...el.divisions, currentCart] }
        : el
    );
    
    setDepartments(newDepartments);
  };

  const navigateToDivisions = () => {
    setViewDivision(props.id)
      navigate("/divisions")
  }

  return (
    <div
      onDragStart={(e) => dragStartHadler(e)}
      onDragLeave={(e) => dragLeaveHadler(e)}
      onDragEnd={(e) => dragEndHadler(e)}
      onDragOver={(e) => dragOverHadler(e)}
      onDrop={(e) => dropHadler(e)}
      draggable={true}
      className="departmentCart"
    >
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
            <div>
              <button className="editBtn" onClick={switchChanges}>
                <EditIcon />
              </button>
              <button className="editBtn" onClick={navigateToDivisions}>
                <NextSvg />
              </button>
            </div>
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
