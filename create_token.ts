//////////////////////////////////////////////////////////////////////////////////////////////////////
//                 IHOR ZADOROZHNIAK Solana Bootcamp Ukraine vol.2 20.08.2024                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////


import "dotenv/config";
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmRawTransaction, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js"; 
import { createMint } from "@solana/spl-token";
import { getExplorerLink } from "@solana-developers/helpers";

let privateKey = process.env["SECRET_KEY"];

if(privateKey === undefined){
    console.log("Private key is undefined!");
    process.exit();
}
    
const privateKeyAsarray = Uint8Array.from(JSON.parse(privateKey));
const sender = Keypair.fromSecretKey(privateKeyAsarray)

const connection = new Connection(clusterApiUrl("devnet"));

console.log("Connection has been established.");

async function createToken() {
    const tokenMint = await createMint(connection, sender, sender.publicKey, null, 2);
    
    const tokenLink = getExplorerLink("address", tokenMint.toString(), "devnet");

    console.log(`Token address: ${tokenLink}`);
}

createToken();

// const tokenMint = await createMint(connection, sender, sender.publicKey, null, 2);

