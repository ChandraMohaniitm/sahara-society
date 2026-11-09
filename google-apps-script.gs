/**
 * SAHARA contact form -> Google Sheet
 * Paste this into Extensions > Apps Script in your Google Sheet.
 * Sheet tab name: Responses   |   Row 1 headers: Timestamp | Name | Email | Message
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Responses");
  var p = e.parameter || {};
  sheet.appendRow([new Date(), p.name || "", p.email || "", p.message || ""]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
