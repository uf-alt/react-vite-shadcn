import { useState } from "react";

export function useToast() {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const showToast = (msg: string) => {
    setMessage(msg);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2500);
  };

  return { message, isVisible, showToast };
}
