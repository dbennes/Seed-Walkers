import { OAuth2Client } from 'google-auth-library';

const CLIENT_ID = '905694888986-7rchd6o1mh1un95rn3kkkniad007271l.apps.googleusercontent.com';
const CLIENT_SECRET = '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';

const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);

// Define as permissões que você deseja solicitar do usuário
const SCOPES = ['https://www.googleapis.com/auth/fitness.activity.read'];

// Autentica o usuário e solicita autorização para acessar as permissões especificadas
async function authorize() {
  const { tokens } = await oAuth2Client.getToken({
    // Redireciona o usuário para esta URL para autenticar e autorizar a aplicação
    // Certifique-se de substituir o valor de `redirect_uri` pelo URL de redirecionamento registrado em seu projeto do Google Cloud Console
    codeChallengeMethod: 'S256',
    codeVerifier: '',
    redirect_uri: 'http://localhost:3000/authorize',
    scope: SCOPES.join(' '),
  });

  // Define o token de acesso para usar nas solicitações à API do Google Fit
  oAuth2Client.setCredentials(tokens);

  return oAuth2Client;
}

export default {
  authorize,
};
