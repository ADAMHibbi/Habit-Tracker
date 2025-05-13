// This script will start a simple static server to serve our HTML, CSS, and JS files
import { spawn } from 'child_process';

// Start the serve command with the appropriate options
const serveProcess = spawn('npx', ['serve', '.', '-p', '3000'], {
  stdio: 'inherit',
  shell: true
});

console.log('Starting website server on port 3000...');

// Handle process exit
serveProcess.on('close', (code) => {
  console.log(`Website server process exited with code ${code}`);
});

// Handle errors
serveProcess.on('error', (err) => {
  console.error('Failed to start website server:', err);
});