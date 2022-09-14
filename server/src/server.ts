import express, { response } from 'express'

const app = express()

//HTTP methods / API RESTful / HTTP Codes

/**
 * Query: São utilizados quando precisamos persistir estados (filtros, ordenação, paginação, envio de informações não sensíveis etc). Parâmetros da url nomeados.
 * http://localhost:3333/ads?page=2&sort=title
 * 
 * Route: Parâmetros da url não nomeados. São utilizados quando queremos fazer uma identificação de um recurso.
 * http://localhost:3333/ads/5
 * 
 * Body: São utilizados quando queremos enviar várias informações, geralmente usados no envio de formulários, onde temos dados sensíveis. 
 *      Parâmentros que não ficam na url, não são visíveis.
 *  http://localhost:3333/games
 * {
 * id: 1,
 * title: 'Apex'
 * bannerUrl: 'c:/user/teste/documentos/esports/gamesImgs'
 * }
 */

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', () => {
  return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
  //return response.send('Acessou Ads!')
  return response.json([
    {id: 1, name: 'Anúncio 1'},
    {id: 2, name: 'Anúncio 2'},
    {id: 3, name: 'Anúncio 3'},
    {id: 4, name: 'Anúncio 4'},
  ])
});

app.get('/ads/:id/discord', (request, response) => {
  //const adId = resquest.params.id;
  return response.json([])
});


//localhost:3333/
//node src/server.mjs
//npm run dev
app.listen(3333)
