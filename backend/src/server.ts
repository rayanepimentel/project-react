import express from 'express';

const app = express();

app.get('/app', (request, response) => {
    return response.json({ message: 'Hello' })

});

app.listen(3333);