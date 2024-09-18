"use client";

import React, { useState } from "react";
import { CustomModal, Button, Table, UserInitials } from "@repo/ui/components";

interface User {
  username: string;
  phoneNumber: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    username: "",
    phoneNumber: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => {
    setShowModal(false);
    setUser({ username: "", phoneNumber: "" });
  };

  const handleAddUser = () => {
    setUsers([...users, user]);
    handleModalClose();
  };

  const handleDeleteUser = () => {
    if (userToDelete) {
      setUsers(users.filter((user) => user !== userToDelete));
    }
    setConfirmDelete(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-end flex-column flex-lg-row mt-3 mt-lg-0 mb-3">
        <Button onClick={handleModalOpen}>Add User</Button>
      </div>

      <Table headers={["Username", "Phone Number", "Actions"]}>
        {users.map((user, index) => (
          <tr key={index}>
            <td className="py-3 text-nowrap d-flex align-items-center">
              <UserInitials fullName={user.username} />
              {user.username}
            </td>
            <td>{user.phoneNumber}</td>
            <td className="py-3">
              <div className="d-flex align-items-center gap-4">
                <div className="pointer">
                  <img
                    width={20}
                    height={20}
                    src="https://designs.hubtel.com/v4/smb//assets/images/svg/trash-icon.svg"
                    alt="delete-icon"
                    onClick={() => {
                      setUserToDelete(user);
                      setConfirmDelete(true);
                    }}
                  />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </Table>

      {/* Add User Modal */}
      <CustomModal
        show={showModal}
        onHide={handleModalClose}
        heading="Add User"
        showHeader
        showCloseButton
      >
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="user-username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="user-username"
              className="form-control"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
            <div className="mb-3">
            <label htmlFor="user-phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              pattern="[0-9]*"
              id="user-phone"
              className="form-control"
              value={user.phoneNumber}
              onChange={(e) =>
              setUser({ ...user, phoneNumber: e.target.value.replace(/\D/g, '') })
              }
            />
            </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" onClick={handleAddUser}>
              Save
            </button>
          </div>
        </div>
      </CustomModal>

      {/* Delete Confirmation Modal */}
      <CustomModal
        show={confirmDelete}
        onHide={() => setConfirmDelete(false)}
        heading="Confirm Delete"
        showHeader
        showCloseButton
      >
        <div className="modal-body">
          <p>Are you sure you want to delete {userToDelete?.username}?</p>
          <div className="d-flex justify-content-end gap-2">
            <button
              className="btn btn-secondary"
              onClick={() => setConfirmDelete(false)}
            >
              Cancel
            </button>
            <button className="btn btn-danger" onClick={handleDeleteUser}>
              Delete
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default Users;
