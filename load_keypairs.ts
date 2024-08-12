//////////////////////////////////////////////////////////////////////////////////////////////////////
//                 IHOR ZADOROZHNIAK Solana Bootcamp Ukraine vol.2 10.08.2024                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////


import { Keypair } from '@solana/web3.js';
import * as dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_KEY;

if(!secretKey){
    throw new Error('SECRET KEY is not defined in the .env file');
}

const keyAsArray = Uint8Array.from(JSON.parse(secretKey));
const keyPair = Keypair.fromSecretKey(keyAsArray);


console.log('Public key: ', keyPair.publicKey.toBase58());
console.log('Secret key: ', keyPair.secretKey);