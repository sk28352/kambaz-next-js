import { FaCheckCircle } from "react-icons/fa";

export default function GreenCheckmark({ size = 20 }: { size?: number }) {
  return (
    <FaCheckCircle
      className="text-success"
      style={{ fontSize: size }}
    />
  );
}
