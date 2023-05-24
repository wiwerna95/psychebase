describe('test Ewelina', () => {
  it('post', () => {
    cy.request({
      method: 'POST',
      url: 'https://firestore.googleapis.com/google.firestore.v1.Firestore/Write/channel?database=projects%2Fpsychoportal-fd912%2Fdatabases%2F(default)&VER=8&RID=33100&CVER=22&X-HTTP-Session-Id=gsessionid&%24httpHeaders=X-Goog-Api-Client%3Agl-js%2F%20fire%2F9.9.1%0D%0AContent-Type%3Atext%2Fplain%0D%0AX-Firebase-GMPID%3A1%3A644258139757%3Aweb%3Ac8da7f8e9aa60d6bb6f964%0D%0A&zx=986gl2q1ortz&t=',
      form: true,
      body: {},
    })

  })
})