import {AxiosResponse} from "axios";
import {Alert} from "react-native";

export function errorHandler(error: AxiosResponse) {
  const {data, status} = error;

  Alert.alert("Error", status + " - " + data);
}
