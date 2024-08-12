//////////////////////////////////////////////////////////////////////////////////////////////////////
//                 IHOR ZADOROZHNIAK Solana Bootcamp Ukraine vol.2 10.08.2024                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////

import {Keypair} from "@solana/web3.js"

function generateKeyPair(): { publicKey: any; privateKey: Uint8Array } {
    const keyPair = Keypair.generate();

    const publicKey = keyPair.publicKey.toBase58();
    const privateKey = keyPair.secretKey;

    return {publicKey, privateKey};
}

const {publicKey, privateKey} = generateKeyPair();

console.log(`Public key: ${publicKey}`);
console.log(`Privat key: ${privateKey}`)