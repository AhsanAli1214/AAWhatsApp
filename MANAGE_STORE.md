# How to Manage Your App Store

This guide explains how to add, edit, or remove apps and details in one single place.

## 🚀 Unified Management
All app data, technical info, and blog content are now managed in **ONE** file:
`client/src/data/appData.ts`

### 1. How to Edit an App
1.  Open `client/src/data/appData.ts`.
2.  Find the app you want to edit (e.g., `aaWhatsApp`).
3.  Update any field:
    *   `version`: Current app version.
    *   `updateDate`: Date shown on the page.
    *   `changelog`: List of changes (shown in the changelog section).
    *   `whatsNew`: Short list of highlights (shown in the blue box).
    *   `blogMarkdown`: The detailed guide/article (supports bold, headers, etc.).
    *   `seoTitle`/`seoDescription`: For Google search results.

### 2. How to Add a New App
1.  Copy an existing app entry in `client/src/data/appData.ts`.
2.  Paste it at the end of the `APP_DATA` object.
3.  Change the key (e.g., `myNewApp`) and all its details.
4.  The app will automatically appear on the Home page and get its own details page.

### 3. How to Change Icons
1.  Add your icon URL to the `ICONS` object at the top of the file.
2.  Reference it in your app's `iconImage` field.

---
*The website is now cleaner, faster, and much easier to maintain!*
