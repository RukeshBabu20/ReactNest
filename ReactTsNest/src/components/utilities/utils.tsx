import { Button } from "@mui/material";

export default function IconButton(text: { text: string }) {
  return (
    <>
      <Button>{text.text}</Button>
    </>
  );
}
