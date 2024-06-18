import express from "express"
import "dotenv/config"
import { engine } from "express-handlebars"
import fileUploadConfig from "./utils/fileUploadConfig.js"
import routeSkater from "./routes/skater.route.js"

const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'));

app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(fileUploadConfig)
app.use("/", routeSkater)


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    });
