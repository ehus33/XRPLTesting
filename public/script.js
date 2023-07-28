// public/script.js
import { generateDID } from './did.js';

document.addEventListener('DOMContentLoaded', () => {
  // Check Balance button click event
  document.getElementById('checkBtn').addEventListener('click', async () => {
    const address = document.getElementById('address').value;
    const resultContainer = document.getElementById('result');

    try {
      const response = await fetch(`/balance/${address}`);
      const data = await response.json();

      if (response.ok) {
        resultContainer.innerText = `Balance for ${address}: ${data.balance} XRP`;
      } else {
        resultContainer.innerText = `Error: ${data.error}`;
      }
    } catch (error) {
      resultContainer.innerText = `Error: Failed to fetch data`;
    }
  });

  // Generate DID button click event
  document.getElementById('generateBtn').addEventListener('click', () => {
    const userDID = generateDID();
    document.getElementById('didOutput').textContent = `Your DID: ${userDID}`;
  });
});
