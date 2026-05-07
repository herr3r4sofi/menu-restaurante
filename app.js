let db = null;
let filterCat = 'all';

function initFirebase(){
    try{
        initFirebase.initializeApp(firebaseConfig);
        db = firebase.database();

        db.ref('.info/connected').on('value', snap => {
            setDbStatus(snap.val() === true ? 'connected' : 'disconnected');
        });

        startListen();
    } catch (e) {
        showToast('Eror al conectar con Firebase: '+ e.message, 'error');
        setDbStatus('error');
    }
}


function startListening(){
    if (!db) return;
    const ref = db.ref('platillos');

    ref.on('value', snap=> {
        const data = snap.val() || {};
        const list = Object.entries(data).map(([id, val])) => ({id, ...val});
        renderAll(list);
    }, err => {
        showToast('Eror al lee datos: ' + err.message, 'error');
    });
}