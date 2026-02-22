# Cloudflare configuration

This project now includes a `wrangler.toml` configured with your Cloudflare identifiers:

- Account ID: `0ab03debcc7d3e11e888196cf6f089f9`
- Zone ID: `702eb100d4d62daf377d058f9e4f75cc`

## Where they are set

- `account_id` is set at the root of `wrangler.toml` for Wrangler auth/deployment context.
- `CLOUDFLARE_ZONE_ID` is set in `[vars]` for scripts or Workers/Pages functions that call Cloudflare Zone APIs.

## Deploy (Pages)

```bash
npm run build
npx wrangler pages deploy dist/public
```

If you want, I can also add a dedicated npm script (for example `deploy:cloudflare`) in `package.json`.
