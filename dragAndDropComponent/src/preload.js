const {ipcRenderer,contextBridge} = require("electron");

const api = {
    isFile: (path) => ipcRenderer.invoke("is-file",path),
}

contextBridge.exposeInMainWorld("api",api);