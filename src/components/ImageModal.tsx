import React from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="relative max-w-lg w-full max-h-[90vh] bg-slate-900 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center gap-2">
                <ZoomIn className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-semibold text-slate-200">{title}</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex items-center justify-center bg-[#070b12]">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
