import { Presentation } from "./Peresentation";
import { useUserData } from "./useUserData";

export const Containers = () => {
  const { data, isLoading, error } = useUserData();
  const props = {
    data,
    isLoading,
    error,
  };
  return <Presentation {...props} />;
};
