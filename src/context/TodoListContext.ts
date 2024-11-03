import React, { createContext, SetStateAction, useContext } from 'react';
import { Task } from '../App';

type Context = {
	taskList: Task[];
	setTaskList: React.Dispatch<SetStateAction<Task[]>>;
	task: Task;
	setTask: React.Dispatch<SetStateAction<Task>>;
};

const TodoListContext = createContext<Context | undefined>(undefined);

const TodoListProvider = TodoListContext.Provider;

const useTodoListContext = (): Context => {
	const context = useContext(TodoListContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

export { TodoListContext, TodoListProvider, useTodoListContext };
