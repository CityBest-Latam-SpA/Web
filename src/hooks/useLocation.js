import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { initialCountry } from "../store";

export const useLocation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then(({ data }) => {
        dispatch(initialCountry(data));
      })
      .catch((err) => dispatch(setCountry("")));
  }, []);
};
