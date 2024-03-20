import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Attendance.css";

function CreateAttendance() {
	const registros = [
		{
			id: 1,
			td: "-----",
			numeroIdentificacion: "------",
			nombres: "------",
			apellidos: "------",
			estado: "------",
		},
		{
			id: 2,
			td: "-----",
			numeroIdentificacion: "------",
			nombres: "------",
			apellidos: "------",
			estado: "------",
		},
	];

	const [selectedIcons, setSelectedIcons] = useState(
		new Array(registros.length).fill(null)
	);

	const handleIconClick = (index, icon) => {
		const newSelectedIcons = [...selectedIcons]; // Copia el array de estado actual
		newSelectedIcons[index] = icon; // Actualiza el estado de selección para la fila correspondiente
		setSelectedIcons(newSelectedIcons); // Actualiza el estado con el nuevo array
	};

	return (
		<div className="toma-de-asistencia">
			<h1>INFORME SEGUIMIENTO - FICHA 1234567</h1>
			<div className="informacion">
				<div className="info-row">
					<div className="info-box">
						<p className="info-title">FICHA</p>
						<p className="info-value">1234567</p>
					</div>
					<div className="info-box">
						<p className="info-title">JORNADA</p>
						<p className="info-value">-----</p>
					</div>
					<div className="info-box">
						<p className="info-title">FASE</p>
						<p className="info-value">--</p>
					</div>
					<div className="info-box">
						<p className="info-title">INSTRUCTOR TÉCNICO</p>
						<p className="info-value">------- ----</p>
					</div>
				</div>
				<div className="info-row">
					<div className="info-box">
						<p className="info-title">FECHA</p>
						<input type="date" className="inputDate" />
					</div>
					<div className="info-box">
						<p className="info-title">COMPONENTE</p>
						<select className="input">
							<option disabled selected>
								Selecciona el componente
							</option>
							<option value="Ingles">Ingles</option>
							<option value="POO">POO</option>
							<option value="Ciencias">Ciencias</option>
						</select>
					</div>
					<div className="info-box">
						<p className="info-title">INSTRUCTOR</p>
						<select className="input">
							<option disabled selected>
								Selecciona tu nombre
							</option>
							<option value="Miguel">Miguel</option>
							<option value="Luis">Luis</option>
							<option value="Nicolas">Nicolas</option>
						</select>
					</div>
				</div>
			</div>
			<div className="lista-asistencia">
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>TD</th>
							<th>NÚMERO DE IDENTIFICACIÓN</th>
							<th>NOMBRES</th>
							<th>APELLIDOS</th>
							<th>ESTADO / NOVEDAD</th>
							<th>ASISTENCIA</th>
						</tr>
					</thead>
					<tbody>
						{/* Itera sobre los registros de la tabla */}
						{registros.map((registro, index) => (
							<tr key={index}>
								<td>{registro.id}</td>
								<td>{registro.td}</td>
								<td>{registro.numeroIdentificacion}</td>
								<td>{registro.nombres}</td>
								<td>{registro.apellidos}</td>
								<td>{registro.estado}</td>
								<td className="fa-icon">
									<td>
										<FontAwesomeIcon
											icon={faCheck}
											className={`fa-check ${
												selectedIcons[index] === "check"
													? "selected-icon"
													: "unselected-icon"
											}`}
											onClick={() => handleIconClick(index, "check")}
										/>
									</td>
									<td>
										<FontAwesomeIcon
											icon={faTimes}
											className={`fa-times ${
												selectedIcons[index] === "times"
													? "selected-icon"
													: "unselected-icon"
											}`}
											onClick={() => handleIconClick(index, "times")}
										/>
									</td>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="botones">
					<button className="cancelar">Cancelar</button>
					<button className="guardar">Guardar Asistencia</button>
				</div>
			</div>
		</div>
	);
}

export default CreateAttendance;
