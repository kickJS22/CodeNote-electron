const {app, BrowserWindow, Menu} = require('electron');


const createWindow = () => {
    win = new BrowserWindow ({
        width: 600,
        height: 800,
        icon: ".//CN.ico",
        'autoHideMenuBar': 'true',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile('index.html');
    
}


app.whenReady().then(()=>{
    createWindow();
    
})
