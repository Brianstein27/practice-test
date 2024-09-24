import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

function Folder() {
  return (
    <div className="flex items-center gap-2">
      <FolderIcon />
      <span>Folder</span>
    </div>
  );
}

function FolderTree() {
  return (
    <div className="flex flex-col gap-5 overflow-hidden">
      <div id="plans-section" className="flex flex-col gap-3">
        <div id="plans-heading" className="flex items-center gap-2">
          <LibraryBooksIcon />
          <span className="font-semibold">Plans</span>
        </div>
        <div
          id="plans-folders"
          className="flex flex-col items-start gap-2 pl-4"
        >
          <div id="new-folder" className="flex gap-2 text-slate-600">
            <CreateNewFolderIcon />
            <span className="items-center italic">New Folder</span>
          </div>
          <Folder />
          <Folder />
          <Folder />
          <Folder />
        </div>
      </div>
      <div id="exercises-section" className="flex flex-col gap-3">
        <div id="exercises-heading" className="flex items-center gap-2">
          <LibraryMusicIcon />
          <span className="font-semibold">Exercises</span>
        </div>
        <div
          id="exercises-folders"
          className="flex flex-col items-start gap-2 pl-4"
        >
          <div id="new-folder" className="flex gap-2 text-slate-600">
            <CreateNewFolderIcon />
            <span className="items-center italic">New Folder</span>
          </div>
          <Folder />
          <Folder />
          <Folder />
          <Folder />
        </div>
      </div>
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
