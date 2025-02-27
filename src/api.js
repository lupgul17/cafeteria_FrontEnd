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
export const registrarConsumo = async (id_alumno, id_paquete) => {
    try {
        console.log("📤 Enviando datos:", id_alumno, id_paquete); // 👀 Verifica en la consola

        const response = await axios.post(
            "https://cafeteriabackend-prueba.up.railway.app/registrar_consumo",
            {
                id_alumno: Number(id_alumno),  // Convertir a número
                id_paquete: Number(id_paquete),  // Convertir a número
                fecha: new Date().toISOString().split("T")[0]  // Fecha actual
            }
        );
        return response.data;
    } catch (error) {
        console.error("❌ Error registrando consumo:", error);
        return null;
    }
};


