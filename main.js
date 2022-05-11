
const Electron = require('electron');
const App = Electron.app;
const BrowserWindow = Electron.BrowserWindow;
const Menu = Electron.Menu;

let mainWindow;

App.on('window-all-closed', () => {
    if(process.platform !== 'darwin') App.quit();
})

App.on('ready', () => {
    Menu.setApplicationMenu(null);
    mainWindow = new BrowserWindow({
        width: 1200, 
        height: 600,
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on('closed', () => {
        mainWindow = undefined;
    })
})