import storage from 'local-storage-fallback';

const palette = {
    isDark: JSON.parse(storage.getItem('isDark')),
    colors:{
        nightColorBckg: '#272730',
        blueDay: '#487DE8',
        blueNight: '#2A4885',
        greenDay: '#44D471',
        greenNight: '#10752F',
        redDay: '#E65A5A',
        redNight: '#910C0C',
        grayDay: '#C4C4C4',
        grayNight: '#333333',
        white: '#F1F4F8',
        absoluteWhite: '#FFFFFF',
        black: '#1F1F1F',
        absoluteBlack: '#000000',
    }
};

export default palette;