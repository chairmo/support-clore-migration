const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('clore', {
  sign: (data) => ipcRenderer.invoke('sign', data),
});
