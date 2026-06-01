import { ImageIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { usePostEditorModal } from "@/store/post-editor-modal";

export default function PostEditorModal() {
  const { isOpen, close } = usePostEditorModal();

  const handleCloseModal = () => {
    close();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent>
        <DialogTitle>포스트 작성</DialogTitle>
        <textarea />
        <Button>
          <ImageIcon />
          이미지 추가
        </Button>
        <Button>저장</Button>
      </DialogContent>
    </Dialog>
  );
}
