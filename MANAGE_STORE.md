# How to Manage Your App Store

This guide explains how to add, edit, or remove apps and blog content.

## 1. Technical Data (Versions, Links, Changelogs)
To update the technical details of an app (like version number, download links, or the "What's New" list), edit the file:
`client/src/config/appConfig.ts`

**Steps:**
1. Open `client/src/config/appConfig.ts`.
2. Find the `APP_CONFIGS` object.
3. Update the fields like `version`, `baseVersion`, `updateDate`, or `changelog`.
4. To add a new app, add a new key to `APP_CONFIGS` following the existing pattern.

## 2. Page Content & Blog Details
To update the description, SEO tags, or the long-form blog content (the detailed guide on the app page), edit the file:
`client/src/data/storeApps.ts`

**Steps:**
1. Open `client/src/data/storeApps.ts`.
2. Find the `APP_CONTENT` object.
3. Update `subtitle`, `longDescription`, or `blogMarkdown`.
4. The `blogMarkdown` field supports standard Markdown (headings, bold text, lists).

## 3. SEO and Metadata
SEO titles and descriptions are also located in `client/src/data/storeApps.ts` within the `APP_CONTENT` object.

## 4. Visuals (Gradients & Icons)
- **Gradients:** Controlled via the `gradient` field in `client/src/data/storeApps.ts` (using Tailwind classes like `from-emerald-500 to-teal-500`).
- **Icons:** Add the image URL to the top of `client/src/data/storeApps.ts` and assign it to the `iconImage` field.

---
*Note: The website updates automatically as soon as you save these files.*
