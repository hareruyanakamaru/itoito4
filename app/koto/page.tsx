import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "江東区の子ども向け単発体験・ワークショップ | itoito",
  description:
    "江東区・清澄白河・豊洲・木場エリアで開催。月謝なし・1回から参加できる子ども向け学び体験。職人・専門家と一緒に料理・ものづくり・自然探究を体験しよう。習い事以外で子どもの「好き」を見つける。",
  openGraph: {
    title: "江東区の子ども向け単発体験 | itoito",
    description: "江東区・清澄白河・豊洲エリアで1回から参加できる学び体験。職人・専門家と一緒に本物に触れる。",
  },
};

const AREAS = ["清澄白河", "豊洲", "木場", "東陽町", "住吉", "亀戸", "門前仲町"];

const FEATURES = [
  {
    emoji: "🎯",
    title: "単発OK・月謝なし",
    desc: "1回から参加できます。「まず試してみたい」に応える体験マッチング。",
  },
  {
    emoji: "🧑‍🎨",
    title: "本物のプロと一対一に近い環境で",
    desc: "職人・元教師・クリエイターが少人数制で丁寧に教えます。",
  },
  {
    emoji: "📍",
    title: "江東区・東京東部エリア特化",
    desc: "清澄白河・豊洲・木場など、地域に根ざしたパートナーが体験を届けます。",
  },
  {
    emoji: "🌱",
    title: "習い事じゃない学び体験",
    desc: "「問いを立てる力」「本物に触れる喜び」——教科書にない学びがここにある。",
  },
];

const CATEGORIES = [
  { emoji: "🍳", label: "料理・発酵・食" },
  { emoji: "🎨", label: "アート・ものづくり" },
  { emoji: "🌿", label: "自然・農業・環境" },
  { emoji: "🔬", label: "サイエンス・実験" },
  { emoji: "🪵", label: "木工・伝統工芸" },
  { emoji: "💼", label: "職業・お仕事探究" },
];

export default function KotoPage() {
  return (
    <div className="bg-[#fdfaf6] min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-amber-50 to-[#fdfaf6] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full mb-4">
            📍 江東区・東京東部エリア
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 leading-tight mb-4">
            江東区で、子どもが<br />
            <span className="text-amber-600">本物に触れる学び体験</span>を。
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
            月謝なし・単発OK。清澄白河・豊洲・木場などのエリアで、<br className="hidden sm:block" />
            職人や専門家と一緒に「やってみたい」をかなえる体験マッチング。
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {AREAS.map((area) => (
              <span key={area} className="text-xs bg-white border border-stone-200 text-stone-600 px-3 py-1 rounded-full shadow-sm">
                {area}
              </span>
            ))}
          </div>
          <Link
            href="/#experiences"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors shadow-md"
          >
            体験を探す →
          </Link>
        </div>
      </section>

      {/* ── itoitoの特徴 ── */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-bold text-stone-800 text-center mb-8">
            itoitoが選ばれる理由
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm">
                <div className="text-2xl mb-2">{f.emoji}</div>
                <h3 className="font-bold text-stone-800 text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── カテゴリー ── */}
      <section className="py-10 px-4 bg-amber-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-bold text-stone-800 text-center mb-6">
            こんな体験が見つかります
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c.label}
                href="/#experiences"
                className="bg-white rounded-xl p-3 text-center border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-xl mb-1">{c.emoji}</div>
                <div className="text-xs font-medium text-stone-700">{c.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── よくある質問 ── */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-bold text-stone-800 text-center mb-8">
            よくある質問
          </h2>
          <div className="flex flex-col gap-4">
            {[
              {
                q: "何歳から参加できますか？",
                a: "体験によって異なりますが、3歳〜18歳を対象とした体験を掲載しています。各体験の「対象年齢」をご確認ください。",
              },
              {
                q: "江東区以外の体験もありますか？",
                a: "現在は江東区・東京東部エリアを中心に展開しています。今後は首都圏全域に拡大予定です。",
              },
              {
                q: "1回だけの参加でも大丈夫ですか？",
                a: "はい、単発参加が基本です。月謝や継続義務は一切ありません。",
              },
              {
                q: "パートナー（体験提供者）になりたい場合は？",
                a: "職人・教師・クリエイターの方は無料でパートナー登録できます。掲載費用も0円です。",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm">
                <p className="font-bold text-stone-800 text-sm mb-2">Q. {item.q}</p>
                <p className="text-xs text-stone-500 leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 px-4 bg-stone-800 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-lg font-bold mb-3">
            江東区で、子どもの「やりたい」を見つけよう。
          </h2>
          <p className="text-sm opacity-75 mb-6">
            清澄白河・豊洲・木場エリアで開催中の体験を今すぐチェック
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#experiences"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-full text-sm transition-colors"
            >
              体験を探す →
            </Link>
            <Link
              href="/for-host"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-white hover:text-stone-800 transition-colors"
            >
              パートナーになる
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
