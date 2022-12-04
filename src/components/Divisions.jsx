import "../App.css";
import React from "react";
import moment from "moment";
import { useContext } from "react";
import { MainContext } from "../context";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackSvg } from "../image/BackSvg.svg";
import { useEffect } from "react";

export default function Divisions(props) {
  const { viewDivision, departments } = useContext(MainContext);
  const navigate = useNavigate()

  useEffect(() => {
    !viewDivision && navigate("/")
  })

  return (
    <div className="container">
      <div className="addBlock" onClick={() => navigate("/")}>
        <BackSvg />
      </div>
      {departments[viewDivision - 1].divisions.map((el) => (
        <div className="departmentCart" key={moment().format("LTS")}>
          <div className="header">
            <p className="departmentName">{el.departmentName}</p>
          </div>

          <div className="directorBlock">
            <span className="title">Руководитель</span>
            <p className="directorName">{el.directorName}</p>
          </div>

          <div className="employeesBlock">
            <span className="title">Количечтво сотрудников</span>
            <p className="employeesNum">{el.employeesNum}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
