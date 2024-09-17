import React, { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
  headers: string[] | ReactNode[];
}

export const Table = ({ children, headers }: Props) => {
  return (
    <div id="scroll">
      <table className="table fs-16">
        <thead>
          <tr style={{ background: "#f2f5f7" }}>
            {headers.map((header, index) => {
              const key = index;
              return (
                <th className="py-3 text-nowrap" scope="col" key={key}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-black-75">{children}</tbody>
      </table>
    </div>
  );
};

