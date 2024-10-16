const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const { query, hitsPerPage } = JSON.parse(event.body);

    const APPLICATION_ID = "C3S52RZURS";  // Your Algolia App ID
    const API_KEY = "17d9d4d305e18e271e95867ed56bb21f";  // Your Algolia API Key
    const INDEX_NAME = "prod_QA_Catalogue";  // Your Algolia Index Name

    const url = `https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/${INDEX_NAME}/query`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'X-Algolia-API-Key': API_KEY,
            'X-Algolia-Application-Id': APPLICATION_ID,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            hitsPerPage: hitsPerPage
        })
    });

    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
