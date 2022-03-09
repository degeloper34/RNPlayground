import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {MainContextProvider} from "./src/context/mainContext";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import useGetTokenSecureStore from "./src/hooks/useSecureStore";
import Navigation from "./src/navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const memberToken = useGetTokenSecureStore();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <MainContextProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} memberToken={memberToken} />
          <StatusBar style="light" />
        </SafeAreaProvider>
      </MainContextProvider>
    );
  }
}
