export default function Home() {
  return (
    <main
      style={{
        gridColumn: "1 / -1",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-geist-pixel-square)",
        fontSize: "32px",
      }}
    >
      Hello, world.
    </main>
  );
}
