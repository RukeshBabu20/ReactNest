import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Path } from "../constants/constant";
import IconButton from "./utilities/utils";

export default function Greeting() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          navigate(Path.Calculator);
        }}
      >
        Calculator
      </Button>
      <IconButton text={"Calculator"} />
    </>
  );
}
