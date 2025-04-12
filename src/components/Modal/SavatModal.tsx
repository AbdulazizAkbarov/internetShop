import React from "react";

type Props = {
  savatModal: boolean;
  setSavatModal: (value: boolean) => void;
};

const SavatModal: React.FC<Props> = ({ setSavatModal, savatModal }) => {
  if (!savatModal) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={()=>{
        setSavatModal(false)
      }}>

      </div>

      <div className="relative bg-white w-[1480px] h-[500px] text-black p-5  shadow-lg z-50 rounded-xl">
        <p></p>
        <button
          className="absolute top-2 right-2 bg-gray-200 text-black text-xl px-3 py-1 rounded"
          onClick={() => {
            setSavatModal(false);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default SavatModal;
