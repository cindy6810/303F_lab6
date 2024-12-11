import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

const TodoForm = () => {
  // State for managing tasks
  const [availableTasks, setAvailableTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Fetch tasks from JSON file when component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await import("../data/tasks.json");
        setAvailableTasks(response.default.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // Generate random task
  const handleGenerateTask = () => {
    if (availableTasks.length === 0) {
      alert("No more tasks available!");
      return;
    }
    const randomIndex = Math.floor(Math.random() * availableTasks.length);
    setSelectedTask(availableTasks[randomIndex]);
  };

  // Add task to list
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!selectedTask) return;

    // Add task to list and remove from available tasks
    setTaskList([...taskList, selectedTask]);
    setAvailableTasks(availableTasks.filter((task) => task !== selectedTask));
    setSelectedTask("");
  };

  // Remove task from list
  const handleRemoveTask = (index) => {
    const removedTask = taskList[index];
    setTaskList(taskList.filter((_, i) => i !== index));
    setAvailableTasks([...availableTasks, removedTask]);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Random Task Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAddTask} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              value={selectedTask}
              readOnly
              placeholder="Task will appear here..."
              className="flex-1"
            />
            <Button
              type="button"
              onClick={handleGenerateTask}
              className="whitespace-nowrap"
            >
              Generate Task
            </Button>
          </div>
          <Button type="submit" className="w-full" disabled={!selectedTask}>
            Add to List
          </Button>
        </form>

        <div className="mt-6">
          <h3 className="font-medium mb-2">Task List:</h3>
          <div className="space-y-2">
            {taskList.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-100 rounded"
              >
                <span>{task}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveTask(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {taskList.length === 0 && (
              <p className="text-gray-500 text-center">No tasks added yet</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoForm;
