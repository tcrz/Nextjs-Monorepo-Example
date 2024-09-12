"use server"

import { BASE_URL } from "../constants";
import { httpClient } from "../services/httpClient";

export async function getTasks() {
    const url = `https://jsonplaceholder.typicode.com/todos/1`;
    const response = await httpClient({
      url,
      request: {
        method: "GET"
      }
    });
    return response;
  }