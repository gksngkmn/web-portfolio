import { useEffect, useRef, useState } from "react";

export function useTyping(strings: string[], speed = 75, pause = 2400) {
  const [text, setText] = useState("");
  const [blink, setBlink] = useState(true);
  const idx = useRef(0);
  const ci = useRef(0);
  const del = useRef(false);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const cur = strings[idx.current];
      if (!del.current) {
        ci.current++;
        setText(cur.slice(0, ci.current));
        if (ci.current === cur.length) { del.current = true; timeout = setTimeout(tick, pause); return; }
      } else {
        ci.current--;
        setText(cur.slice(0, ci.current));
        if (ci.current === 0) { del.current = false; idx.current = (idx.current + 1) % strings.length; }
      }
      timeout = setTimeout(tick, del.current ? speed / 2 : speed);
    };
    timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [strings, speed, pause]);

  return { text, blink };
}

