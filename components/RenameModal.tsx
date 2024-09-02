"use client";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "sonner";

const RenameModal = () => {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const [fileId, filename, isRenameModalOpen, setIsRenameModalOpen] =
    useAppStore((state) => [
      state.fileId,
      state.filename,
      state.isRenameModalOpen,
      state.setIsRenameModalOpen,
    ]);

  async function renameFile() {
    if (!user || !fileId) return;

    const toastId = toast.loading("Renaming...");

    try {
      await updateDoc(doc(db, "users", user.id, "files", fileId), {
        filename: input,
      });

      toast.success("Renamed successfully", {
        id: toastId,
        style: {
          color: "green",
        },
      });
    } catch (error) {
      toast.error("Failed to rename file", {
        id: toastId,
        style: {
          color: "red",
        },
      });
    } finally {
      setInput("");
      setIsRenameModalOpen(false);
    }
  }

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="pb-2">Rename the File</DialogTitle>
          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile();
              }
            }}
          />
        </DialogHeader>
        <DialogFooter className="flex gap-2 py-3">
          <Button
            size="sm"
            className="px-3"
            variant="secondary"
            onClick={() => setIsRenameModalOpen(false)}
          >
            <span className="sr-only">Cancel</span>
            <span>Cancel</span>
          </Button>

          <Button
            type="submit"
            size="sm"
            className="px-3"
            variant="custom"
            onClick={() => renameFile()}
          >
            <span className="sr-only">Rename</span>
            <span>Rename</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModal;
