import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "職場体験 外部委託サポート | 絲（いとあわせ）",
  description:
    "久留米市立青陵中学校・明星中学校にて継続受託。職場体験の企画・事業所調整・ワークシート開発まで、学校に寄り添ってサポートします。久留米市教育委員会との確認書締結済み。",
};

const PLANS = [
  {
    num: "PLAN 1",
    name: "事業所サポート",
    price: "生徒一人あたり ¥900〜",
    featured: false,
    items: [
      "受け入れ事業所の開拓・調整",
      "「生徒受け入れの手引き」配布",
      "アポイント代行",
      "体験内容のアップデート提案",
      "公式LINEによる事業所との連絡管理",
    ],
    period: "実施期間：職場体験当日",
  },
  {
    num: "PLAN 2　★ おすすめ",
    name: "ワークシート導入",
    price: "生徒一人あたり ¥1,200〜",
    featured: true,
    items: [
      "PLAN 1 の内容すべて",
      "事前指導・事後指導用ワークシート（冊子）",
      "「働くこと・お金」をテーマにした問いのワーク",
      "振り返り学習のサポート",
    ],
    period: "実施期間：職場体験前後 各2時間",
  },
  {
    num: "PLAN 3",
    name: "年間キャリア支援",
    price: "生徒一人あたり ¥3,000〜",
    featured: false,
    items: [
      "PLAN 1・2 の内容すべて",
      "年間キャリア教育計画のご提案",
      "探究活動（総合的な学習）との連携",
      "出張授業（テーマ別）",
      "発表・表現の機会づくり",
    ],
    period: "実施期間：職場体験前後 + 毎月1時間程度",
  },
];

