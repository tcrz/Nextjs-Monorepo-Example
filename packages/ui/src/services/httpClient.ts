import { parseJson } from "../utils";
import { ApiResponse } from "../models";

export const httpClient = async <T = unknown>(config: {
  url: string;
  request?: RequestInit;
  isDefaultContentType?: boolean;
}): Promise<ApiResponse<T | null>> => {
  const { url, request, isDefaultContentType = true } = config;
  let code = 500;
  let result;
  try {
    const headers: Record<string, any> = {
      // Authorization: `Bearer ${token}`,
      ...request?.headers
    };

    if (isDefaultContentType) {
      headers["Content-Type"] = "application/json";
    }

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
