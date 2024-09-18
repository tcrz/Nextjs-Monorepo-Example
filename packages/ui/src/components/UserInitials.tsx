
import React from "react";
import { getInitials } from "../utils";

interface Props {
  imageUrl?: string;
  fullName: string;
}
export const UserInitials: React.FC<Props> = ({ imageUrl, fullName }) => {
  return (
    <div
      className="text-decoration-none"
      style={{
        marginRight: "0.25rem",
        borderRadius: "50%",
      }}
    >
      <span
        className="person-image"
        data-initials={getInitials(fullName)}
      />
    </div>
  );
};

