import { parseJson } from "../utils";
import { ApiResponse } from "../models";

export const httpClient = async <T = unknown>(config: {
  url: string;
  request?: RequestInit;
}): Promise<ApiResponse<T | null>> => {
  const { url, request } = config;
  let code = 500;
  let result;
  try {
    const headers: Record<string, any> = {
      ...request?.headers
    };

    const res = await fetch(url, {
      ...request,
      headers,
      cache: "no-cache"
    });

    const response = await parseJson(res);
    code = res?.status ?? 500;

    if (res?.ok) {
      result = {
        ...response,
        code,
        data: response?.data,
        message: response?.message
      };
    } else {
      result = {
        code,
        message:
          response?.message ?? "Something went wrong, please try again later.",
        data: null
      };
    }

    return result;
  } catch (err) {
    return {
      message: "Something went wrong, please try again later.",
      code,
      data: null
    };
  }
};
