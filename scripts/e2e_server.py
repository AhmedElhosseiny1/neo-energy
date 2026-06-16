#!/usr/bin/env python3
"""Static server for the exported Next.js app with clean URL support."""

import http.server
import os
import socketserver
import sys

PORT = int(os.environ.get("PORT", "3000"))
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "dist"))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        # Let SimpleHTTPRequestHandler resolve relative to directory.
        original = super().translate_path(path)
        if os.path.isfile(original):
            return original
        # Try clean URL -> .html file
        html_candidate = original + ".html"
        if os.path.isfile(html_candidate):
            return html_candidate
        # Fall back to directory index if present
        index_candidate = os.path.join(original, "index.html")
        if os.path.isfile(index_candidate):
            return index_candidate
        return original

    def do_GET(self):
        # Redirect trailing slashes to non-trailing for files, keeping directory
        # behaviour when an index.html exists.
        original = super().translate_path(self.path)
        if self.path != "/" and self.path.endswith("/") and os.path.isfile(original + ".html"):
            self.send_response(301)
            self.send_header("Location", self.path.rstrip("/"))
            self.end_headers()
            return
        super().do_GET()


class ReuseAddrTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


if __name__ == "__main__":
    with ReuseAddrTCPServer(("", PORT), Handler) as httpd:
        print(f"Serving {ROOT} at http://localhost:{PORT}")
        httpd.serve_forever()
