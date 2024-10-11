import { AxiosError } from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (
          error instanceof AxiosError &&
          error.response?.status &&
          error.response?.status >= 500
        ) {
          return false;
        }

        if (error instanceof AxiosError && error.response?.status === 401) {
          return false;
        }

        if (failureCount >= 3) {
          return false;
        }
        return true;
      },
    },
  },
});
