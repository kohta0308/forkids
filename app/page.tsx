export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>For Kids</h1>

      <p style={{ marginBottom: 24 }}>
        子育て世帯の外出意思決定を支援するプラットフォーム（MVP）
      </p>

      <h2 style={{ fontSize: 18, marginBottom: 8 }}>カテゴリ</h2>

      <ul style={{ lineHeight: 1.8 }}>
        <li>🏞 公園・遊び場</li>
        <li>🍽 飲食店</li>
        <li>🏨 宿泊施設</li>
      </ul>

      <p style={{ marginTop: 24, color: "#666" }}>
        ※ まずは「探せる」ことをゴールにした最初のバージョンです
      </p>
    </main>
  );
}
