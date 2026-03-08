import { motion } from "motion/react";
import { Youtube, Disc as Discord, MessageSquare, Twitter } from "lucide-react";

const socialData = [
  { name: "X", icon: <Twitter size={20} />, url: "https://x.com/FRSK1214", color: "hover:text-white" },
  { name: "Bluesky", icon: <MessageSquare size={20} />, url: "https://bsky.app/profile/frsk1214.bsky.social", color: "hover:text-blue-400" },
  { name: "YouTube", icon: <Youtube size={20} />, url: "https://youtube.com/channel/UC2KRr0MvZt_YV_sqLoO9btg", color: "hover:text-red-500" },
  { name: "Discord", icon: <Discord size={20} />, url: "https://discord.gg/fsUcGDyKQs", color: "hover:text-indigo-400" },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6 items-center">
      {socialData.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`text-white/40 transition-colors ${social.color}`}
          title={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}