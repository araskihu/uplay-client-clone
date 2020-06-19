// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, Tray} = require('electron');
const path = require('path');
const url = require('url');

require('electron-reload')(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`../node_modules/electron`)
});

let mainWindow;
let tray;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 960,
    minWidth: 960,
    height: 600,
    minHeight: 600,
    frame: false,
    icon: path.join(__dirname, '../public/logo_400x400x2.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  });

  //mainWindow.setMenu(null);

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '../public/index.html'),
    hash: 'baz',
    protocol: 'file',
    slashes: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL(startUrl);
  //mainWindow.webContents.openDevTools();

  //disable devtools open
  //mainWindow.webContents.on("devtools-opened", () => { mainWindow.webContents.closeDevTools(); });
}

function openFromTray() {
  mainWindow.show();
  tray.destroy();
}

function sendToTray() {
  if(tray !== null) {
    tray = new Tray(path.join(__dirname, '../public/logo_400x400x2.png'));
    tray.setToolTip('Uplay Clone');

    tray.on('double-click', () => {
      openFromTray();
    });

    tray.on('right-click', () => {
      const contextMenu = Menu.buildFromTemplate([
        { label: 'Open', click: function () { openFromTray(); } },
        { label: 'Close', click: function() { app.isQuiting = true; app.quit(); } }
      ]);
      tray.setContextMenu(contextMenu);
    });
  }
  mainWindow.hide();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
  
  mainWindow.on('close', (event) => {
    if(!app.isQuiting){
        event.preventDefault();
        sendToTray();
    }

    return false;
  });
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
