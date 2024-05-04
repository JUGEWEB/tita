let web3;
let userWalletAddress;

//function to connect a wallet
async function connectWallet() {
  try {
    //check if the web3 provider(metamask) is available
    if (typeof window.ethereum !== 'undefine') {
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable(); //request for the user permission
      const accounts = await web3.eth.getAccounts();
      userWalletAddress = accounts[0];
      document.getElementById('status').innerHTML = '<p> connected to wallet: ${userWalletAddress}</p>';
    } else {
      throw new Error('bsc wallet not detected. please metamask or Bsc compatible wallet.');
    }
  } catch (error) {
    console.error('Error connecting wallet:', error);
    document.getElementById('status').innerHTML = '<p>Error connecting wallet: ${error.message}</p>';
  }
}
//event listener for connecting wallet button
document.getElementById("connectWalletBtn").addEventListener("click", connectWallet);
