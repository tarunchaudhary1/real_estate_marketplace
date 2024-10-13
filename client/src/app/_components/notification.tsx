import { cn } from "@/lib/utils";
import { Bell } from "lucide-react";
export default function NotificationButton() {
  const haveNotification = false;
  return (
    <div className="relative">
      <div
        className={cn(
          "absolute w-10 h-10 rounded-full",
          haveNotification ? "animate-ping bg-blue-400 opacity-75" : ""
        )}
      />

      <div className="relative w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
        <Bell />
      </div>
    </div>
  );
}
