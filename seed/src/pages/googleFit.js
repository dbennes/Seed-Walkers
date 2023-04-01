import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/fitness.activity.read'];
const CLIENT_ID = 'data-client_id="905694888986-7rchd6o1mh1un95rn3kkkniad007271l.apps.googleusercontent.com'; // insira seu ID de cliente do Google

function authorizeUser() {
  const authClient = new OAuth2Client(CLIENT_ID);

  authClient.authorize({ scope: SCOPES, prompt: 'consent' }, (err, token) => {
    if (err) {
      console.log('Erro de autorização:', err);
      return;
    }
    console.log('Autorizado com sucesso!');
    getDataFromGoogleFit(token);
  });
}

function getDataFromGoogleFit(auth) {
  const fitness = google.fitness('v1');
  fitness.users.dataset.aggregate({
    auth: auth,
    userId: 'me',
    requestBody: {
      "aggregateBy": [{ "dataTypeName": "com.google.step_count.delta", "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps" }],
      "bucketByTime": { "durationMillis": 86400000 },
      "startTimeMillis": new Date(new Date().setDate(new Date().getDate() - 7)).getTime(),
      "endTimeMillis": new Date().getTime()
    }
  }, (err, res) => {
    if (err) {
      console.log('Erro ao obter dados:', err);
      return;
    }
    console.log('Dados recebidos com sucesso:', res.data);
    renderData(res.data);
  });
}

function renderData(data) {
  return (
    <div>
      <h1>Dados de fitness do Google Fit:</h1>
      {/* renderize os dados na sua interface do usuário */}
    </div>
  );
}

export { authorizeUser, getDataFromGoogleFit, renderData };
