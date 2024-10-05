import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import mockState from "../../MockState";

function Folder({ title }) {
  return (
    <div className="flex items-center gap-2">
      <FolderIcon />
      <span>{title}</span>
    </div>
  );
}

function FolderSection({ section, folders }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <LibraryBooksIcon />
        <span className="font-semibold">{section}</span>
      </div>
      <div className="flex flex-col items-start gap-2 pl-4">
        <div className="flex gap-2 text-slate-500">
          <CreateNewFolderIcon />
          <span className="items-center italic">New Folder</span>
        </div>
        {folders.map((folder) => (
          <Folder title={folder} />
        ))}
      </div>
    </div>
  );
}

function FolderTree() {
  const folders = mockState.folders;
  return (
    <div className="flex flex-col gap-5 overflow-hidden">
      <FolderSection folders={folders.plans} section="Plans" />
      <FolderSection folders={folders.exercises} section="Exercises" />
      <div className="flex items-center gap-2">
        <DeleteIcon />
        <span className="font-semibold">Trash</span>
      </div>
    </div>
  );
}
export default function LeftSidebar() {
  return (
    <div className="hidden h-screen w-64 overflow-hidden border-r border-r-slate-200 px-10 py-5 lg:block">
      <FolderTree />
    </div>
  );
}
