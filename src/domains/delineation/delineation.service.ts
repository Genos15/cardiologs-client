import { NetworkResponse } from "src/shared/definition";
import { HeartRateBoundary } from "./delineation.model";

export const postDelineation = async (file: File, timestamp?: number) => {
  const delineationFormData = new FormData();
  delineationFormData.append("file", file, file.name);

  const delineationDatetime = timestamp ?? "";

  const baseURL = process.env.SERVER_URL || "http://127.0.0.1:3456";

  const request = await fetch(
    `${baseURL}/api/delineation?timestamp=${delineationDatetime}`,
    {
      method: "POST",
      body: delineationFormData,
    }
  );

  const response: NetworkResponse<HeartRateBoundary> = await request.json();

  if (!response.success) {
    throw new Error("Something went wrong. Please try again.");
  }

  return response.data;
};
