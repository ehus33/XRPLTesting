// Wrap the code inside DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
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
  });
  