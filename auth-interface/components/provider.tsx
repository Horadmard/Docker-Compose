"use client"

import { queryClient } from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

export default function Provider({children}:{children:React.ReactNode}){
    return(
        <>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          {children}
        </QueryClientProvider>
        </>
    )
}