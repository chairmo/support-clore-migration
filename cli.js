#!/usr/bin/env node
const readline = require('readline');
const { signCloreMessage } = require('./signer');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(prompt) {
  return new Promise((resolve) => rl.question(prompt, resolve));
}

(async () => {
  try {
    console.log('\n=== CLORE Migration Message Signer (CoinKey) ===\n');

    const wif = (await ask('CLORE Private Key (WIF): ')).trim();
    const clore = (await ask('CLORE Address: ')).trim();
    const evm = (await ask('Ethereum Address (0x...): ')).trim();

    const { message, signature } = signCloreMessage(wif, clore, evm);

    console.log('\n--- Message ---\n');
    console.log(message);

    console.log('\n--- Signature (Base64) ---\n');
    console.log(signature);

    console.log('\n✔ Signature generated successfully\n');
  } catch (err) {
    console.error('\n✘ Error:', err.message);
  } finally {
    rl.close();
  }
})();
