const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { signCloreMessage } = require('../signer');

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

ipcMain.handle('sign', (_, data) => {
  const { wif, clore, evm } = data;
  return signCloreMessage(wif, clore, evm);
});

app.whenReady().then(createWindow);
