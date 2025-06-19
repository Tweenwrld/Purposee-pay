
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const usePushNotification = () => {
  const [permission, setPermission] = useState<NotificationPermission>(
    typeof window !== "undefined" && "Notification" in window
      ? Notification.permission
      : "denied"
  );

  // Check if browser supports notification API
  const isSupported = typeof window !== "undefined" && "Notification" in window;

  const requestPermission = async () => {
    if (!isSupported) {
      toast({
        title: "Error",
        description: "Browser does not support push notifications.",
        variant: "destructive",
      });
      setPermission("denied");
      return "denied";
    }
    if (permission === "granted") return "granted";
    try {
      const newPermission = await Notification.requestPermission();
      setPermission(newPermission);
      if (newPermission !== "granted") {
        toast({
          title: "Error",
          description: "Permission denied for push notifications.",
          variant: "destructive",
        });
      }
      return newPermission;
    } catch {
      setPermission("denied");
      toast({
        title: "Error",
        description: "Unable to request notification permission.",
        variant: "destructive",
      });
      return "denied";
    }
  };

  const showNotification = (title: string, options?: NotificationOptions) => {
    if (!isSupported) {
      toast({
        title: "Error",
        description: "Push notifications not supported by your browser.",
        variant: "destructive",
      });
      return;
    }
    if (permission !== "granted") {
      toast({
        title: "Error",
        description: "You must grant permission for notifications.",
        variant: "destructive",
      });
      return;
    }
    try {
      new Notification(title, options);
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to show notification.",
        variant: "destructive",
      });
    }
  };

  return { permission, requestPermission, showNotification, isSupported };
};
