import { secp256k1 } from '@noble/curves/secp256k1.js';
import { sha256 } from '@noble/hashes/sha2.js';
import * as wif from 'wif';

/* =========================
   Helpers
   ========================= */

function varInt(n) {
  if (n < 0xfd) return Uint8Array.of(n);
  if (n <= 0xffff) return Uint8Array.of(0xfd, n & 0xff, n >> 8);
  throw new Error('Message too long');
}

function concatBytes(...arrays) {
  return Uint8Array.from(arrays.flatMap((a) => [...a]));
}

/* =========================
   Global signer
   ========================= */

window.signCloreMessage = async function (
  privateKeyWIF,
  cloreAddress,
  evmAddress
) {
  if (!privateKeyWIF || !cloreAddress || !evmAddress) {
    throw new Error('Missing inputs');
  }

  const { privateKey } = wif.decode(privateKeyWIF);

  const message = `Claim request for CLORE tokens to Ethereum address ${evmAddress} from ${cloreAddress}`;
  const prefix = 'Clore Signed Message:\n';

  const encoder = new TextEncoder();

  const payload = concatBytes(
    varInt(prefix.length),
    encoder.encode(prefix),
    varInt(message.length),
    encoder.encode(message)
  );

  const hash = sha256(sha256(payload));

  const signatureDER = secp256k1.sign(hash, privateKey, { der: true });

  const signature = btoa(String.fromCharCode(...signatureDER));

  return {
    message,
    signature,
  };
};
