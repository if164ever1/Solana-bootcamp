//////////////////////////////////////////////////////////////////////////////////////////////////////
//                 IHOR ZADOROZHNIAK Solana Bootcamp Ukraine vol.2 12.08.2024                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////


import "dotenv/config";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const PUBLIC_KEY = "2AF3dYxFnytyg2EfDsCSnvGYGuBcy2BTmSNaC9P4g6s2";

(async() => {
    const connection = new Connection(clusterApiUrl('devnet'), "confirmed");
    console.log("Connection was established");

    const public_key = new PublicKey(PUBLIC_KEY);
    const balance = await connection.getBalance(public_key);

    console.log(`Balance = ${(await connection.getBalance(public_key))/LAMPORTS_PER_SOL} SOL`);
})();