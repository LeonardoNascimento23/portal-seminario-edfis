'use client';

export default function DecorativeIllustrations() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#204F8C] rounded-full opacity-10 blur-xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#A68521] rounded-full opacity-10 blur-xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-[#204F8C] rounded-full opacity-10 blur-xl transform -translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-[#A68521] rounded-full opacity-10 blur-xl transform translate-x-1/2 translate-y-1/2" />
      
      {/* Elementos adicionais para mais profundidade */}
      <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-[#204F8C] rounded-full opacity-5 blur-xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-2/3 right-1/6 w-32 h-32 bg-[#A68521] rounded-full opacity-5 blur-xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/2 left-1/5 w-28 h-28 bg-[#204F8C] rounded-full opacity-5 blur-xl transform -translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-2/3 right-1/5 w-24 h-24 bg-[#A68521] rounded-full opacity-5 blur-xl transform translate-x-1/2 translate-y-1/2" />
    </div>
  );
} 