import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setupTests.ts",
    css: true,
    mockReset: true,
  },
  resolve: {
    alias: {
      "\\.(css|less|scss|sass)$": "./tests/mocks/styleMock.ts",
      "\\.(png|jpg|jpeg|svg)$": "./tests/mocks/fileMock.ts",
    },
  },
});