import { JsonRpcProvider } from 'ethers';
export async function GET(request: Request, res: Response) {
   
    const addr = "0xe7d66e4bde20e2e5f4f82bb99229abcdfa32c812"
    const provider = new JsonRpcProvider("https://sepolia.infura.io/v3/8a30a48106eb413bb29d9ff89d0b99a6");
    const balance = await provider.getBalance(addr);
    return Response.json({ address: addr, balance });
}
