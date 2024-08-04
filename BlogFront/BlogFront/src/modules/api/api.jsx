import axios from "axios";

import apiObject from "./api.json";

const customAxios = axios.create({
  withCredentials: true,
});

const PREFIX = "http://localhost:8080";

export function getApiUrl(api) {
  return PREFIX + apiObject[api][1];
}

const REQUESTS = {
  GET: (api, params) =>
    customAxios.get(getApiUrl(api), {
      params,
    }),
  PUT: (api, params) => customAxios.put(getApiUrl(api), params),
  POST: (api, params) => customAxios.post(getApiUrl(api), params),
  DELETE: (api, params) =>
    customAxios.delete(getApiUrl(api), {
      params,
    }),
};

export function REQ(api, data) {
  return REQUESTS[apiObject[api][0]](api, data);
}

export async function handleRequest(request, options = null) {
  try {
    const result = await request;
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    options?.onFinish?.();
  }
}
