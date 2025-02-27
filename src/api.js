import axios from "axios";

const API_URL = "https://cafeteriabackend-prueba.up.railway.app"; // Backend en Railway

export const obtenerAlumnos = async () => {
    try {
        const response = await axios.get(`${API_URL}/alumnos`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo alumnos:", error);
        return [];
    }
};

export const registrarConsumo = async (idAlumno) => {
    try {
        const fechaHoy = new Date().toISOString().split("T")[0]; // Fecha actual en formato YYYY-MM-DD
        await axios.post(`${API_URL}/registrar_consumo`, {
            id_alumno: idAlumno,
            id_paquete: 1, // Suponiendo que el paquete tiene ID 1
            fecha: fechaHoy
        });
        return true;
    } catch (error) {
        console.error("Error registrando consumo:", error);
        return false;
    }
};
