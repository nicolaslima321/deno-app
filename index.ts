import { opine } from 'https://deno.land/x/opine@1.2.0/mod.ts';

const app = opine();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
console.log('running on port 3000');