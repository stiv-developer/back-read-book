import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Definir la ruta absoluta donde se guardarán los archivos
const uploadDir = 'D:/uploads';

// Crear la carpeta si no existe
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuración de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Guardar en D:/uploads
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Nombre único para evitar conflictos
    }
});

const upload = multer({ storage });

export default upload;
