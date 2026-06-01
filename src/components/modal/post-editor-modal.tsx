import { ImageIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

export default function PostEditorModal() {
  return (
    <Dialog>
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
