import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'
import phoneRoutes from './routes/phoneRoutes.js'
import ultrabookRoutes from './routes/ultrabookRoutes.js'
import watchRoutes from './routes/watchRoutes.js'
import tabletRoutes from './routes/tabletRoutes.js'
import accessoryRoutes from './routes/accessoryRoutes.js'

dotenv.config();
connectDB();

const app = express();
app.use(express.json())

// set limit in send file from req (fe img)
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(cors())

app.get('/', (req,res) => {
  res.send('Api is running')
})

app.use('/api/products', productRoutes)
app.use('/api/phones', phoneRoutes)
app.use('/api/ultrabooks', ultrabookRoutes)
app.use('/api/watches', watchRoutes)
app.use('/api/tablets', tabletRoutes)
app.use('/api/accessories', accessoryRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
))