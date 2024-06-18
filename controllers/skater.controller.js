import * as modelSkater from "../models/skater.model.js"
import { generateToken, verifyToken } from "../utils/jwtoken.util.js"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const secretKey = process.env.SECRET_KEY

export const getAllSkaters = async (req, res) => {
    try {
        const skaters = await modelSkater.findAllUsersQuery()
        return res.render('index', { skaters })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const createSkater = async (req, res) => {
    try {
        const { email, nombre, password, password_repetida, anos_experiencia, especialidad } = req.body
        const estado = false

        // Verifica si todos los campos están presentes
        if (!email || !nombre || !password || !password_repetida || !anos_experiencia || !especialidad) {
            return res.status(400).json({ message: 'Todos los campos son requeridos' })
        }

        // Verifica que claves coincidan
        if (password !== password_repetida) {
            return res.status(401).send('Las contraseñas no coinciden!');
        }
        // Verifica si hay un archivo en la solicitud
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ message: 'No se ha subido ningun archivo' })
        }

        // Guardar archivo con imagen
        const file = req.files
        const image = file.foto
        const name = image.name
        const pathPhoto = `/assets/img/${name}`

        const uploadPath = path.join(__dirname, '../public/assets/img', name)
        await image.mv(uploadPath)

        await modelSkater.createUSerQuery(email, nombre, password, anos_experiencia, especialidad, pathPhoto, estado)
        return res.status(201).redirect("/")
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }

}

export const updateSkater = async (req, res) => {
    try {
        const skater = req.body
        const updateSkater = await modelSkater.updateUserQuery(skater)
        if (updateSkater) {
            res.status(200).send(updateSkater)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const removeSkater = async (req, res) => {
    try {
        const { id } = req.params
        const skater = await modelSkater.deleteUserQuery(id)
        if (skater) {
            res.status(200).send(skater)
        } else {
            res.status(404).send("Usuario no encontrado")
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const loginSkater = async (req, res) => {
    const { email, password } = req.body

    try {
        const skater = await modelSkater.findUserByEmailQuery(email)

        if (!skater) {
            return res.status(401).json({ error: 'Credenciales incorrectas.' })
        }

if (password !== skater.password) {
            return res.status(401).json({ error: 'Credenciales incorrectas.' })
        
        }
        const token = generateToken({ skaterId: skater.id }, secretKey, "5h")
        return res.json(token)
    } catch (err) {
        res.status(500).json({ error: 'Error en el servidor.' })
    }
}

export const dataSkater = async (req, res) => {

    const { token } = req.query
    try {
        const decoded = await verifyToken(token, secretKey)
        const skaterId = decoded.skaterId;
        const skater = await modelSkater.findUserByIdQuery(skaterId)
        if (!skater) {
            return res.status(401).json({
                error: "401 Unauthorized",
                message: "Usuario no autorizado."
            })
        }
        return res.render('datos', { skater })
    }
    catch (err) {
        res.status(401).json({
            error: "401 Unauthorized",
            message: "Token inválido."
        })
    }
}

export const adminSkaters = async (req, res) => {
    try {
        const skaters = await modelSkater.findAllUsersQuery()
        return res.render('admin', { skaters })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }

}

export const statusSkater = async (req, res) => {
    try {
        const { id, estado } = req.body;

        const skater = await modelSkater.updateStatusQuery(id, estado)

        return res.status(200).json({ ok: true, msg: "Cuenta actualizada con éxito" })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
}
