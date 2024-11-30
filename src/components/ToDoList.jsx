import React from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const ToDoList = ({ tasks, removeTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500">
        No tasks yet. Add some tasks to get started!
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span>{task}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeTask(index)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
