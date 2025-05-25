# JSL04_LISDEJ25125_FTO2502B1_Lisa-De-Jongh_JSL

This Kanban Task manager project was modified into an interactive website using DOM Manipulation and Local storage with adding interaction and CSS and HTML manipulation. It has a responsive button that changes it six=ze and appearnce at a specific screen size. It allows you to create a new task and it will display on the screen and once refreshed it still stays.

## Features

- **Interactive Task Management**: Click on any task to open a detailed editor
- **Task Addition**: Creates new tasks when needed
- **Status Tracking**: Displays on screen and user decides which column it wants the task to fall under
- **Responsive Design**: Works across different screen sizes

## Technical Implementation


1. **Modal System**: Dynamically creates a modal overlay for task editing
2. **Event Handling**: Sets up listeners for task clicks and modal interactions
3. **Column Management**: User decides which column the addition task is allowed to fall under

## Usage Instructions

1. **View**: Click on the button on the top right corner of the screen(+ Add New Task)
2. **Creation**: Click on button to open the editor modal
3. **Update Information**: Modify the title, description, or status
4. **Create**: Click "Create Task" to create a new task 
5. **Drop down**: To decide which task it should fall under
6. **Close Modal**: Click outside the modal or the × button to dismiss without saving

## Importance of each file

The code is organized into distinct sections:

- **Additional HTML**: Creates what the input should be of the Modal And the Button
- **Additional CSS**: The Styling of both the button and the modal
- **Task js**: The function of the modal
- **Save js**: The function of the new task display on the screen and show updates in the console log along with the storage
- **Note**: The InitialData.js and Script.js are from JSL04