export default function SchoolPage() {
  return (
    <div style={{ fontFamily: "'Hiragino Sans','Hiragino Kaku Gothic ProN','Meiryo',sans-serif", color: "#1f2937", lineHeight: 1.75, fontSize: 15 }}>

      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(135deg,#1c3358 0%,#2563c8 100%)", color: "#fff", padding: "72px 0 64px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", opacity: .7, marginBottom: 16 }}>
            職場体験 外部委託サポート
          </div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 900, lineHeight: 1.3, marginBottom: 20 }}>
            職場体験の運営を、<br />
            <em style={{ fontStyle: "normal", borderBottom: "3px solid #fbbf24" }}>外部委託</em>で。<br />
            先生の負担を減らし、生徒の学びを深める。
          </h1>
          <p style={{ opacity: .85, fontSize: 15, lineHeight: 1.85, marginBottom: 28, maxWidth: 560 }}>
            絲（いとあわせ）は、子ども向け学び体験マッチング「itoito」を運営する教育支援グループです。<br />
            元教員を中心に、職場体験の企画・調整・事前事後指導まで学校に寄り添ってサポートします。
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["✅ 青陵中学校 3年継続受託", "✅ 明星中学校 2年継続受託", "✅ 久留米市教育委員会 連携", "✅ 元教員スタッフによる運営"].map(b => (
              <span key={b} style={{ background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 600 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 実績 ── */}
      <section id="results" style={{ background: "#f3f4f6", padding: "64px 0" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: "#6b7280", marginBottom: 8 }}>RESULTS</div>
          <div style={{ width: 32, height: 3, background: "#2563c8", marginBottom: 20 }} />
          <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, marginBottom: 8 }}>実績・活動報告</h2>
          <p style={{ color: "#4b5563", fontSize: 14, marginBottom: 28 }}>久留米市立2校にて継続して職場体験運営をサポートしています。</p>

          {/* 青陵中 */}
          <div style={{ background: "#fff", borderRadius: 12, border: "1.5px solid #e5e7eb", padding: "24px 28px", marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 17 }}>久留米市立青陵中学校</div>
                <div style={{ fontSize: 13, color: "#4b5563", marginTop: 3 }}>福岡県久留米市</div>
              </div>
              <span style={{ background: "#ebf2ff", color: "#2563c8", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>R6・R7・R8年度 3年継続受託</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10 }}>
              {[
                ["実施期間", "R6年9月・R7年9月・R8年9月（各2日間）"],
                ["対象生徒数", "約120名（1学年）"],
                ["連携事業所数", "約50事業所"],
                ["運営内容", "事業所調整・公式LINE導入・ワークシート開発"],
                ["連携機関", "久留米市教育委員会"],
              ].map(([label, val]) => (
                <div key={label} style={{ background: "#f9fafb", borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 3 }}>{label}</div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, background: "#ebf2ff", borderRadius: 8, padding: "10px 16px", fontSize: 13, color: "#1c3358", fontWeight: 600 }}>
              🏛 令和7年4月1日付「職場体験確認書」を市教育委員会と締結のうえ受託
            </div>
          </div>

          {/* 明星中 */}
          <div style={{ background: "#fff", borderRadius: 12, border: "1.5px solid #e5e7eb", padding: "24px 28px", marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 17 }}>久留米市立明星中学校</div>
                <div style={{ fontSize: 13, color: "#4b5563", marginTop: 3 }}>福岡県久留米市</div>
              </div>
              <span style={{ background: "#ebf2ff", color: "#2563c8", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>R7・R8年度 2年継続受託</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10 }}>
              {[
                ["実施期間", "R7年9月・R8年9月（各2日間）"],
                ["運営内容", "事業所調整・公式LINE導入・ワークシート開発"],
                ["連携機関", "久留米市教育委員会"],
              ].map(([label, val]) => (
                <div key={label} style={{ background: "#f9fafb", borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 3 }}>{label}</div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 今年度日程 */}
          <div style={{ background: "#ebf2ff", borderRadius: 10, border: "1.5px solid #c7d9f8", padding: "20px 24px", fontSize: 14, lineHeight: 1.9 }}>
            <strong style={{ color: "#1c3358" }}>📅 令和8年度 実施予定日程</strong>
            <div style={{ marginTop: 10, display: "grid", gap: 6 }}>
              <div>◎ <strong>明星中学校</strong>　令和8年9月1日（火）・2日（水）</div>
              <div>◎ <strong>青陵中学校</strong>　令和8年9月10日（木）・11日（金）</div>
              <div style={{ fontSize: 12, color: "#4b5563", marginTop: 4 }}>時間：9:00〜16:00（おおよその予定）／受入依頼人数：2名以上</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── サービス ── */}
      <section id="service" style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: "#6b7280", marginBottom: 8 }}>SERVICE</div>
          <div style={{ width: 32, height: 3, background: "#2563c8", marginBottom: 20 }} />
          <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, marginBottom: 8 }}>3つのサポートプラン</h2>
          <p style={{ color: "#4b5563", fontSize: 14, marginBottom: 32 }}>学校の実態や予算に合わせて、必要な部分からご導入いただけます。<br />料金は生徒一人あたりの目安です（仮設定。詳細はご相談ください）。</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
            {PLANS.map(p => (
              <div key={p.num} style={{ background: p.featured ? "#1c3358" : "#fff", color: p.featured ? "#fff" : "#1f2937", borderRadius: 14, border: p.featured ? "none" : "1.5px solid #e5e7eb", padding: "24px 20px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 11, fontWeight: 700, opacity: .7, marginBottom: 6 }}>{p.num}</div>
                <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: p.featured ? "#fbbf24" : "#2563c8", marginBottom: 16 }}>{p.price}</div>
                <ul style={{ paddingLeft: 16, fontSize: 13, lineHeight: 1.8, flex: 1 }}>
                  {p.items.map(item => <li key={item}>{item}</li>)}
                </ul>
                <div style={{ fontSize: 12, opacity: .6, marginTop: 16 }}>{p.period}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 16, fontSize: 12, color: "#4b5563", lineHeight: 1.8 }}>
            ※ 料金は目安です。学校規模・実施内容によって変わります。まずはご相談ください。<br />
            ※ 出張授業等はオプション対応です。内容は随時アップデートします。
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" style={{ background: "#1c3358", color: "#fff", textAlign: "center", padding: "72px 20px" }}>
        <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, marginBottom: 12 }}>まずは、お気軽にご相談ください。</h2>
        <p style={{ opacity: .8, fontSize: 14, marginBottom: 36, lineHeight: 1.8 }}>
          「うちの学校に合うかな？」という段階でも大歓迎です。<br />
          学校の実態をお聞きした上で、最適なプランをご提案します。
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
          <a href="https://lin.ee/HiSCSkf" target="_blank" rel="noopener noreferrer"
            style={{ background: "#06C755", color: "#fff", fontWeight: 700, padding: "13px 28px", borderRadius: 8, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            💬 公式LINEで相談する
          </a>
          <a href="mailto:itoawase0324@gmail.com"
            style={{ background: "#fff", color: "#1c3358", fontWeight: 700, padding: "13px 28px", borderRadius: 8, fontSize: 14, textDecoration: "none" }}>
            📧 メールで問い合わせ
          </a>
          <a href="tel:09097251572"
            style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.6)", fontWeight: 700, padding: "13px 28px", borderRadius: 8, fontSize: 14, textDecoration: "none" }}>
            📞 090-9725-1572
          </a>
        </div>
        <div style={{ fontSize: 13, opacity: .65, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          <span>絲（いとあわせ）</span>
          <span>代表：中丸 晴留哉</span>
          <span>itoawase0324@gmail.com</span>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "#111827", color: "rgba(255,255,255,.55)", fontSize: 12, padding: "24px 0", textAlign: "center" }}>
        <p>© 2026 絲（いとあわせ）. All rights reserved. |{" "}
          <Link href="/" style={{ color: "rgba(255,255,255,.55)" }}>www.itoawase.jp</Link>
        </p>
      </footer>

    </div>
  );
}
