function toggle(botton){

    const sectionInvisible = document.getElementById(botton);
    const sectionLogin = document.getElementById('login');
    
    sectionInvisible.style.display = 'block';
    sectionLogin.style.display = 'none';

}

let contAliExpress = 0;
const arrayObjAliExpress = [
    {
        id: contAliExpress++,
        nameobj: 'CARICATORE WIRELESS PER APPLE WATCH',
        quantity: 124,
        price: 19.74,
        description: 'Orologio originale caricatore rapido magnetico tipo C per Apple Watch Series8 7 6 5 4 3 2 SE USB C cavo di ricarica rapida Wireless cavo Dock',
        date: new Date()
    },
    {
        id: contAliExpress++,
        nameobj: 'HARD DISK ESTERNO',
        quantity: 32,
        price: 40.15,
        description: '128TBUSB 3.0 hard disk esterno drive 2.5 pollici SSD accessori per computer SATA hard disk storage device desktop notebook universale',
        date: new Date()
    },
    {
        id: contAliExpress++,
        nameobj: 'OROLOGIO LIGE UOMO',
        quantity: 89,
        price: 153.06,
        description: 'LIGE uomini orologio Top Brand originale sport quarzo Mens orologi in acciaio pieno orologio da polso cronografo impermeabile da uomo Relogio Masculino',
        date: new Date()
    },
    {
        id: contAliExpress++,
        nameobj: 'CUFFIE BLUETOOTH WIRELESS',
        quantity: 356,
        price: 93.95,
        description: 'COWIN E7 cuffie Bluetooth Wireless con cancellazione attiva del rumore cuffie Bluetooth 5.0 con bassi profondi con microfono 30 ore di riproduzione',
        date: new Date()
    }
    
];

let contAmazon = 0;
const arrayObjAmazon = [
    {
        id: contAmazon++,
        nameobj: 'SONGMICS VASAGLE LIBRERIA SCAFFALE',
        quantity: 22,
        price: 62.99,
        description: 'Mobiletto Armadietto Mobile in Legno Pannelli di Particelle a 3 Ripiani 6 Scompartimenti Bianco LBC203D, ingegnerizzato, 65,5 x 30 x 97,5 cm',
        date: new Date()
    },
    {
        id: contAmazon++,
        nameobj: 'ASPIRAPOLVERE GREENOTE',
        quantity: 243,
        price: 229.99,
        description: 'Greenote Aspirapolvere Senza Fili, 23000PA Scopa Elettrica Senza Fili Potente 4 in 1, 200W Duale Motore Brushless con LED, 35 minuti di autonomia，Aspirapolvere portatile leggero per la casa',
        date: new Date()
    },
    {
        id: contAmazon++,
        nameobj: 'LAMPADA LED',
        quantity: 178,
        price: 29.99,
        description: 'Lampada da Scrivania LED Protezione Degli Occhi, lampada Touch Control Pieghevole per cameretta,ufficio, con porta di ricarica USB, 10 livelli di luminosità 5 modalità di illuminazione',
        date: new Date()
    },
    {
        id: contAmazon++,
        nameobj: 'MICRO SD 64 GB',
        quantity: 69,
        price: 49.96,
        description: 'MICRO-SDXC 64GB ADATA PREMIER ONE RETAIL, W/ADAPTER, BLACK/GOLD, R/275,WR/155',
        date: new Date()
    }
    
];

let contBarilla = 0;
const arrayObjBarilla = [
    {
        id: contBarilla++,
        nameobj: 'CASERECCE N°287 GR.500',
        quantity: 104,
        price: 1.39,
        description: 'Le Casarecce Barilla si presentano arrotolate su se stesse e incurvate verso la punta. Grazie alla loro superficie liscia e delicatamente porosa, permettono di raccogliere , esaltandone il sapore al palato.',
        date: new Date()
    },
    {
        id: contBarilla++,
        nameobj: 'GNOCCHETTI SARDI N°60 GR.500',
        quantity: 59,
        price: 1.18,
        description: 'La piccola dimensione degli Gnocchetti Sardi Barilla è studiata per dare una consistenza inimitabile, mentre la superficie rigata permette un perfetto legame con il sugo. Un primo piatto dal gusto inconfondibile e sempre appetitoso.',
        date: new Date()
    },
    {
        id: contBarilla++,
        nameobj: 'MEZZE PENNE RIGATE N°70 GR.500',
        quantity: 300,
        price: 1.19,
        description: 'Il segreto della bontà delle Mezze Penne Barilla? La selezione di grani duri pregiati coltivati in tutta Italia e una forma più corposa, studiata per dare alle Mezze Penne Barilla uno spessore equilibrato e straordinaria consistenza.',
        date: new Date()
    },
    {
        id: contBarilla++,
        nameobj: 'RIGATONI N°89 GR.500',
        quantity: 77,
        price: 1.20,
        description: 'Caratterizzati dalla rigatura sulla superficie esterna e dal diametro importante, i Rigatoni Barilla trattengono perfettamente il condimento su tutta la superficie, esterna ed interna, restituendone ogni sfumatura.',
        date: new Date()
    }
    
];

console.log(arrayObjAliExpress);
console.log(arrayObjAmazon);
console.log(arrayObjBarilla);



