import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import AddNote from "../components/AddNote";
import NoteList from "../components/NoteList";
export default function Home() {
return (
<Container maxW="7xl">
<Auth />
<AddTodo />
<AddNote />
<TodoList />
<NoteList />
</Container>
);
}