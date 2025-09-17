// src/lib/google-sheets.ts
import { google } from "googleapis";
import credentials from "../../bloom-cafe-credentials.json"; // Import the file directly

export async function getGoogleSheetData(range: string) {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

    // Use credentials directly from the imported JSON file
    const jwt = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key, // No need to replace \n, it's read correctly from the file
      scopes: scopes,
    });

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID, // We can still get the ID from .env
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
