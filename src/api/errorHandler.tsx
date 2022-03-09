import {AxiosResponse} from "axios";
import {Alert} from "react-native";

export function errorHandler(error: AxiosResponse) {
  // console.log("errorHandler");
  // console.log("errorHandler error", error);
  const {data, status} = error;

  Alert.alert("Error", status + " - " + data);
}
