import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve index.html as the default page
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Website server running at http://0.0.0.0:${PORT}`);
});