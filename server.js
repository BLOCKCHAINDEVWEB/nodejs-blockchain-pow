import dotenv from 'dotenv'
import path from 'path'
import express from 'express'

const app = express()

app.use(express.json())
app.use('/', express.static(path.join(__dirname, './src')))

dotenv.config({ path: path.join(__dirname, './.env') })

app.get('/*',(req, res)=>{
  res.sendFile(path.join(__dirname, 'src', 'index.html'))
})

const PORT = process.env.ENV_PORT || 8080
app.listen(PORT, console.log(`listen on http://localhost:${PORT}`))

export default app
