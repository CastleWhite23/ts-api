import express, {Request, Response} from 'express'

const app = express()
const PORT =  process.env.PORT || 8081

app.get('/', (req: Request, res: Response)=>{
    res.send('oie')
})


app.listen(PORT, ()=>{
    console.log(`Running in http://localhost:${PORT}`)
})