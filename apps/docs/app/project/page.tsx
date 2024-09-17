import { getTasks } from "@repo/ui/actions";
import { Button } from "@repo/ui/components";
import { httpClient } from "@repo/ui/services";
import { truncateText } from "@repo/ui/utils";
import React from "react";

const page = async () => {
  httpClient
  const res = await getTasks();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "1rem",
      }}
    >
      {JSON.stringify(res, null, 4)}
      <Button appName="app1">{truncateText("njnjbjb", 3)}</Button>
    </div>
  );
};

export default page;
