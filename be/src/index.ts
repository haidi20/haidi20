import { Hono } from 'hono';
import { swaggerUI } from '@hono/swagger-ui';

const app = new Hono();

const openapiSpec = {
  openapi: '3.0.0',
  info: {
    title: 'haidi20 BE API',
    version: '1.0.0',
    description: 'API haidi20 (Bun + Hono)',
  },
  servers: [{ url: '/' }],
  paths: {
    '/api/health': {
      get: {
        summary: 'Health check',
        responses: {
          200: {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: { status: { type: 'string', example: 'ok' } },
                },
              },
            },
          },
        },
      },
    },
    '/api/hello': {
      get: {
        summary: 'Hello message',
        responses: {
          200: {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                    time: { type: 'string', format: 'date-time' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

app.get('/api/doc/json', (c) => c.json(openapiSpec));

app.get('/api/doc', swaggerUI({ url: '/api/doc/json' }));

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
