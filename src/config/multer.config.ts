import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "D:/uploads"); // 📌 Cambia esta ruta si es necesario
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // 📌 Nombre único
    }
});

export const upload = multer({ storage });
