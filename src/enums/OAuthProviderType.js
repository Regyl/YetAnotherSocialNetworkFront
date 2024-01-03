
const OAuthProviderType = Object.freeze({
    GitHub: {
        name: 'GitHub',
        initUrl: 'https://github.com/login/oauth/authorize?client_id=c4922c9328c2460ee8de&redirect_uri=http://localhost:3000/oauth&state=a55e29ed-a7fe-49cd-95a8-5ca08635c0d&scope=user'
    },
    Facebook: {
        name: 'Facebook',
        initUrl: ''
    },
    Google: {
        name: 'Google',
        initUrl: ''
    },
    Twitter: {
        name: 'Twitter',
        initUrl: ''
    }
})

export default OAuthProviderType;