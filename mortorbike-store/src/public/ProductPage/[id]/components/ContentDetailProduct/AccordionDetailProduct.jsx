/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const AccordionDetailProduct = ({ name, des }) => {
  return (
    <Accordion type="single" collapsible className="">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-sans text-base">
          {name}
        </AccordionTrigger>
        <AccordionContent>{des}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionDetailProduct;
