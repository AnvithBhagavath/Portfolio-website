const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());
app.use(express.json());

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // We overwrite the existing resume.pdf
    cb(null, 'resume.pdf');
  }
});

const fileFilter = (req, file, cb) => {
  // Allow only PDF files
  const filetypes = /pdf/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Only PDF files are allowed!'), false);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: fileFilter
});

// Endpoint to check if resume exists and download it
app.get('/api/resume', (req, res) => {
  const filePath = path.join(uploadsDir, 'resume.pdf');
  
  if (fs.existsSync(filePath)) {
    res.download(filePath, 'resume.pdf', (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        if (!res.headersSent) {
          res.status(500).json({ message: 'Error downloading resume' });
        }
      }
    });
  } else {
    res.status(404).json({ message: 'No resume uploaded yet. Please use the upload feature to add a resume.' });
  }
});

// Endpoint to check if resume exists (meta status)
app.get('/api/resume/status', (req, res) => {
  const filePath = path.join(uploadsDir, 'resume.pdf');
  const exists = fs.existsSync(filePath);
  
  res.json({
    exists: exists,
    filename: exists ? 'resume.pdf' : null,
    updatedAt: exists ? fs.statSync(filePath).mtime : null
  });
});

// Endpoint to upload a new resume
app.post('/api/resume/upload', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Please select a file to upload.' });
  }

  res.json({
    message: 'Resume uploaded successfully!',
    file: req.file
  });
}, (error, req, res, next) => {
  // Error handler for multer errors
  res.status(400).json({ message: error.message });
});

// Serve frontend static build if integrated, or welcome message
app.get('/', (req, res) => {
  res.json({ message: 'Windows Portfolio Backend is running.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
