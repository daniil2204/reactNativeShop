const URL = 'https://graphqlback.onrender.com/graphql';

export const makeRequest = (query,token) => {
    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Authorization': `Basic ${token}`
      },
      body: JSON.stringify({ query })
    }).then((res) => res.json());
};