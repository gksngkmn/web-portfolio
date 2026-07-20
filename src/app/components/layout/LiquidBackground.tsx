export function LiquidBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(80px,-60px) scale(1.12); }
          66%      { transform: translate(-50px,80px) scale(0.92); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-90px,50px) scale(1.08); }
          66%      { transform: translate(60px,-90px) scale(1.15); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(40px,60px) scale(1.1); }
        }
        @keyframes blob4 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-70px,-40px) scale(0.9); }
          80%      { transform: translate(50px,70px) scale(1.05); }
        }
      `}</style>
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "55vw",
          height: "55vw",
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 60%",
          background: "radial-gradient(circle at 40% 40%, rgba(124,255,212,0.18) 0%, transparent 70%)",
          animation: "blob1 18s ease-in-out infinite",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50% 70% 30% 60% / 40% 50% 70% 50%",
          background: "radial-gradient(circle at 60% 40%, rgba(181,123,255,0.2) 0%, transparent 70%)",
          animation: "blob2 22s ease-in-out infinite",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "30%",
          width: "40vw",
          height: "40vw",
          borderRadius: "70% 30% 50% 50% / 60% 40% 70% 40%",
          background: "radial-gradient(circle at 50% 50%, rgba(124,184,255,0.12) 0%, transparent 70%)",
          animation: "blob3 25s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
          background: "radial-gradient(circle at 40% 60%, rgba(255,107,138,0.12) 0%, transparent 70%)",
          animation: "blob4 20s ease-in-out infinite",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}
