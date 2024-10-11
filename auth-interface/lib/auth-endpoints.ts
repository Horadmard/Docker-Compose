import { makeApi, Zodios } from "@zodios/core"

import { z } from "zod";
import { BASE_URL, mainApiInstance } from "@/config";
import { ZodiosHooks } from "@zodios/react";

const endpoints = makeApi([
  {
    method: "post",
    path: "/login",
    alias: "loginMutation",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({
          username: z.string(),
          password: z.string()
        }),
      },
    ],
    response: z.any(),
  },

  {
    method: "post",
    path: "/signup",
    alias: "registerMutation",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({
          username: z.string(),
          password: z.string(),
          confirmPassword: z.string(),
          email: z.string().optional()
        }),
      },
    ],
    response: z.any(),
  },
  
]);

const ApiTokensClient = new Zodios(BASE_URL, endpoints, {
  axiosInstance: mainApiInstance,
});

export const authenticationHooks = new ZodiosHooks(
  "authentication",
  ApiTokensClient,
);
