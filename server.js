const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const multer = require('multer')

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    console.log('filename')
    cb(null, file.originalname)
  },
  destination: function (req, file, cb) {
    console.log('storage')
    cb(null, './uploads')
  },
})

const upload = multer({ storage })


app.use(cors())

app.get('/', (req, res) => {
  res.json('Hello World')
})

app.post('/upload_files', upload.single('file'), (req, res) => {
  
  console.log('FILE DATA: ', req.file)
  res.send({ message: 'Successfully uploaded files' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
