import { create } from "zustand";

interface AppState {
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (open: boolean) => void;

  isRenameModalOpen: boolean;
  setIsRenameModalOpen: (open: boolean) => void;

  isShareModalOpen: boolean;
  setIsShareModalOpen: (open: boolean) => void;

  fileId: string | null;
  setFileId: (fileId: string) => void;

  filename: string;
  setFilename: (filename: string) => void;

  rowsOnCurrentPage: number;
  setRowsOnCurrentPage: (count: number) => void;

  sort: "asc" | "desc";
  setSort: (sort: "asc" | "desc") => void;
}

export const useAppStore = create<AppState>((set) => ({
  fileId: null,
  setFileId: (fileId: string) => set((state) => ({ fileId })),

  filename: "",
  setFilename: (filename: string) => set((state) => ({ filename })),

  isDeleteModalOpen: false,
  setIsDeleteModalOpen: (open) => set((state) => ({ isDeleteModalOpen: open })),

  isRenameModalOpen: false,
  setIsRenameModalOpen: (open) => set((state) => ({ isRenameModalOpen: open })),

  isShareModalOpen: false,
  setIsShareModalOpen: (open) => set((state) => ({ isShareModalOpen: open })),

  rowsOnCurrentPage: 0,
  setRowsOnCurrentPage: (count: number) => set({ rowsOnCurrentPage: count }),

  sort: "asc",
  setSort: (sort) => set({ sort }),
}));
