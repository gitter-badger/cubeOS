const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow = null;

app.on('ready', _ => {
    console.log('Booting ...');
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        resizable: true
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.on('closed', _ => {
        mainWindow = null;
        console.log('Shutting Down ... ');
    });
});