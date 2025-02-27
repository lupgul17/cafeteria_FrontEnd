import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { obtenerAlumno, registrarConsumo } from "./api";

function QRScanner() {
    const [scanResult, setScanResult] = useState(null);
    const [alumno, setAlumno] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            "qr-reader",
            { fps: 10, qrbox: { width: 250, height: 250 } },
            false
        );

        scanner.render(
            async (data) => {
                scanner.clear();
                const idAlumno = parseInt(data.split("/").pop()); // Convertir a número
                setScanResult(idAlumno);

                // Obtener datos del alumno
                const datosAlumno = await obtenerAlumno(idAlumno);
                if (datosAlumno && datosAlumno.nombre) {
                    setAlumno(datosAlumno);

                    // Aquí obtenemos el paquete asociado al alumno (ejemplo: paquete fijo o asignado en BD)
                    const idPaquete = 1;  // 👈 Asegúrate de tener el id del paquete

                    // Registrar el consumo con los valores correctos
                    const registrado = await registrarConsumo(idAlumno, idPaquete);
                    if (registrado) {
                        alert(`✅ Consumo registrado para ${datosAlumno.nombre} ${datosAlumno.apellido}`);
                    } else {
                        alert("❌ Error registrando el consumo.");
                    }
                } else {
                    alert("⚠️ No se encontró información del alumno.");
                }
            },
            (err) => console.error(err)
        );

        return () => scanner.clear();
    }, []);

    return (
        <div className="scanner-container">
            <h2>Escanear Código QR</h2>
            <div id="qr-reader"></div>
            {scanResult && <p>📌 Alumno ID: {scanResult}</p>}
            {alumno && (
                <div className="alumno-info">
                    <h3>Información del Alumno</h3>
                    <p>👤 Nombre: {alumno.nombre} {alumno.apellido}</p>
                    <p>📚 Grado: {alumno.grado}</p>
                </div>
            )}
        </div>
    );
}

export default QRScanner;
