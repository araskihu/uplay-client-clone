const customTitlebar = require('custom-electron-titlebar');

let titlebar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#121519'),
    icon: './src/img/Uplay_Logo.png',
    menu: null,
    drag: true,
    minimizable: true,
    unfocusEffect: false,
});