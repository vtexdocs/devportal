import { Compute, JWT, UserRefreshClient } from 'google-auth-library'
import { google } from 'googleapis'
import { getVariable } from 'utils/get-variables'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

function writeData(
  auth: Compute | JWT | UserRefreshClient,
  data: string[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: any
) {
  const sheets = google.sheets({ version: 'v4', auth })
  const values = [data]
  let error, response

  sheets.spreadsheets.values.append(
    {
      spreadsheetId: getVariable('SPREADSHEET_ID'),
      range: 'Sheet1!A1:A5',
      valueInputOption: 'RAW',
      requestBody: { values },
    },
    (err, result) => {
      if (err) res.status(400).json(err)
      else res.status(200).json(result)
    }
  )

  return { error, response }
}

async function getAuth() {
  const jwt = new google.auth.JWT(
    getVariable('GOOGLE_SHEETS_CLIENT_EMAIL'),
    undefined,
    (getVariable('GOOGLE_SHEETS_PRIVATE_KEY') || '').replace(/\\n/g, '\n'),
    SCOPES
  )

  return jwt
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  let data: string[] = []
  try {
    data = JSON.parse(req.body).data
    if (data[3] && data[3] === 'cypress-test') res.status(200).json({ data })
    else {
      const auth = await getAuth()
      writeData(auth, data, res)
    }
  } catch (err) {
    res.status(400).json(err)
  }
}
