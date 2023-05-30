// Fuctions to assist with error handling
import type { ErrorObject } from '@vuelidate/core';
export const useClientSideError = () => {
  const isAnError = (clientSide?: boolean, serverSide?: string) => {
    if (clientSide || serverSide) return true;
    else return false;
  };

  const errorMessage = (clientSide?: ErrorObject, serverSide?: string) => {
    if (serverSide) return serverSide;
    else return clientSide?.$message.toString();
  };

  return {
    isAnError,
    errorMessage,
  };
};
