import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) {
      setError("Task cannot be empty");
      return;
    }

    const success = addTask(taskText);
    if (success) {
      setTaskText("");
      setError("");
    } else {
      setError("This task already exists");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">Add Task</Button>
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </form>
  );
};

export default ToDoForm;
