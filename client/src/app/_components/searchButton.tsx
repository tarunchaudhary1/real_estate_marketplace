import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <div className="relative flex justify-center items-center">
      <input
        className="p-3 pl-10 border-2 border-gray-600 rounded-3xl bg-gray-800 text-white"
        placeholder="Search Here"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <Search />
      </div>
    </div>
  );
}
