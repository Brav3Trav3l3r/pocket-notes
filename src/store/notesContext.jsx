import { createContext, useCallback, useEffect, useMemo } from "react";
import { useImmer } from "use-immer";
import getFormatedDate from "../utils/getFormatedDate";

export const NotesContext = createContext({
  notesGroups: [],
  getGroups: () => {},
  getGroup: () => {},
  addGroup: () => {},
  addNote: () => {},
});

const initState = () => {
  const groups = localStorage.getItem("notesGroups");
  if (groups) {
    return JSON.parse(groups);
  }
  return [];
};

export const NotesContextProvider = ({ children }) => {
  const [notesGroups, setNotesGroups] = useImmer(initState);

  useEffect(() => {
    localStorage.setItem("notesGroups", JSON.stringify(notesGroups));
  }, [notesGroups]);

  const getGroups = useCallback(() => {
    const arrOfNames = notesGroups.map((n) => ({
      name: n.name,
      id: n.id,
      color: n.color,
      shortname: n.name.slice(0, 2).toUpperCase(),
    }));
    return arrOfNames;
  }, [notesGroups]);

  const getGroup = useCallback(
    (id) => {
      const group = notesGroups.find((g) => g.id === id);
      if (!group) {
        return;
      }
      return group;
    },
    [notesGroups]
  );

  const addGroup = useCallback(
    (name, color) => {
      setNotesGroups((draft) => {
        draft.push({
          id: Date.now().toString(36),
          color: color,
          name: name,
          notes: [],
        });
      });
    },
    [setNotesGroups]
  );

  const addNote = useCallback(
    (note, id) => {
      setNotesGroups((draft) => {
        const createdAt = getFormatedDate();
        const group = draft.find((group) => group.id === id);
        group.notes.push({
          id: Date.now().toString(36),
          createdAt,
          text: note,
        });
      });
    },
    [setNotesGroups]
  );

  const noteProviderValues = useMemo(
    () => ({ notesGroups, getGroups, getGroup, addGroup, addNote }),
    [notesGroups, getGroups, getGroup, addGroup, addNote]
  );

  return (
    <NotesContext.Provider value={noteProviderValues}>
      {children}
    </NotesContext.Provider>
  );
};
