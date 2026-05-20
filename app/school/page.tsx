import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "職場体験・キャリア教育サポート | 絲（いとあわせ）",
  description:
    "久留米市立青陵中学校・明星中学校にて継続受託。地域と学校をつなぎ、職場体験・探究学習・キャリア教育を実践する教育支援グループ。久留米市教育委員会との確認書締結済み。",
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

const TARGETS = [
  {
    emoji: "🏫",
    who: "学校関係者の方へ",
    what: "職場体験・探究学習の運営支援",
    desc: "事業所調整から事前事後指導まで、先生方の負担を軽減します。",
  },
  {
    emoji: "🏢",
    who: "地域事業者の方へ",
    what: "子どもたちの受け入れ・教育連携",
    desc: "受け入れ準備の手引きを整備し、学校との連携をサポートします。",
  },
  {
    emoji: "🏛️",
    who: "行政・教育委員会の方へ",
    what: "キャリア教育の外部委託パートナー",
    desc: "確認書締結のうえ、教育委員会と連携した事業運営が可能です。",
  },
];

const RESULTS_TABLE = [
  { year: "令和6年度", school: "青陵中学校", content: "職場体験運営サポート（1年目）", students: "約120名", offices: "約50事業所" },
  { year: "令和7年度", school: "青陵中学校", content: "職場体験運営サポート（2年目）継続", students: "約120名", offices: "約50事業所" },
  { year: "令和7年度", school: "明星中学校", content: "職場体験運営サポート（1年目）", students: "ー", offices: "ー" },
  { year: "令和8年度", school: "青陵中学校・明星中学校", content: "両校継続受託（予定）", students: "ー", offices: "ー" },
];

