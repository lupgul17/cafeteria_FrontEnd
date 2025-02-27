import axios from "axios";

const API_URL = "https://cafeteriabackend-prueba.up.railway.app"; // Backend en Railway

export const obtenerAlumno = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/alumnos/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo alumno:", error);
        return null;
    }
};

export const registrarConsumo = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/registrar_consumo`, data);
        return response.data;
    } catch (error) {
        console.error("Error registrando consumo:", error);
        return null;
    }
};
