# ai-images-serve

Minimal Cloudflare Worker that serves images from the `ai-images` R2 bucket.

## Endpoint

```
GET /image?key=<r2-object-key>
```

Example:

```
https://ai-images-serve.vijender935.workers.dev/image?key=Fit%20check%20%F0%9F%98%8D__luxoriaofficial.in(JPG).jpg
```

## Bindings

- **IMAGES** – R2 bucket `ai-images`

## Connect to Cloudflare (Git Builds)

1. Cloudflare Dashboard → **Workers & Pages** → **ai-images-serve**
2. **Settings** → **Builds** → **Connect**
3. Select GitHub repo **`vijender935/ai-images-serve`**
4. Root directory `/`, Worker name must match `ai-images-serve`
5. Save — pushes to `main` will auto-deploy

## Local

```bash
npm install
npx wrangler dev
```
