import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { NavLink } from "react-router-dom";
import "./Attendance.css";

function Attendance() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [isValidLocation, setIsValidLocation] = useState(false);
  const [isRegisterAttendance, setIsRegisterAttendance] = useState(false);
  const [registerAttendance, setRegisterAttendance] = useState(false);
  const [isRecords, setIsRecords] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState(false);
  const cookies = new Cookies();
  const API_URL = import.meta.env.VITE_API_URL;
  // Coordenadas objetivo
  const targetLocation = { latitude: 19.3233626, longitude: -99.1855106 };

  useEffect(() => {
    fetch(`${API_URL}/attendance/${cookies.get("id")}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setIsRecords(
            `<span class="profile-container__content--message error">${data.error} </span>`
          );
          return;
        }
        if (data.length > 0) {
          setIsRecords(false);
          setAttendanceRecords(data);
        } else {
          setIsRecords(
            `<span class="profile-container__content--message">No hay registros de asistencia</span>`
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setIsRecords(
          `<span class="profile-container__content--message error">Ocurrió un error inesperado. Intente más tarde.</span>`
        );
      });
  }, []);

  const sendAttendance = () => {
    const formData = {
      userid: cookies.get("id"),
      latitude: location.latitude,
      longitude: location.longitude,
    };

    const dataJSON = JSON.stringify(formData);

    const options = {
      method: "POST",
      body: dataJSON,
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${API_URL}/attendance`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setIsRegisterAttendance("error");
          setRegisterAttendance(
            `<span class="profile-container__content--message error">${data.error} </span>`
          );
          return;
        }
        setIsRegisterAttendance("success");
        setRegisterAttendance(
          `<span class="profile-container__content--message success">${data.message} </span>`
        );
      })
      .catch((error) => {
        console.log(error);
        setIsRegisterAttendance("error");
        setRegisterAttendance(
          `<span class="profile-container__content--message error">Ocurrió un error inesperado. Intente más tarde.</span>`
        );
      });
  };

  // Función para calcular la distancia entre dos puntos usando la fórmula de Haversine
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  // Verificación combinada de rango de tiempo y distancia
  const validateLocationAndTime = (userLatitude, userLongitude) => {
    const now = new Date();
    const startTime = new Date("2024-11-05T08:00:00");
    const endTime = new Date("2024-11-08T19:00:00");
    const distance = calculateDistance(
      userLatitude,
      userLongitude,
      targetLocation.latitude,
      targetLocation.longitude
    );
    console.log(`Tiempo actual: ${now}, Inicio: ${startTime}, Fin: ${endTime}`);
    // Comprobar si está en rango de 1 km y en el rango de tiempo
    if (distance <= 2 && now >= startTime && now <= endTime) {
      setIsValidLocation(true);
    } else {
      setIsValidLocation(false);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(userLocation);
          setError(null);

          // Validar ubicación y tiempo
          validateLocationAndTime(
            userLocation.latitude,
            userLocation.longitude
          );
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("La geolocalización no es compatible con este navegador.");
    }
  };

  const googleMapsLink =
    location.latitude && location.longitude
      ? `https://www.google.com/maps?q=${location.latitude},${location.longitude}`
      : null;

  const formattedDate = (fecha) => {
    const dateObject = new Date(fecha);

    return new Intl.DateTimeFormat("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Mexico_City",
    }).format(dateObject);
  };

  return (
    <div className="attendance-container">
      <header className="profile-container__header">
        {cookies.get("id") !== undefined ? (
          <p>
            <NavLink to="/logout/">Cerrar sesión</NavLink>
          </p>
        ) : null}
      </header>
      <h1>Registro de asistencia</h1>
      {cookies.get("id") !== undefined ? (
        <div className="profile-container__content">
          <p>
            Presiona el botón para obtener tu ubicación y registrar tu
            asistencia.
          </p>
          <button onClick={getLocation}>Obtener ubicación</button>
          {location.latitude && location.longitude ? (
            <div>
              {isValidLocation ? (
                <button onClick={sendAttendance}>Registrar asistencia</button>
              ) : (
                <p className="profile-container__content--message error">
                  No se pudo registrar la asistencia.<br></br>Se encuentra fuera
                  de rango o fuera de tiempo.
                </p>
              )}
              {isRegisterAttendance != false ? (
                <p dangerouslySetInnerHTML={{ __html: registerAttendance }}></p>
              ) : null}
              <p>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-container__content--gmaps"
                >
                  Abrir ubicación en Google Maps
                </a>
              </p>
            </div>
          ) : (
            <p>Ubicación no disponible</p>
          )}
          {error && <p>Error: {error}</p>}
          <div className="profile-container__content--records">
            <h2>Registros realizados</h2>
            {isRecords ? (
              <p dangerouslySetInnerHTML={{ __html: isRecords }}></p>
            ) : null}
            {attendanceRecords ? (
              <table>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Ubicación</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceRecords.map((record) => (
                    <tr key={record.id}>
                      <td>{formattedDate(record.createdAt)}</td>
                      <td>
                        <a
                          href={`https://www.google.com/maps?q=${record.latitude},${record.longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver ubicación
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      ) : (
        <p className="attendance-container__nosession">
          Para registrar tu asistencia, inicia sesión.
        </p>
      )}
    </div>
  );
}

export default Attendance;
