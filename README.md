# Nuxt3 Monorepo

- [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)
- [pnpm workspace](https://pnpm.io/workspaces)

## Setup

Install the dependencies

```bash
pnpm install
```

## Clean up

```bash
pnpm run clean:packages
```

## Linting

```bash
pnpm run lint
```

### For each workspace package

```bash
pnpm --filter client-app run lint
```

```bash
pnpm --filter @packages/ui run lint
```

```bash
pnpm --filter @packages/utils run lint
```

## Testing

```bash
pnpm run test
```

```bash
pnpm run test:coverage
```

## Type checking

```bash
pnpm run typecheck
```

### For each workspace package

```bash
pnpm --filter @packages/utils run typecheck
```

```bash
pnpm --filter @packages/utils run build
pnpm --filter @packages/ui run typecheck
```

```bash
pnpm run build:packages && pnpm --filter client-app run typecheck
```

## Development Server

Start the development server on 
- agent: `http://localhost:3001`
- client:`http://localhost:3002`


```bash
pnpm run dev
```
