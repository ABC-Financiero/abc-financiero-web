import { useEffect, useState } from "react";

const FALLBACK_RATE = 26.2;

export function useUsdHnlRate() {
  const [rate, setRate] = useState<number>(FALLBACK_RATE);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const r = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        if (!r.ok) throw new Error("net");
        const data = await r.json();
        const v = data?.rates?.HNL;
        if (cancelled) return;
        if (typeof v === "number") setRate(v);
        else setFailed(true);
      } catch {
        if (!cancelled) setFailed(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { rate, loading, failed };
}

export function formatLempiras(usd: number, rate: number) {
  const hnl = Math.round(usd * rate);
  return `L${hnl.toLocaleString("es-HN")}`;
}
