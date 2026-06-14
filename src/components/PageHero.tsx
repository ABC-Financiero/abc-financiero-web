import React from "react";

/**
 * Shared page hero for all routes except the homepage.
 * Dark emerald gradient with subtle decorative grid + glow.
 * Keeps visual language consistent across the site.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0A1F1A 0%, #0F3D33 55%, #133D2F 100%)",
      }}
    >
      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: "-25%",
          right: "-15%",
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(46,155,122,0.35), transparent 65%)",
          filter: "blur(20px)",
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: "-25%",
          left: "-15%",
          width: 460,
          height: 460,
          background:
            "radial-gradient(circle, rgba(15,61,51,0.55), transparent 65%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 py-20 md:py-28 text-center">
        {eyebrow && (
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "#A7E3CE",
              border: "1px solid rgba(167,227,206,0.25)",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            {eyebrow}
          </span>
        )}
        <h1
          className="font-extrabold leading-[1.05] tracking-tight"
          style={{
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            fontSize: "clamp(2.1rem, 4.6vw, 3.25rem)",
            marginTop: eyebrow ? 20 : 0,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mx-auto mt-5"
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: 17,
              lineHeight: 1.6,
              maxWidth: 620,
            }}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div
      aria-hidden
      style={{
        height: 1,
        background:
          "linear-gradient(to right, transparent, rgba(26,107,85,0.18), transparent)",
      }}
    />
  );
}
