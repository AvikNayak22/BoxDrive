"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
} from "react-share";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppStore } from "@/store/store";
import { Button } from "./ui/button";
import { CopyIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { Input } from "./ui/input";

const ShareModal = ({ downloadURL }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useAppStore((state) => [
    state.isShareModalOpen,
    state.setIsShareModalOpen,
  ]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(downloadURL);
    toast.success("Link copied to clipboard!", {
      style: {
        color: "green",
      },
    });
  };

  return (
    <Dialog
      open={isShareModalOpen}
      onOpenChange={(isOpen) => {
        setIsShareModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Share
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg text-center mt-2">
          Share this link via
        </DialogDescription>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-3">
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
          <RedditShareButton url={downloadURL}>
            <RedditIcon size={48} round />
          </RedditShareButton>
          <EmailShareButton url={downloadURL}>
            <EmailIcon size={48} round />
          </EmailShareButton>
        </div>
        <DialogDescription className="text-lg text-center mt-3">
          Or copy the link below
        </DialogDescription>
        <div className="flex gap-2 mt-3">
          <Input type="text" value={downloadURL} readOnly />
          <Button variant="outline" onClick={handleCopyToClipboard}>
            <CopyIcon />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
