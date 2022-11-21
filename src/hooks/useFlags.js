import { useEffect, useMemo, useState } from "react";
import { countries } from "../helpers/countries";

export const useFlags = (currentCountry) => {
  const [currentFlag, setCurrentFlag] = useState(null);
  const currentFlagMemo = useMemo(() => currentFlag, [currentFlag]);
  useEffect(() => {
    const data = countries.find(
      (country) => country.country_name === currentCountry?.country_name
    );

    if (data) setCurrentFlag(data?.flag);
  }, [currentCountry]);

  return { currentFlagMemo };
};
