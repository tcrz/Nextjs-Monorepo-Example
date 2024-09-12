import { getTasks } from "@repo/ui/actions";
import { Button } from "@repo/ui/components";
import React from "react";

const page = async () => {
  const res = await getTasks();
  console.log(res);
  return (
    <div>
      {JSON.stringify(res, null, 4)}
      <Button appName="app1">{res.message}</Button>
    </div>
  );
};

export default page;
