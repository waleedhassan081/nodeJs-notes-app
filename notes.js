const fs = require("fs");
const chalk = require("chalk");
const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title == title);
  if (!duplicateNote) {
    notes.push({ title: title, body: body });
    saveNote(notes);
    displayMsg("success", "note added");
  } else {
    displayMsg("error", "Note title already exist");
  }
};
const readNote = (title) => {
  const notes = loadNotes();
  const singleNote = notes.find((note) => note.title === title);

  if (singleNote) {
    displayMsg(
      "success",
      "Title: " + singleNote.title + " \n" + "Body: " + singleNote.body
    );
  } else {
    displayMsg("error", "Note not found");
  }
};
const editNote = (title, body) => {
  const notes = loadNotes();
  const singleNote = notes.find((note) => note.title == title);
  if (singleNote) {
    singleNote["body"] = body;
    const noteIndex = notes.findIndex((note) => note.title === title);
    notes[noteIndex] = singleNote;
    saveNote(notes);
    displayMsg("updated", "Note Body updated");
  } else {
    displayMsg("error", "Invalid Title");
  }
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataString = dataBuffer.toString();
    const jsonData = JSON.parse(dataString);
    return jsonData;
  } catch (error) {
    return [];
  }
};
const saveNote = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};
const removeNotes = (title) => {
  const notes = loadNotes();
  const uniqueNotes = notes.filter((note) => note.title != title);
  if (notes.length > uniqueNotes.length) {
    saveNote(uniqueNotes);
    displayMsg("updated", title + " " + " has been removed");
  } else {
    displayMsg("error", "No note found");
  }
};
const listNotes = () => {
  const notes = loadNotes();
  displayMsg("updated", "Your Notes");
  notes.forEach((note) => displayMsg("success", note.title));
};
const displayMsg = (type, msg) => {
  switch (type) {
    case "success":
      console.log(chalk.inverse.bold.blue(msg));
      break;
    case "error":
      console.log(chalk.inverse.bold.red(msg));
      break;
    case "updated":
      console.log(chalk.inverse.bold.green(msg));
      break;
    default:
      break;
  }
};
module.exports = {
  addNotes,
  readNote,
  editNote,
  removeNotes,
  listNotes,
};
