import { Hono } from 'hono';

const app = new Hono();

app.get('/api/health', (c) => c.json({ status: 'ok' }));

app.get('/api/hello', (c) =>
  c.json({
    message: 'Hello from haidi20 BE (Bun + Hono)',
    time: new Date().toISOString(),
  }),
);

const port = Number(process.env.PORT ?? 3000);

const server = Bun.serve({ port, fetch: app.fetch });

console.log(`BE listening on http://localhost:${server.port}`);
