/* eslint-disable react/prop-types */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LabelInpt = ({ name, value }) => {
  return (
    <div className="space-y-2">
      <Label className="font-sans text-base font-bold">{name}</Label>
      <Input value={value} readOnly />
    </div>
  );
};

export default LabelInpt;
