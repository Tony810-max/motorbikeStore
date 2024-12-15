import Header from "@/components/layouts/Header";
import FormContact from "./components/FormContact";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="container grid grid-cols-2 gap-2">
        <FormContact />
        <div className="border px-4 py-2 bg-slate-100 rounded-lg shadow-lg space-y-4">
          <span className="font-sans text-xl font-bold border-l-4 text-[#66CC00] border-l-[#66CC00] pl-2">
            Thông tin liên hệ
          </span>
          <div className="space-y-2">
            <div>
              <span className="font-sans text-base font-bold">
                Hotline Đà Nẵng:{" "}
              </span>
              <span className="font-sans text-base "> 0768.154.937</span>
            </div>
            <div>
              <span className="font-sans text-base font-bold">Facebook: </span>
              <span className="font-sans text-base">
                https://www.facebook.com/MotoShowroom
              </span>
            </div>
            <div>
              <span className="font-sans text-base font-bold">Email:</span>
              <span> support@thuongmotor.com</span>
            </div>
            <div>
              <span className="font-sans text-base font-bold">Website:</span>
              <span> Thuongmotor.com</span>
            </div>
            <div>
              <span className="font-sans text-base font-bold">Showroom:</span>
              <span> 282 Trưng Nữ Vương, Quận Hải Châu, TP. Đà Nẵng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
