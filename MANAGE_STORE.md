# How to Update and Edit Any App

This project keeps all app content in a single source of truth, so updating any app is fast and safe.

## 📍 Main File You Need
All app entries are managed in:
`client/src/data/appData.ts`

---

## 1) Edit an Existing App
1. Open `client/src/data/appData.ts`.
2. Find the app key you want to edit inside `APP_DATA` (for example: `aaWhatsApp`, `aaBusiness`, `capcutPro`).
3. Update the fields you need:
   - `version` and `baseVersion`
   - `updateDate.display` and `updateDate.iso`
   - `changelog` and `whatsNew`
   - `shortDescription` and `longDescription`
   - `seoTitle`, `seoDescription`, `seoKeywords`
   - `blogMarkdown` (full rich content section)
4. Save the file.

## 2) Add a New App
1. In `client/src/data/appData.ts`, copy one full existing app object from `APP_DATA`.
2. Paste it as a new key (for example `myNewApp`).
3. Set a unique `slug` and correct app metadata (`name`, `category`, `downloads`, etc.).
4. Set `downloadLink` and `directDownloadLink`.
5. Add the icon URL in `ICONS` and reference it from `iconImage`.
6. Save the file.

## 3) Remove an App
1. Delete that app object from `APP_DATA`.
2. Remove unused icon entries from `ICONS` (optional cleanup).
3. Save and run checks.

## 4) Update Download Assets (If Needed)
If your direct download file changes, update the asset mapping in:
`shared/downloadAssets.ts`

Then update the app's `directDownloadLink` usage in:
`client/src/data/appData.ts`

## 5) Preview and Validate Before Deploy
Run these commands:
- `npm run dev` (local preview)
- `npm run check` (TypeScript validation)
- `npm run build` (production build)

## 6) Deploy Update
This repo is configured for Vercel (`vercel-build` script). Once changes are pushed, deploy from your normal git/Vercel workflow.

---

## Quick Safe Workflow (Recommended)
1. Edit `client/src/data/appData.ts`.
2. Run `npm run check`.
3. Run `npm run build`.
4. Commit + push.
5. Deploy.

This is the easiest way to update and edit any app in this project.
