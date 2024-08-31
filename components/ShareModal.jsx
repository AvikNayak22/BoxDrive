"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppStore } from "@/store/store";

const ShareModal = ({ downloadURL }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useAppStore((state) => [
    state.isShareModalOpen,
    state.setIsShareModalOpen,
  ]);

  return (
    <Dialog
      open={isShareModalOpen}
      onOpenChange={(isOpen) => {
        setIsShareModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Share this link
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap justify-center gap-4 mt-5">
          <FacebookShareButton url={downloadURL}>
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <TwitterShareButton url={downloadURL}>
            <TwitterIcon size={48} round />
          </TwitterShareButton>
          <LinkedinShareButton url={downloadURL}>
            <LinkedinIcon size={48} round />
          </LinkedinShareButton>
          <WhatsappShareButton url={downloadURL}>
            <WhatsappIcon size={48} round />
          </WhatsappShareButton>
          <EmailShareButton url={downloadURL}>
            <EmailIcon size={48} round />
          </EmailShareButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
