import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// breaks ui rn to be fixed
export default function Filter() {
  return (
    <>
      {/* <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="system">Newest</SelectItem>
          </SelectContent>
        </Select> */}
      <div className="relative">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
