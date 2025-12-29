// signer.js
const CoinKey = require('coinkey');
const bitcoinMessage = require('bitcoinjs-message');

/**
 * Sign CLORE migration message using CoinKey
 *
 * @param {string} privateKeyInput - CLORE private key (WIF)
 * @param {string} cloreAddress - CLORE address
 * @param {string} evmAddress - Ethereum address
 * @returns {{ message: string, signature: string }}
 */
function signCloreMessage(privateKeyInput, cloreAddress, evmAddress) {
  if (!privateKeyInput || !cloreAddress || !evmAddress) {
    throw new Error('Missing required input');
  }

  // Construct CoinKey from WIF
  const coinkey = CoinKey.fromWif(privateKeyInput);

  // Set CLORE network versions (REQUIRED)
  coinkey.versions = {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 1313,
    private: 0x70,
    public: 0x17,
    scripthash: 0x7a,
  };

  // Exact required message format
  const message =
    `Claim request for CLORE tokens to Ethereum address ${evmAddress} ` +
    `from ${cloreAddress}`;

  // CLORE-specific message prefix
  const messagePrefix = '\x16Clore Signed Message:\n';

  // Sign
  const sig = bitcoinMessage.sign(
    message,
    coinkey.privateKey,
    coinkey.compressed, // compression flag
    messagePrefix // custom prefix
  );

  return {
    message,
    signature: sig.toString('base64'),
  };
}

module.exports = { signCloreMessage };
