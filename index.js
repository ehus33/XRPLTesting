const express = require('express');
const app = express();
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({ server: 'wss://s.altnet.rippletest.net:51233' });
api.connect();

api.on('connected', () => {
  console.log('Connected to XRP Ledger Testnet');
});

// Serve static files from the "public" folder
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/balance/:address', async (req, res) => {
  const { address } = req.params;
  try {
    const accountInfo = await api.getAccountInfo(address);
    res.json({
      balance: accountInfo.xrpBalance,
      sequence: accountInfo.sequence,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching balance' });
  }
});

// The rest of your code

const port = 3001;
app.listen(port, () => {
  console.log(`Express server started on port ${port}`);
});
