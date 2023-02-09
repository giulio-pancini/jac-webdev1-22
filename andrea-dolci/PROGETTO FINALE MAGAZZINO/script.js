function toggle(idSection){

    const sectionInvisible = document.getElementById(idSection);
    const sectionLogin = document.getElementById('login');
    
    //RIEMPIO TABELLA ALIEXPRESS CON DATI ARRAY
    const objFirstIdAliExpress = document.getElementById('id1-aliExpress');
    const objFirstNameAliExpress = document.getElementById('name1-aliExpress');
    const objFirstQuantityAliExpress = document.getElementById('quantity1-aliExpress');
    const objFirstPriceAliExpress = document.getElementById('price1-aliExpress');
    const objFirstDescriptionAliExpress = document.getElementById('description1-aliExpress');
    const objFirstDateAliExpress = document.getElementById('date1-aliExpress');

    objFirstIdAliExpress.innerText = arrayObjAliExpress[0].id;
    objFirstNameAliExpress.innerText = arrayObjAliExpress[0].name;
    objFirstQuantityAliExpress.innerText = arrayObjAliExpress[0].quantity;
    objFirstPriceAliExpress.innerText = arrayObjAliExpress[0].price;
    objFirstDescriptionAliExpress.innerText = arrayObjAliExpress[0].description;
    objFirstDateAliExpress.innerText = arrayObjAliExpress[0].date;
    
    
    const objSecondIdAliExpress = document.getElementById('id2-aliExpress');
    const objSecondNameAliExpress = document.getElementById('name2-aliExpress');
    const objSecondQuantityAliExpress = document.getElementById('quantity2-aliExpress');
    const objSecondPriceAliExpress = document.getElementById('price2-aliExpress');
    const objSecondDescriptionAliExpress = document.getElementById('description2-aliExpress');
    const objSecondDateAliExpress = document.getElementById('date2-aliExpress');

    objSecondIdAliExpress.innerText = arrayObjAliExpress[1].id;
    objSecondNameAliExpress.innerText = arrayObjAliExpress[1].name;
    objSecondQuantityAliExpress.innerText = arrayObjAliExpress[1].quantity;
    objSecondPriceAliExpress.innerText = arrayObjAliExpress[1].price;
    objSecondDescriptionAliExpress.innerText = arrayObjAliExpress[1].description;
    objSecondDateAliExpress.innerText = arrayObjAliExpress[1].date;
    

    const objThirdIdAliExpress = document.getElementById('id3-aliExpress');
    const objThirdNameAliExpress = document.getElementById('name3-aliExpress');
    const objThirdQuantityAliExpress = document.getElementById('quantity3-aliExpress');
    const objThirdPriceAliExpress = document.getElementById('price3-aliExpress');
    const objThirdDescriptionAliExpress = document.getElementById('description3-aliExpress');
    const objThirdDateAliExpress = document.getElementById('date3-aliExpress');

    objThirdIdAliExpress.innerText = arrayObjAliExpress[2].id;
    objThirdNameAliExpress.innerText = arrayObjAliExpress[2].name;
    objThirdQuantityAliExpress.innerText = arrayObjAliExpress[2].quantity;
    objThirdPriceAliExpress.innerText = arrayObjAliExpress[2].price;
    objThirdDescriptionAliExpress.innerText = arrayObjAliExpress[2].description;
    objThirdDateAliExpress.innerText = arrayObjAliExpress[2].date;


    const objFourthIdAliExpress = document.getElementById('id4-aliExpress');
    const objFourthNameAliExpress = document.getElementById('name4-aliExpress');
    const objFourthQuantityAliExpress = document.getElementById('quantity4-aliExpress');
    const objFourthPriceAliExpress = document.getElementById('price4-aliExpress');
    const objFourthDescriptionAliExpress = document.getElementById('description4-aliExpress');
    const objFourthDateAliExpress = document.getElementById('date4-aliExpress');

    objFourthIdAliExpress.innerText = arrayObjAliExpress[3].id;
    objFourthNameAliExpress.innerText = arrayObjAliExpress[3].name;
    objFourthQuantityAliExpress.innerText = arrayObjAliExpress[3].quantity;
    objFourthPriceAliExpress.innerText = arrayObjAliExpress[3].price;
    objFourthDescriptionAliExpress.innerText = arrayObjAliExpress[3].description;
    objFourthDateAliExpress.innerText = arrayObjAliExpress[3].date;



    //RIEMPIO TABELLA AMAZON CON DATI ARRAY
    const objFirstIdAmazon = document.getElementById('id1-amazon');
    const objFirstNameAmazon = document.getElementById('name1-amazon');
    const objFirstQuantityAmazon = document.getElementById('quantity1-amazon');
    const objFirstPriceAmazon = document.getElementById('price1-amazon');
    const objFirstDescriptionAmazon = document.getElementById('description1-amazon');
    const objFirstDateAmazon = document.getElementById('date1-amazon');

    objFirstIdAmazon.innerText = arrayObjAmazon[0].id;
    objFirstNameAmazon.innerText = arrayObjAmazon[0].name;
    objFirstQuantityAmazon.innerText = arrayObjAmazon[0].quantity;
    objFirstPriceAmazon.innerText = arrayObjAmazon[0].price;
    objFirstDescriptionAmazon.innerText = arrayObjAmazon[0].description;
    objFirstDateAmazon.innerText = arrayObjAmazon[0].date;
    
    
    const objSecondIdAmazon = document.getElementById('id2-amazon');
    const objSecondNameAmazon = document.getElementById('name2-amazon');
    const objSecondQuantityAmazon = document.getElementById('quantity2-amazon');
    const objSecondPriceAmazon = document.getElementById('price2-amazon');
    const objSecondDescriptionAmazon = document.getElementById('description2-amazon');
    const objSecondDateAmazon = document.getElementById('date2-amazon');

    objSecondIdAmazon.innerText = arrayObjAmazon[1].id;
    objSecondNameAmazon.innerText = arrayObjAmazon[1].name;
    objSecondQuantityAmazon.innerText = arrayObjAmazon[1].quantity;
    objSecondPriceAmazon.innerText = arrayObjAmazon[1].price;
    objSecondDescriptionAmazon.innerText = arrayObjAmazon[1].description;
    objSecondDateAmazon.innerText = arrayObjAmazon[1].date;
    

    const objThirdIdAmazon = document.getElementById('id3-amazon');
    const objThirdNameAmazon = document.getElementById('name3-amazon');
    const objThirdQuantityAmazon = document.getElementById('quantity3-amazon');
    const objThirdPriceAmazon = document.getElementById('price3-amazon');
    const objThirdDescriptionAmazon = document.getElementById('description3-amazon');
    const objThirdDateAmazon = document.getElementById('date3-amazon');

    objThirdIdAmazon.innerText = arrayObjAmazon[2].id;
    objThirdNameAmazon.innerText = arrayObjAmazon[2].name;
    objThirdQuantityAmazon.innerText = arrayObjAmazon[2].quantity;
    objThirdPriceAmazon.innerText = arrayObjAmazon[2].price;
    objThirdDescriptionAmazon.innerText = arrayObjAmazon[2].description;
    objThirdDateAmazon.innerText = arrayObjAmazon[2].date;


    const objFourthIdAmazon = document.getElementById('id4-amazon');
    const objFourthNameAmazon = document.getElementById('name4-amazon');
    const objFourthQuantityAmazon = document.getElementById('quantity4-amazon');
    const objFourthPriceAmazon = document.getElementById('price4-amazon');
    const objFourthDescriptionAmazon = document.getElementById('description4-amazon');
    const objFourthDateAmazon = document.getElementById('date4-amazon');

    objFourthIdAmazon.innerText = arrayObjAmazon[3].id;
    objFourthNameAmazon.innerText = arrayObjAmazon[3].name;
    objFourthQuantityAmazon.innerText = arrayObjAmazon[3].quantity;
    objFourthPriceAmazon.innerText = arrayObjAmazon[3].price;
    objFourthDescriptionAmazon.innerText = arrayObjAmazon[3].description;
    objFourthDateAmazon.innerText = arrayObjAmazon[3].date;



    //RIEMPIO TABELLA BARILLA CON DATI ARRAY
    const objFirstIdBarilla = document.getElementById('id1-barilla');
    const objFirstNameBarilla = document.getElementById('name1-barilla');
    const objFirstQuantityBarilla = document.getElementById('quantity1-barilla');
    const objFirstPriceBarilla = document.getElementById('price1-barilla');
    const objFirstDescriptionBarilla = document.getElementById('description1-barilla');
    const objFirstDateBarilla = document.getElementById('date1-barilla');

    objFirstIdBarilla.innerText = arrayObjBarilla[0].id;
    objFirstNameBarilla.innerText = arrayObjBarilla[0].name;
    objFirstQuantityBarilla.innerText = arrayObjBarilla[0].quantity;
    objFirstPriceBarilla.innerText = arrayObjBarilla[0].price;
    objFirstDescriptionBarilla.innerText = arrayObjBarilla[0].description;
    objFirstDateBarilla.innerText = arrayObjBarilla[0].date;
    
    
    const objSecondIdBarilla = document.getElementById('id2-barilla');
    const objSecondNameBarilla = document.getElementById('name2-barilla');
    const objSecondQuantityBarilla = document.getElementById('quantity2-barilla');
    const objSecondPriceBarilla = document.getElementById('price2-barilla');
    const objSecondDescriptionBarilla = document.getElementById('description2-barilla');
    const objSecondDateBarilla = document.getElementById('date2-barilla');

    objSecondIdBarilla.innerText = arrayObjBarilla[1].id;
    objSecondNameBarilla.innerText = arrayObjBarilla[1].name;
    objSecondQuantityBarilla.innerText = arrayObjBarilla[1].quantity;
    objSecondPriceBarilla.innerText = arrayObjBarilla[1].price;
    objSecondDescriptionBarilla.innerText = arrayObjBarilla[1].description;
    objSecondDateBarilla.innerText = arrayObjBarilla[1].date;
    

    const objThirdIdBarilla = document.getElementById('id3-barilla');
    const objThirdNameBarilla = document.getElementById('name3-barilla');
    const objThirdQuantityBarilla = document.getElementById('quantity3-barilla');
    const objThirdPriceBarilla = document.getElementById('price3-barilla');
    const objThirdDescriptionBarilla = document.getElementById('description3-barilla');
    const objThirdDateBarilla = document.getElementById('date3-barilla');

    objThirdIdBarilla.innerText = arrayObjBarilla[2].id;
    objThirdNameBarilla.innerText = arrayObjBarilla[2].name;
    objThirdQuantityBarilla.innerText = arrayObjBarilla[2].quantity;
    objThirdPriceBarilla.innerText = arrayObjBarilla[2].price;
    objThirdDescriptionBarilla.innerText = arrayObjBarilla[2].description;
    objThirdDateBarilla.innerText = arrayObjBarilla[2].date;


    const objFourthIdBarilla = document.getElementById('id4-barilla');
    const objFourthNameBarilla = document.getElementById('name4-barilla');
    const objFourthQuantityBarilla = document.getElementById('quantity4-barilla');
    const objFourthPriceBarilla = document.getElementById('price4-barilla');
    const objFourthDescriptionBarilla = document.getElementById('description4-barilla');
    const objFourthDateBarilla = document.getElementById('date4-barilla');

    objFourthIdBarilla.innerText = arrayObjBarilla[3].id;
    objFourthNameBarilla.innerText = arrayObjBarilla[3].name;
    objFourthQuantityBarilla.innerText = arrayObjBarilla[3].quantity;
    objFourthPriceBarilla.innerText = arrayObjBarilla[3].price;
    objFourthDescriptionBarilla.innerText = arrayObjBarilla[3].description;
    objFourthDateBarilla.innerText = arrayObjBarilla[3].date;





    sectionInvisible.style.display = 'block';
    sectionLogin.style.display = 'none';

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



