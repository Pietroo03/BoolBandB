# WEB APP REPLICA DI AIRB&B

Web App che permette di:
- visualizzare una homepage con tutti gli appartamenti disponibili con tutte le loro specifiche, barra di ricerca per città;
- pagina di ricerca avanzata dove è possibile selezionare il numero minimo di letti, bagni, stanze e metri quadri che un appartamento deve avere;
- pagina di dettaglio del singolo appartamento in cui è possibile aggiungere cuori di gradimento senza nessun limite, form per contattare il proprietario, form per lasciare una recensione;
- pagina di login o registrazione;
- pagina personale per gli utenti registrati dove è possibile visionare i propri appartamenti inseriti;
- pagina per l'aggiunta di un nuovo appartamento con all'interno un form da compilare per l'inserimento dell'abitazione

Sviluppata utilizzando Node.js, Vite, React e MySQL

### DIPENDENZE BACK-END
- express
- mysql2
- bcryptjs --> utilizzata per l'hash della password nel database
- cors
- joi --> utilizzata per le validazioni lato server-side
- multer --> utilizzata per il caricamento di file immagini salvati in locale e aggiungerli al database
- @sendgrid/mail --> utilizzata per il form "contatta il proprietario"

### DIPENDENZA FRONT-END
- react
- bootstrap
- bootstrap-icons
- fontawesome
- react-router-dom
- react-toastify 
