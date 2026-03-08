import { motion } from "motion/react";
import { Download } from "lucide-react";

export default function DownloadCard({ title, type, description, link }) {
  return (
    <motion.a
      href={link}
      download
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      whileTap={{ scale: 0.98 }}
      className="block p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] px-2 py-1 rounded-full border border-white/20 text-white/60 tracking-tighter">
          {type}
        </span>
        <Download size={18} className="text-white/40" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed">{description}</p>
    </motion.a>
  );
}