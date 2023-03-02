let contTabAliExpress = 0;
let contTabAmazon = 0;
let contTabBarilla = 0;

function toggle(idSection){

    const sectionInvisible = document.getElementById(idSection);
    const sectionLogin = document.getElementById('login');
    
    let arrayToIterate = [];
    let tableId;
    let visibleTab;

    switch(idSection){
        case 'aliExpress': {
            arrayToIterate = arrayObjAliExpress;
            tableId = 'aliExpressTab';
            contTabAliExpress++;
            visibleTab = true;
            break;
        }

        case 'amazon': {
            arrayToIterate = arrayObjAmazon;
            tableId = 'amazonTab';
            contTabAmazon++;
            visibleTab = true;
            break;
        }

        case 'barilla': {
            arrayToIterate = arrayObjBarilla;
            tableId = 'barillaTab';
            contTabBarilla++;
            visibleTab = true;
            break;
        }
    }

    if(visibleTab) {
        for(let i = 0; i<arrayToIterate.length; i++) {
                createRow(arrayToIterate, i, tableId);
                visibleTab = false;
            }
    }
    
    
    sectionInvisible.style.display = 'block';
    sectionLogin.style.display = 'none';

}

function createRow(arrayToShow, index, tableId){

    const table = document.getElementById(tableId);
    const row = document.createElement('tr');
    const idRow = document.createElement('td');
    const nameRow = document.createElement('td');
    const quantityRow = document.createElement('td');
    const priceRow = document.createElement('td');
    const descriptionRow = document.createElement('td');
    const dateRow = document.createElement('td');
    const iconRow = document.createElement('td');
    const iconEdit = document.createElement('i');
    iconEdit.setAttribute('class', 'fas fa-edit');
    const iconTrash = document.createElement('i');
    iconTrash.setAttribute('class', 'fas fa-trash-alt');

    idRow.innerText = arrayToShow[index].id;
    nameRow.innerText = arrayToShow[index].name;
    quantityRow.innerText = arrayToShow[index].quantity;
    priceRow.innerText = arrayToShow[index].price;
    descriptionRow.innerText = arrayToShow[index].description;
    dateRow.innerText = arrayToShow[index].date;


    row.appendChild(idRow);
    row.appendChild(nameRow);
    row.appendChild(quantityRow);
    row.appendChild(priceRow);
    row.appendChild(descriptionRow);
    row.appendChild(dateRow);

    iconRow.appendChild(iconEdit);
    iconRow.appendChild(iconTrash);
    
    row.appendChild(iconRow);

    table.appendChild(row);
        
    
}

function home(idSection){

    const sectionToMakeInvisible = document.getElementById(idSection);
    const sectionLogin = document.getElementById('login');

    sectionLogin.style.display = 'block';
    sectionToMakeInvisible.style.display = 'none';

}

let contAliExpress = 0;
const arrayObjAliExpress = [
    {
        id: contAliExpress++,
        name: 'CARICATORE WIRELESS PER APPLE WATCH',
        quantity: 124,
        price: 19.74,
        description: 'Orologio originale caricatore rapido magnetico tipo C per Apple Watch Series8 7 6 5 4 3 2 SE USB C cavo di ricarica rapida Wireless cavo Dock',
        date: new Date()
    },
    {
        id: contAliExpress++,
        name: 'HARD DISK ESTERNO',
        quantity: 32,
        price: 40.15,
        description: '128TBUSB 3.0 hard disk esterno drive 2.5 pollici SSD accessori per computer SATA hard disk storage device desktop notebook universale',
        date: new Date()
    },
    {
        id: contAliExpress++,
        name: 'OROLOGIO LIGE UOMO',
        quantity: 89,
        price: 153.06,
        description: 'LIGE uomini orologio Top Brand originale sport quarzo Mens orologi in acciaio pieno orologio da polso cronografo impermeabile da uomo Relogio Masculino',
        date: new Date()
    },
    {
        id: contAliExpress++,
        name: 'CUFFIE BLUETOOTH WIRELESS',
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
        name: 'SONGMICS VASAGLE LIBRERIA SCAFFALE',
        quantity: 22,
        price: 62.99,
        description: 'Mobiletto Armadietto Mobile in Legno Pannelli di Particelle a 3 Ripiani 6 Scompartimenti Bianco LBC203D, ingegnerizzato, 65,5 x 30 x 97,5 cm',
        date: new Date()
    },
    {
        id: contAmazon++,
        name: 'ASPIRAPOLVERE GREENOTE',
        quantity: 243,
        price: 229.99,
        description: 'Greenote Aspirapolvere Senza Fili, 23000PA Scopa Elettrica Senza Fili Potente 4 in 1, 200W Duale Motore Brushless con LED, 35 minuti di autonomia，Aspirapolvere portatile leggero per la casa',
        date: new Date()
    },
    {
        id: contAmazon++,
        name: 'LAMPADA LED',
        quantity: 178,
        price: 29.99,
        description: 'Lampada da Scrivania LED Protezione Degli Occhi, lampada Touch Control Pieghevole per cameretta,ufficio, con porta di ricarica USB, 10 livelli di luminosità 5 modalità di illuminazione',
        date: new Date()
    },
    {
        id: contAmazon++,
        name: 'MICRO SD 64 GB',
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
        name: 'CASERECCE N°287 GR.500',
        quantity: 104,
        price: 1.39,
        description: 'Le Casarecce Barilla si presentano arrotolate su se stesse e incurvate verso la punta. Grazie alla loro superficie liscia e delicatamente porosa, permettono di raccogliere , esaltandone il sapore al palato.',
        date: new Date()
    },
    {
        id: contBarilla++,
        name: 'GNOCCHETTI SARDI N°60 GR.500',
        quantity: 59,
        price: 1.18,
        description: 'La piccola dimensione degli Gnocchetti Sardi Barilla è studiata per dare una consistenza inimitabile, mentre la superficie rigata permette un perfetto legame con il sugo. Un primo piatto dal gusto inconfondibile e sempre appetitoso.',
        date: new Date()
    },
    {
        id: contBarilla++,
        name: 'MEZZE PENNE RIGATE N°70 GR.500',
        quantity: 300,
        price: 1.19,
        description: 'Il segreto della bontà delle Mezze Penne Barilla? La selezione di grani duri pregiati coltivati in tutta Italia e una forma più corposa, studiata per dare alle Mezze Penne Barilla uno spessore equilibrato e straordinaria consistenza.',
        date: new Date()
    },
    {
        id: contBarilla++,
        name: 'RIGATONI N°89 GR.500',
        quantity: 77,
        price: 1.20,
        description: 'Caratterizzati dalla rigatura sulla superficie esterna e dal diametro importante, i Rigatoni Barilla trattengono perfettamente il condimento su tutta la superficie, esterna ed interna, restituendone ogni sfumatura.',
        date: new Date()
    }
    
];

console.log(arrayObjAliExpress);
console.log(arrayObjAmazon);
console.log(arrayObjBarilla);



