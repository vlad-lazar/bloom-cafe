// src/lib/google-sheets.ts
import { google } from "googleapis";

export async function getGoogleSheetData(range: string) {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

    // This code is correct for the .env.local format above
    const jwt = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      scopes: scopes,
    });

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
    });

    const rows = response.data.values;
    if (rows && rows.length) {
      return rows;
    }
  } catch (err) {
    console.error("Error reading from Google Sheet:", err);
  }
  return [];
}