export default function SchoolPage() {
  return (
    <div style={{ fontFamily: "'Hiragino Sans','Hiragino Kaku Gothic ProN','Meiryo',sans-serif", color: "#1f2937", lineHeight: 1.75, fontSize: 15 }}>

      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(135deg,#1c3358 0%,#2563c8 100%)", color: "#fff", padding: "72px 0 64px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".1em", opacity: .65, marginBottom: 16 }}>
            絲（いとあわせ）｜教育支援グループ
          </div>
          <h1 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 900, lineHeight: 1.35, marginBottom: 20 }}>
            地域と学校をつなぎ、<br />
            子どもたちの<em style={{ fontStyle: "normal", borderBottom: "3px solid #fbbf24" }}>リアルな学び</em>をつくる。
          </h1>
          <p style={{ opacity: .85, fontSize: 15, lineHeight: 1.9, marginBottom: 32, maxWidth: 560 }}>
            久留米市を中心に、職場体験・探究学習・キャリア教育を<br />
            地域事業者とともに実践しています。
          </p>

          {/* 実績数字 */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            {[
              { num: "2校", label: "継続受託中" },
              { num: "3年", label: "最長継続年数" },
              { num: "50+", label: "連携事業所数" },
              { num: "120名", label: "年間対象生徒数" },
            ].map(s => (
              <div key={s.label} style={{ background: "rgba(255,255,255,.12)", borderRadius: 10, padding: "12px 20px", textAlign: "center", minWidth: 90 }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#fbbf24" }}>{s.num}</div>
                <div style={{ fontSize: 11, opacity: .75, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["✅ 久留米市教育委員会 確認書締結済み", "✅ 元教員スタッフによる運営", "✅ R6年度〜継続実績"].map(b => (
              <span key={b} style={{ background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.25)", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 600 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 誰向けか ── */}
      <section style={{ padding: "64px 0", background: "#f9fafb" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: "#6b7280", marginBottom: 8 }}>FOR WHOM</div>
          <div style={{ width: 32, height: 3, background: "#2563c8", marginBottom: 20 }} />
          <h2 style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 800, marginBottom: 32 }}>こんな方に使っていただいています</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
            {TARGETS.map(t => (
              <div key={t.who} style={{ background: "#fff", borderRadius: 14, border: "1.5px solid #e5e7eb", padding: "24px 20px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{t.emoji}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#2563c8", marginBottom: 4 }}>{t.who}</div>
                <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 8 }}>{t.what}</div>
                <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 実績（テーブル） ── */}
      <section id="results" style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: "#6b7280", marginBottom: 8 }}>RESULTS</div>
          <div style={{ width: 32, height: 3, background: "#2563c8", marginBottom: 20 }} />
          <h2 style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 800, marginBottom: 8 }}>実績一覧</h2>
          <p style={{ color: "#4b5563", fontSize: 14, marginBottom: 24 }}>久留米市教育委員会との確認書を締結のうえ、継続して受託しています。</p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#1c3358", color: "#fff" }}>
                  {["年度", "学校", "内容", "対象生徒数", "連携事業所"].map(h => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RESULTS_TABLE.map((r, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#f9fafb" : "#fff", borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "10px 14px", fontWeight: 700, whiteSpace: "nowrap" }}>{r.year}</td>
                    <td style={{ padding: "10px 14px", whiteSpace: "nowrap" }}>{r.school}</td>
                    <td style={{ padding: "10px 14px" }}>{r.content}</td>
                    <td style={{ padding: "10px 14px", textAlign: "center" }}>{r.students}</td>
                    <td style={{ padding: "10px 14px", textAlign: "center" }}>{r.offices}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 今年度日程 */}
          <div style={{ background: "#ebf2ff", borderRadius: 10, border: "1.5px solid #c7d9f8", padding: "20px 24px", marginTop: 24, fontSize: 14, lineHeight: 1.9 }}>
            <strong style={{ color: "#1c3358" }}>📅 令和8年度 実施予定日程</strong>
            <div style={{ marginTop: 10, display: "grid", gap: 4 }}>
              <div>◎ <strong>明星中学校</strong>　令和8年9月1日（火）・2日（水）</div>
              <div>◎ <strong>青陵中学校</strong>　令和8年9月10日（木）・11日（金）</div>
              <div style={{ fontSize: 12, color: "#4b5563", marginTop: 4 }}>時間：9:00〜16:00（予定）／受入依頼人数：2名以上</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 現在の取り組み ── */}
      <section style={{ background: "#f9fafb", padding: "64px 0" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: "#6b7280", marginBottom: 8 }}>ACTIVITIES</div>
          <div style={{ width: 32, height: 3, background: "#2563c8", marginBottom: 20 }} />
          <h2 style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 800, marginBottom: 28 }}>現在の主な取り組み</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 }}>
            {[
              { emoji: "🏫", text: "久留米市内中学校 職場体験運営サポート" },
              { emoji: "🤝", text: "地域事業者とのキャリア教育連携" },
              { emoji: "📝", text: "探究・体験型学習の企画運営" },
              { emoji: "🌱", text: "地域と子どもをつなぐ学びづくり" },
            ].map(a => (
              <div key={a.text} style={{ background: "#fff", borderRadius: 10, border: "1.5px solid #e5e7eb", padding: "16px 18px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20 }}>{a.emoji}</span>
                <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.6 }}>{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── サービスプラン ── */}
      <section id="service" style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: "#6b7280", marginBottom: 8 }}>SERVICE</div>
          <div style={{ width: 32, height: 3, background: "#2563c8", marginBottom: 20 }} />
          <h2 style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 800, marginBottom: 8 }}>3つのサポートプラン</h2>
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
          <a href="mailto:itoawase0324@gmail.com"
            style={{ background: "#fff", color: "#1c3358", fontWeight: 700, padding: "13px 28px", borderRadius: 8, fontSize: 14, textDecoration: "none" }}>
            📧 メールで問い合わせ
          </a>
          <a href="tel:09097251572"
            style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.6)", fontWeight: 700, padding: "13px 28px", borderRadius: 8, fontSize: 14, textDecoration: "none" }}>
            📞 090-9725-1572
          </a>
        </div>
        <div style={{ fontSize: 13, opacity: .65, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          <span>絲（いとあわせ）</span>
          <span>代表：中丸 晴留哉</span>
          <span>itoawase0324@gmail.com</span>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.2)", paddingTop: 36 }}>
          <p style={{ fontSize: 13, opacity: .7, marginBottom: 16 }}>受け入れ事業所の方はこちら</p>
          <a href="https://lin.ee/HiSCSkf" target="_blank" rel="noopener noreferrer"
            style={{ background: "#06C755", color: "#fff", fontWeight: 700, padding: "13px 28px", borderRadius: 8, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            💬 事業所専用 公式LINEを追加する
          </a>
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
