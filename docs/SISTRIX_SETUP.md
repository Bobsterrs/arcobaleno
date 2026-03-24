# SISTRIX API Setup Guide

To connect your project to SISTRIX and fetch SEO data (Visibility Index, Keywords, etc.), follow these steps:

## 1. Obtain an API Key
1.  Log in to your [SISTRIX account](https://app.sistrix.com/).
2.  Navigate to **Account > API** (or visit `https://app.sistrix.com/account/api`).
3.  Generate a new API key and copy it.

## 2. Configuration
Store your API key in an environment variable (e.g., in a `.env.local` file for Next.js):

```env
SISTRIX_API_KEY=your_api_key_here
```

## 3. Usage Example (Node.js)
The following example fetches the **Visibility Index** for your domain.

```javascript
const axios = require('axios');

async function getVisibilityIndex(domain = 'arcobalenosenzaglutine.it') {
  const apiKey = process.env.SISTRIX_API_KEY;
  const url = `https://api.sistrix.com/domain.sichtbarkeitsindex?api_key=${apiKey}&domain=${domain}&format=json`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    
    // SISTRIX returns the index in the 'answer' field for this specific endpoint
    const index = data.answer[0].sichtbarkeitsindex[0].value;
    console.log(`Visibility Index for ${domain}: ${index}`);
    return index;
  } catch (error) {
    console.error('Error fetching SISTRIX data:', error.response ? error.response.data : error.message);
  }
}
```

## 4. Key Endpoints
- **Visibility Index**: `domain.sichtbarkeitsindex`
- **Keyword Rankings**: `domain.keywords`
- **Competitors**: `domain.competitors`

For full documentation, visit: [SISTRIX API Documentation](https://www.sistrix.com/api/)
