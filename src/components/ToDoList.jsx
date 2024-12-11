import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [availableTasks, setAvailableTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  // Fetch tasks from JSON
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // In a real app, you would use fetch() to get the JSON file
        // For this example, we'll use the data directly
        const data = {
          tasks: [
            "Finish homework",
            "Buy groceries",
            "Walk the dog",
            "Read a book",
            "Do laundry",
            "Exercise",
            "Practice coding",
            "Write a blog post",
            "Call a friend",
            "Water the plants",
          ],
        };
        setAvailableTasks(data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // Generate random task
  const handleGenerateTask = () => {
    if (availableTasks.length === 0) {
      setCurrentTask("No more tasks available!");
      return;
    }
    const randomIndex = Math.floor(Math.random() * availableTasks.length);
    setCurrentTask(availableTasks[randomIndex]);
  };

  // Add task to list
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!currentTask.trim()) return;

    setTasks([...tasks, currentTask]);
    setAvailableTasks(availableTasks.filter((task) => task !== currentTask));
    setCurrentTask("");
  };

  // Remove task from list
  const handleRemoveTask = (indexToRemove) => {
    const removedTask = tasks[indexToRemove];
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
    setAvailableTasks([...availableTasks, removedTask]);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAddTask} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              value={currentTask}
              onChange={(e) => setCurrentTask(e.target.value)}
              placeholder="Task will appear here..."
              className="flex-1"
            />
            <Button type="button" onClick={handleGenerateTask}>
              Generate
            </Button>
          </div>
          <Button type="submit" className="w-full">
            Add Task
          </Button>
        </form>

        <div className="mt-6 space-y-2">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-100 rounded"
            >
              <span>{task}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveTask(index)}
                className="h-8 w-8"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoList;
