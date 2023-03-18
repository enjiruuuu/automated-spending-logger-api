const express = require("express");
const cors = require('cors')
const { google } = require("googleapis");

const app = express();
const port = 8080;

//This allows us to parse the incoming request body as JSON
app.use(express.json(), cors());

// With this, we'll listen for the server on port 8080
app.listen(port, () => console.log(`Listening on port ${port}`));

async function authSheets() {
    //Function for authentication object
    const auth = new google.auth.GoogleAuth({
      keyFile: "keys.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
  
    //Create client instance for auth
    const authClient = await auth.getClient();
  
    //Instance of the Sheets API
    const sheets = google.sheets({ version: "v4", auth: authClient });
  
    return {
      auth,
      authClient,
      sheets,
    };
  }


  app.post("/update", async (req, res) => {
    const { sheets } = await authSheets();

    const request = {
        spreadsheetId: req.body.sheetId,
        range: "Sheet1",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: req.body.logs,
        },
    }
  
    // write rows to spreadsheet
    try {
        const response = (await sheets.spreadsheets.values.append(request)).data;
        res.send({code: 200})
    } catch (err) {
        console.error(err);
    }
  });

  app.get("/", async (req, res) => {
    res.send('hello!')
  });
