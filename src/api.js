import axios from "axios";

const API_URL = "https://cafeteriabackend-prueba.up.railway.app"; // Backend en Railway

// Obtener información de un alumno por ID
export const obtenerAlumno = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/alumnos/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo alumno:", error);
        return null;
    }
};

// Registrar consumo
export const registrarConsumo = async (id_alumno) => {
    try {
        const response = await axios.post(`${API_URL}/registrar_consumo`, { id_alumno });
        return response.data;
    } catch (error) {
        console.error("Error registrando consumo:", error);
        return null;
    }
};
