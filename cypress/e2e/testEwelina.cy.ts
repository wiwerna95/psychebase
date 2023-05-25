describe('test Ewelina', () => {
  it('setup environment', () => {
    let version = '0.0.0';
    let namespace = 'bazapsyche';

    cy.wait(10000);
  })



  it('create', () => {
    cy.request({
      method: 'POST',
      url: 'https://firestore.googleapis.com/google.firestore.v1.Firestore/Write/channel?database=projects%2Fpsychoportal-fd912%2Fdatabases%2F(default)&VER=8&RID=33100&CVER=22&X-HTTP-Session-Id=gsessionid&%24httpHeaders=X-Goog-Api-Client%3Agl-js%2F%20fire%2F9.9.1%0D%0AContent-Type%3Atext%2Fplain%0D%0AX-Firebase-GMPID%3A1%3A644258139757%3Aweb%3Ac8da7f8e9aa60d6bb6f964%0D%0A&zx=986gl2q1ortz&t=',
      form: true,
      body: {},
    }).then((result) => {
      expect(result.status, 'status').to.eq(200)
      cy.wait(400)
    })
  })

  it('getAll', () => {
    cy.request({
      method: 'GET',
      url: 'https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel?database=projects%2Fpsychoportal-fd912%2Fdatabases%2F(default)&gsessionid=ITN-cnqqbiOy07BVAH5Vvpzqh7ifBC1Nk8qQkdxIIKk&VER=8&RID=rpc&SID=wzNxH9Ewt2g1KTT00D0juA&CI=0&AID=0&TYPE=xmlhttp&zx=xaf38arj2e7&t=1,',      
      form: true,
})