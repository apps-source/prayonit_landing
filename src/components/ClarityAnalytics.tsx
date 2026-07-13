"use client";

import { useEffect, useRef } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "xm0pq46465";

export default function ClarityAnalytics() {
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    Clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return null;
}
