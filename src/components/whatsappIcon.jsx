// FloatingIcon.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdWhatsapp } from "react-icons/md";
import { phoneNumber,whatsappText } from "../constants/keywords"

export default function FloatingIcon() {
  const [tilt, setTilt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTilt(true);
      setTimeout(() => setTilt(false), 1000); // back to normal after 1s
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const  openWhatsAppChat = (phoneNumber) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank');
}

  return (
    <motion.div
      animate={tilt ? { rotate: [0, -20, 20, -10, 10, 0] } : { rotate: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onClick={()=>openWhatsAppChat(phoneNumber)}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "20px",
        zIndex: 9999,
        cursor: "pointer",
        backgroundColor: "#fff",
        borderRadius: "50%",
        padding: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <MdWhatsapp size={24} color="#333" />
    </motion.div>
  );
}
