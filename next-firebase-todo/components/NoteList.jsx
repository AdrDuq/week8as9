import {
    Badge,
    Box,
    Heading,
    SimpleGrid,
    Text,
    useToast,
    } from "@chakra-ui/react";
    import React, { useEffect } from "react";
    import useAuth from "../hooks/useAuth";
    import { collection, onSnapshot, query, where } from "firebase/firestore";
    import { db } from "../firebase";
    import { FaTrash } from "react-icons/fa";
    import { deleteNote } from "../api/note";
    const NoteList = () => {
    const [notes, setNotes] = React.useState([]);
    const {  user } = useAuth();
    const toast = useToast();
    const refreshData = () => {
    if (!user) {
    setNotes([]);
    return;
    }
    const q = query(collection(db, "note"), where("user", "==", user.uid));
    onSnapshot(q, (querySnapchot) => {
    let ar = [];
    querySnapchot.docs.forEach((doc) => {
    ar.push({ id: doc.id, ...doc.data() });
    });
    setNotes(ar);
    });
    };
    useEffect(() => {
    refreshData();
    }, [user]);
    const handleNoteDelete = async (id) => {
    if (confirm("Are you sure you wanna delete this note?")) {
    deleteNote(id);
    toast({ title: "Note deleted successfully", status: "success" });
    }
    };
    return (
    <Box mt={5}>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
    {notes &&
    notes.map((note) => (
    <Box
    p={3}
    boxShadow="2xl"
    shadow={"dark-lg"}
    transition="0.2s"
    _hover={{ boxShadow: "sm" }}
    >
    <Heading as="h3" fontSize={"xl"}>
    {note.title}{" "}
    <Badge
    color="red.500"
    bg="inherit"
    transition={"0.2s"}
    _hover={{
    bg: "inherit",
    transform: "scale(1.2)",
    }}
    float="right"
    size="xs"
    onClick={() => handleNoteDelete(note.id)}
    >
    <FaTrash />
    </Badge>
    </Heading>
    <Text>{note.description}</Text>
    </Box>
    ))}
    </SimpleGrid>
    </Box>
    );
    };
    export default NoteList;