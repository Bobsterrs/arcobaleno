console.log('Loading .env.local...')
require('dotenv').config({ path: '.env.local' })
console.log('Key:', process.env.MAILERLITE_API_KEY ? 'Present' : 'Missing')
