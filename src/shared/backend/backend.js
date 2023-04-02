import axios from "axios";
import urls from "./urls";

export const getUser = async (walletAddress) => {
    return await axios.get(urls.getUserByWallet, {
        params: {
            walletAddress,
        },
        headers: {
            "x-api-key": process.env.REACT_APP_BACKEND_API_KEY,
        },
    });
};

export const tryRegister = async (sigData) => {
  return await axios.post(
    urls.register,
    {
      walletAddress: sigData.walletAddress,
      message: sigData.message,
      signature: sigData.signature
    },
    { headers: { "x-api-key": process.env.REACT_APP_BACKEND_API_KEY } }
  );
};
