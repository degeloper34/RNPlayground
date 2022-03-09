import * as SecureStore from "expo-secure-store";
import {useEffect, useState} from "react";

export default function useGetTokenSecureStore() {
  const [memberToken, setMemberToken] = useState<string | null>(null);

  useEffect(() => {
    async function getTokenFromSecureStore() {
      try {
        let tokenFromSecureStore = await SecureStore.getItemAsync(
          "memberToken"
        );
        if (tokenFromSecureStore) {
          setMemberToken(tokenFromSecureStore);
        }
      } catch (e) {
        console.warn(e);
      }
    }

    getTokenFromSecureStore();
  }, []);

  return memberToken;
}
