import Button from "./Button";
import CloseIcon from "@mui/icons-material/Close";

type PopupProps = {
  closePopup: () => void;
};

const Popup = ({ closePopup }: PopupProps) => {
  return (
    <div>
      <div>
        <Button type="button" handleClick={closePopup}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
};

export default Popup;
