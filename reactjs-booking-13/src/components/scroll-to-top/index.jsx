import React, { useEffect } from "react";

export default function SrollToTop() {
  useEffect(function () {
    window.scroll(0, 0);
  }, []);
  return null;
}
