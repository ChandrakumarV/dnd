import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Variant } from "@/type/variant";
const value: {
  name: string;
  value: Variant;
}[] = [
  {
    name: "Simple",
    value: "simple",
  },
  {
    name: "Multi Container",
    value: "multi-container",
  },
  {
    name: "Sorting",
    value: "sortable",
  },
];

export function SelectVariant({
  variant,
  setVariant,
}: {
  setVariant: React.Dispatch<React.SetStateAction<Variant>>;
  variant: Variant;
}) {
  return (
    <Select
      onValueChange={(value) => setVariant(value as Variant)}
      value={variant}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {value.map((value) => (
          <SelectItem value={value.value}>{value.name}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
