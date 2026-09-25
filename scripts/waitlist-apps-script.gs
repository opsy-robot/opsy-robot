/**
 * Opsy Robot — hardware waitlist → Google Sheet
 *
 * Setup (once):
 * 1. Create a Google Sheet. Extensions → Apps Script. Delete the sample code and paste this file.
 * 2. Click Deploy → New deployment → type "Web app".
 *    Execute as: Me.   Who has access: Anyone.   → Deploy → authorize.
 * 3. Copy the Web app URL (ends in /exec) and set it as NEXT_PUBLIC_WAITLIST_URL (or in src/lib/site.ts).
 */
const HEADERS = ["Timestamp", "Name", "Email", "Telegram", "Other contact", "Country", "Interested in", "Units", "Notes"];

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.company) return ContentService.createTextOutput("ok"); // honeypot: bots fill this
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  const clean = (v) => String(v || "").slice(0, 500).replace(/^[=+\-@]/, "'$&"); // block formula injection
  sheet.appendRow([new Date(), clean(p.name), clean(p.email), clean(p.telegram), clean(p.other),
                   clean(p.country), clean(p.interest), clean(p.units), clean(p.notes)]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
