const os = require('os');

const getChromePath = () => {
  const platform = os.platform();
  
  if (platform === 'darwin') {
    return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  } else if (platform === 'win32') {
    return 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  } else {
    // Linux - let Puppeteer find it automatically
    return undefined;
  }
};

module.exports = {
    launch: {
      headless: process.env.HEADLESS !== 'false',
      executablePath: getChromePath(),
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    },
    server: {
      command: 'bun run serve',
      port: 3113
    }
  }