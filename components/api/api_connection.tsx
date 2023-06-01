import { useEffect } from 'react';
import { useAuthRequest } from 'expo-auth-session';
import { encode } from 'base-64';
import { setAccessToken, clearAccessToken, getAccessToken } from './api_token';

export const useAuthorization = (config, navigation) => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: config.clientId,
      redirectUri: config.redirectUri,
      responseType: 'code',
      scopes: ['public'],
      codeChallengeMethod: 'S256',
    },
    { authorizationEndpoint: config.authorizationEndpoint }
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;

      // Token-Austausch durchführen
      const tokenRequest = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${encode(`${config.clientId}:${config.clientSecret}`)}`,
        },
        body: `grant_type=authorization_code&client_id=${config.clientId}&code=${code}&redirect_uri=${encodeURIComponent(
          config.redirectUri
        )}`,
      };

      fetch(config.tokenEndpoint, tokenRequest)
        .then((tokenResponse) => {
          if (tokenResponse.ok) {
            return tokenResponse.json();
          } else {
            throw new Error('Failed to obtain token');
          }
        })
        .then((tokenData) => {
          const accessToken = tokenData.access_token;

          setAccessToken(accessToken); // Speichere den Token

          navigation.navigate('Home');
        })
        .catch((error) => {
          console.error('Error during token exchange:', error);
        });
    }
  }, [response]);

  const logout = async () => {
    const token = await getAccessToken();
  
    const revokeEndpoint = 'https://api.intra.42.fr/oauth/token/revoke';
  
    const revokeRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `token=${encodeURIComponent(token)}`,
    };
  
    try {
      const response = await fetch(revokeEndpoint, revokeRequest);
      if (response.ok) {
        clearAccessToken(); // Entferne den gespeicherten Token
        navigation.navigate('Auth'); // Navigiere zur Anmeldeseite oder einer anderen geeigneten Seite
      } else {
        console.error('Fehler beim Abmelden');
      }
    } catch (error) {
      console.error('Fehler beim Abmelden:', error);
    }
  };

  return { request, promptAsync, logout };
};
