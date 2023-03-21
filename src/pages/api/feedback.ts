import { Compute, JWT, UserRefreshClient } from 'google-auth-library'
import { google } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

function writeData(auth: Compute | JWT | UserRefreshClient, data: string[]) {
  const sheets = google.sheets({ version: 'v4', auth })
  const values = [data]
  let error, response

  sheets.spreadsheets.values.append(
    {
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1!A1:A5',
      valueInputOption: 'RAW',
      requestBody: { values },
    },
    (err, result) => {
      error = err
      response = result

      if (err) {
        console.log(err)
      }
    }
  )

  return { error, response }
}

async function getAuth() {
  const jwt = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    undefined,
    (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    SCOPES
  )

  return jwt
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  let data: string[] = []
  try {
    data = JSON.parse(req.body).data
  } catch (err) {
    res.status(400).json(err)
  }

  const auth = await getAuth()
  const { error, response } = writeData(auth, data)

  if (error) res.status(400).json(error)
  else res.status(200).json(response)
}
