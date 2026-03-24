const { google } = require('googleapis');
const searchconsole = google.searchconsole('v1');
const path = require('path');

async function testConnection() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, 'credentials.json'),
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    console.log('✅ Autenticazione riuscita!');
    console.log('Service Account:', authClient.email);
    
    // Prova a elencare i siti (richiede che il service account sia stato aggiunto su Search Console)
    const res = await searchconsole.sites.list();
    console.log('Siti autorizzati:', res.data.siteEntry || 'Nessun sito trovato (assicurati di aver aggiunto l\'email del service account su Search Console)');

  } catch (error) {
    console.error('❌ Errore di connessione:', error.message);
  }
}

testConnection();
