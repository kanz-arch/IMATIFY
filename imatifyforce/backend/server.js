const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())

// Serve questions folder statically for demo
app.use('/questions', express.static(path.join(__dirname, '..', 'questions')))

app.get('/api/ping', (req, res) => {
  res.json({ok:true, time: new Date()})
})

app.get("/api/status", (req, res) => {
  res.json({ status: "ok" });
});


// Admin upload placeholder (single file upload: replace a JSON)
const upload = multer({ dest: 'uploads/' })
app.post('/api/admin/upload', upload.single('file'), (req, res) => {
  // NOTE: In production, restrict this endpoint to admin users only.
  if(!req.file) return res.status(400).json({error:'No file uploaded'})
  // For demo, move file to questions/ (name kept as uploaded filename)
  const target = path.join(__dirname, '..', 'questions', req.file.originalname)
  fs.rename(req.file.path, target, (err) => {
    if(err) return res.status(500).json({error: 'File move failed'})
    res.json({ok:true, saved: `/questions/${req.file.originalname}`})
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log('Server running on', PORT))
