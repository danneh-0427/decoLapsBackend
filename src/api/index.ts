import oauthPlugin from '@fastify/oauth2';

const router = async (fastify, options) => {
  fastify.get('/', async (req, reply) => {
    console.log("GET /");
    return { msg: "Hello, world!" };
  });
  
  ////////////////////////// GITHUB LOGIN LOGIC ////////////////////////////
  
  fastify.register(oauthPlugin, {
    name: 'githubOAuth2',
    credentials: {
      client: {
        id: process.env.OAUTH2_CLIENT_ID,
        secret: process.env.OAUTH2_CLIENT_SECRET
      },
      auth: oauthPlugin.GITHUB_CONFIGURATION
    },
    // register a fastify url to start the redirect flow
    startRedirectPath: '/login/github',
    // facebook redirect here after the user login
    callbackUri: 'http://localhost:8000/login/github/callback'
  });
  
  fastify.get('/login/github/callback', async function (request, reply) {
    const token = await this.githubOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
  
    //console.log(token.access_token);
  
    // if later you need to refresh the token you can use
    // const newToken = await this.getNewAccessTokenUsingRefreshToken(token.refresh_token)
  
    reply.send({ access_token: token.access_token });
  });
}

export default router;