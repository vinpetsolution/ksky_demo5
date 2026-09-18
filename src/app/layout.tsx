import type { Metadata } from "next";
import { AuthProvider } from "@/contexts/AuthContext";

import "@/styles/style.css";
import "@/styles/pc.css";
import "@/styles/mobile.css";
import "@/styles/animate.css";
import "@/styles/revision.css";

export const metadata: Metadata = {
  title: "KSKY SOLUTION",
  description: "KSKY SOLUTION",
  icons: {
    icon: [
      { url: "/img/ksky.png", type: "image/png" },
    ],
    shortcut: "/img/ksky.png",
  },
};

/**
 * Recovery for stale cached HTML: if the browser serves an old HTML document
 * after a redeploy, its hashed /_next chunk URLs 404 and the app never
 * hydrates (stuck on the loading screen). Detect failed chunk loads and
 * reload ONCE with a cache-busting query param to fetch fresh HTML.
 */
const chunkRecoveryScript = `
(function () {
  var KEY = "__chunk_reload";
  var failed = false;
  try {
    if (location.search.indexOf("__cb=") !== -1) {
      var params = new URLSearchParams(location.search);
      params.delete("__cb");
      var q = params.toString();
      history.replaceState(null, "", location.pathname + (q ? "?" + q : "") + location.hash);
    }
  } catch (e) {}
  window.addEventListener("error", function (e) {
    var t = e && e.target;
    if (!t || t.tagName !== "SCRIPT" || !t.src) return;
    if (t.src.indexOf("/_next/") === -1) return;
    failed = true;
    try {
      if (sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, "1");
    } catch (err) {}
    var sep = location.search ? "&" : "?";
    location.replace(location.pathname + location.search + sep + "__cb=" + Date.now() + location.hash);
  }, true);
  window.addEventListener("load", function () {
    if (!failed) {
      try { sessionStorage.removeItem(KEY); } catch (err) {}
    }
  });
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <script dangerouslySetInnerHTML={{ __html: chunkRecoveryScript }} />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
