import React, { useEffect, useRef, useCallback } from "react";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const clamp = (v: number, min = 0, max = 100) =>
  Math.min(Math.max(v, min), max);

interface ProfileCardProps {
  avatarUrl?: string;
  innerGradient?: string;
  behindGlowEnabled?: boolean;
  behindGlowColor?: string;
  className?: string;
  enableTilt?: boolean;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl = "/avatar.png",
  innerGradient = DEFAULT_INNER_GRADIENT,
  behindGlowEnabled = true,
  behindGlowColor = "rgba(125,190,255,0.25)",
  className = "",
  enableTilt = true,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick
}) => {
  const shellRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!enableTilt || !shellRef.current) return;

      const rect = shellRef.current.getBoundingClientRect();

      const x = clamp(((e.clientX - rect.left) / rect.width) * 100);
      const y = clamp(((e.clientY - rect.top) / rect.height) * 100);

      shellRef.current.style.setProperty("--px", `${x}%`);
      shellRef.current.style.setProperty("--py", `${y}%`);
      shellRef.current.style.setProperty("--rx", `${(50 - y) / 8}deg`);
      shellRef.current.style.setProperty("--ry", `${(x - 50) / 8}deg`);
    },
    [enableTilt]
  );

  const resetTilt = () => {
    if (!shellRef.current) return;

    shellRef.current.style.setProperty("--rx", "0deg");
    shellRef.current.style.setProperty("--ry", "0deg");
    shellRef.current.style.setProperty("--px", "50%");
    shellRef.current.style.setProperty("--py", "50%");
  };

  useEffect(() => {
    const el = shellRef.current;
    if (!el || !enableTilt) return;

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", resetTilt);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", resetTilt);
    };
  }, [enableTilt, handlePointerMove]);

  return (
    <div
      ref={shellRef}
      className={`relative ${className}`}
      style={{
        perspective: "900px",
        "--px": "50%",
        "--py": "50%",
        "--rx": "0deg",
        "--ry": "0deg"
      } as React.CSSProperties}
    >
      {/* Glow خلف الكارد */}
      {behindGlowEnabled && (
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(circle at var(--px) var(--py), ${behindGlowColor}, transparent 60%)`,
            filter: "blur(60px)"
          }}
        />
      )}

      {/* الكارد */}
      <section
        className="relative overflow-hidden w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px]"
        style={{
          aspectRatio: "0.72",
          borderRadius: "30px",
          background: "rgba(0,0,0,0.9)",
          transform: "rotateX(var(--rx)) rotateY(var(--ry))",
          transition: "transform 0.6s ease"
        }}
      >
        {/* الخلفية */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: innerGradient,
            borderRadius: "30px"
          }}
        />

        {/* Shine effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at var(--px) var(--py),
              rgba(255,255,255,0.15),
              transparent 55%)`,
            mixBlendMode: "overlay",
            zIndex: 2
          }}
        />

        {/* الصورة */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 5,
            pointerEvents: "none",
            transform: "translateZ(8px)"
          }}
        >
          <img
            src={avatarUrl}
            alt={name}
            className="absolute left-1/2 bottom-0 w-[110%] sm:w-[105%] md:w-full lg:w-[95%]"
            style={{
              transform: "translateX(-50%)",
              objectFit: "cover"
            }}
            draggable={false}
          />
        </div>

        {/* المعلومات */}
        {showUserInfo && (
          <div
            className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between backdrop-blur-xl border border-white/10"
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "14px 16px"
            }}
          >
            <div>
              <div className="text-sm font-semibold text-white">
                @{handle}
              </div>
              <div className="text-xs text-white/70">
                {status}
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="text-xs font-semibold px-4 py-2 rounded-lg border border-white/20 text-white hover:border-white/50 transition"
            >
              {contactText}
            </button>
          </div>
        )}

        {/* الاسم */}
        <div
          className="absolute top-10 w-full text-center z-10"
          style={{ pointerEvents: "none" }}
        >
          <h3 className="text-3xl font-bold text-white">{name}</h3>
          <p className="text-white/70 text-sm mt-1">{title}</p>
        </div>
      </section>
    </div>
  );
};

export default React.memo(ProfileCard);