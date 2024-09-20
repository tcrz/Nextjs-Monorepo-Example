"use client";

import React, { useState } from "react";
import { CustomModal, Button, Table, UserInitials } from "@repo/ui/components";


interface Task {
  title: string;
  description: string;
  username: string;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(
    null
  );
  const [taskToDeleteIndex, setTaskToDeleteIndex] = useState<number | null>(
    null
  );

  // Task state as an object
  const [task, setTask] = useState<Task>({
    title: "",
    description: "",
    username: "",
  });

  // Function to handle task input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Function to handle adding/editing tasks
  const handleAddOrEditTask = () => {
    if (selectedTaskIndex !== null) {
      // Edit existing task
      const updatedTasks = [...tasks];
      updatedTasks[selectedTaskIndex] = task;
      setTasks(updatedTasks);
    } else {
      // Add new task
      setTasks([...tasks, task]);
    }

    handleModalClose(); // Close modal after adding/editing task
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setShowModal(false);
    setTask({ title: "", description: "", username: "" });
    setSelectedTaskIndex(null);
  };

  // Function to open the add/edit modal
  const handleAddTask = () => {
    setShowModal(true);
  };

  // Function to handle edit click
  const handleEditClick = (index: number) => {
    const task = tasks[index];
    setTask(task);
    setSelectedTaskIndex(index);
    setShowModal(true);
  };

  // Function to open the delete confirmation modal
  const handleDeleteClick = (index: number) => {
    setTaskToDeleteIndex(index);
    setShowDeleteModal(true);
  };

  // Function to handle task deletion
  const handleDeleteTask = () => {
    if (taskToDeleteIndex !== null) {
      const updatedTasks = tasks.filter((_, i) => i !== taskToDeleteIndex);
      setTasks(updatedTasks);
    }
    setShowDeleteModal(false);
  };

  return (
    <div className="card h-100 p-4 MA-card-shadow">
      <div className="row justify-content-md-between align-items-md-center flex-column flex-md-row p-3 p-md-4">
        <div className="col-12 col-md-6 col-lg-6 col-xl-5">
          <h5 className="fw-bold mb-1">Tasks</h5>
          <p className="mb-0 text-black-50">Manage all tasks here</p>
        </div>

        <div className="col-12 col-md-6 col-lg-6 col-xl-5">
          <div className="d-flex justify-content-md-end mt-3 mt-md-0">
          <Button onClick={handleAddTask}>Add Task</Button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end flex-column flex-lg-row mt-3 mt-lg-0 mb-3">
        
      </div>

      <Table headers={["Title", "Description", "Username", "Actions"]}>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td className="py-3 text-nowrap d-flex align-items-center">
              <UserInitials fullName={task.username} />
              {task.username}
            </td>
            <td className="py-3">
              <div className="d-flex align-items-center gap-4">
                <div className="pointer" onClick={() => handleEditClick(index)}>
                  <img
                    width={20}
                    height={20}
                    src="https://designs.hubtel.com/v4/smb//assets/images/svg/edit-icon.svg"
                    alt="edit-icon"
                  />
                </div>
                <div
                  className="pointer"
                  onClick={() => handleDeleteClick(index)}
                >
                  <img
                    width={20}
                    height={20}
                    src="https://designs.hubtel.com/v4/smb//assets/images/svg/trash-icon.svg"
                    alt="delete-icon"
                  />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </Table>

      {/* Custom Modal for Add/Edit */}
      <CustomModal
        show={showModal}
        onHide={handleModalClose}
        heading={selectedTaskIndex !== null ? "Edit Task" : "Add Task"}
        showHeader
        showCloseButton
      >
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="task-title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="task-title"
              name="title"
              className="form-control"
              value={task.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="task-description" className="form-label">
              Description
            </label>
            <textarea
              id="task-description"
              name="description"
              className="form-control"
              value={task.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="task-username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="task-username"
              name="username"
              className="form-control"
              value={task.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" onClick={handleAddOrEditTask}>
              Save
            </button>
          </div>
        </div>
      </CustomModal>

      {/* Custom Modal for Delete Confirmation */}
      <CustomModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        heading="Confirm Deletion"
        showHeader
        showCloseButton
      >
        <div className="modal-body">
          <p>Are you sure you want to delete this task?</p>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-secondary me-2"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </button>
            <button className="btn btn-danger" onClick={handleDeleteTask}>
              Delete
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default Tasks;
