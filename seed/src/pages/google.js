import googleAuth from './googleFit';

async function GetActivities() {
  const oAuth2Client = await googleAuth.authorize();

  const fitness = google.fitness('v1');

  // Define a data de início e fim do período desejado
  const startTimeMillis = new Date('2022-01-01').getTime();
  const endTimeMillis = new Date('2022-01-31').getTime();

  const response = await fitness.users.dataset.aggregate({
    userId: 'me',
    requestBody: {
      aggregateBy: [{
        dataTypeName: 'com.google.step_count.delta',
      }],
      endTimeMillis: endTimeMillis,
      startTimeMillis: startTimeMillis,
      bucketByTime: { durationMillis: 86400000 },
    },
    auth: oAuth2Client,
  });

  // Processa os dados da resposta da API do Google Fit
  // e exibe as atividades do usuário
  console.log(response.data);
}

