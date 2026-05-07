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
