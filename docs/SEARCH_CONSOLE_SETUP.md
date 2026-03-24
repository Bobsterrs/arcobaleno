# Google Search Console API Setup Guide

To start using the Google Search Console API (e.g., for Indexing requests or performance reports), follow these steps:

## 1. Google Cloud Project Setup
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Create a new project (e.g., "Arcobaleno-SEO").
3.  Enable the **Google Search Console API** and **Webmaster Tools API**.

## 2. Service Account Setup
1.  Go to **IAM & Admin > Service Accounts**.
2.  Create a new service account.
3.  Create an **RS256 JSON Key** for this account and download it.
4.  **IMPORTANT**: Copy the email address of the service account (e.g., `arcobaleno-seo@your-project.iam.gserviceaccount.com`).

## 3. Link Service Account to Search Console
1.  Open [Google Search Console](https://search.google.com/search-console/users).
2.  Go to **Settings > Users and Permissions**.
3.  Add the service account email as a **Full user** (or Owner if you need to manage sitemaps).

## 4. Usage Example
Save your JSON key as `credentials.json` (don't commit it!) and use the following code:

```javascript
const { google } = require('googleapis');
const searchconsole = google.searchconsole('v1');

async function getSearchConsoleData() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  const authClient = await auth.getClient();
  google.options({ auth: authClient });

  const res = await searchconsole.searchanalytics.query({
    siteUrl: 'https://www.arcobalenosenzaglutine.it/',
    requestBody: {
      startDate: '2024-01-01',
      endDate: '2024-03-01',
      dimensions: ['query', 'page'],
    },
  });

  console.log(res.data);
}
```
