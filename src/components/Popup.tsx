import Button from "./Button";
import CloseIcon from "@mui/icons-material/Close";

type PopupProps = {
  closePopup: () => void;
  children: React.ReactNode;
};

const Popup = ({ closePopup, children }: PopupProps) => {
  return (
    <div className="bg-white  w-[200px] md:w-[500px] rounded-xl p-4 ">
      <div className="w-full flex items-center justify-end">
        <div className="w-fit hover:bg-slate-100 p-1 rounded-xl">
          <Button type="button" handleClick={closePopup}>
            <CloseIcon />
          </Button>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Popup;
