import { useState } from "react";
import Button from "./Button";
import Card from "./Card";

const quotes = [
  {
    quote: "すべての子供は芸術家である。問題は、大人になっても芸術家でいられるかどうかだ。",
    person: "パブロ・ピカソ",
    years: "1881-1973",
    description: "画家・彫刻家"
  },
  {
    quote: "失敗したわけではない。ただ、うまくいかない方法を1万通り見つけただけだ。",
    person: "トーマス・エジソン",
    years: "1847-1931",
    description: "発明家"
  },
  {
    quote: "人生とは、自分を見つけることではない。人生とは、自分を創ることである。",
    person: "ジョージ・バーナード・ショー",
    years: "1856-1950",
    description: "劇作家・批評家"
  },
  {
    quote: "最も暗い夜でも、星は輝いている。",
    person: "マーティン・ルーサー・キング・Jr.",
    years: "1929-1968",
    description: "公民権運動指導者"
  },
  {
    quote: "賢者はチャンスを見つけ、凡人はチャンスを待つ。",
    person: "フランシス・ベーコン",
    years: "1561-1626",
    description: "哲学者・政治家"
  },
  {
    quote: "人間の価値は、その人が得たものではなく、その人が与えたもので測られる。",
    person: "アルベルト・アインシュタイン",
    years: "1879-1955",
    description: "物理学者"
  },
  {
    quote: "やる気が出るのを待ってはいけない。行動すれば、やる気は後からついてくる。",
    person: "ウィリアム・ジェームズ",
    years: "1842-1910",
    description: "心理学者・哲学者"
  },
  {
    quote: "勝者とは、一度も負けたことがない人ではなく、決して諦めない人のことである。",
    person: "ナポレオン・ボナパルト",
    years: "1769-1821",
    description: "フランス皇帝"
  },
  {
    quote: "あなたが変われば、世界も変わる。",
    person: "マハトマ・ガンディー",
    years: "1869-1948",
    description: "政治指導者・思想家"
  },
  {
    quote: "未来を予測する最善の方法は、それを創ることだ。",
    person: "ピーター・ドラッカー",
    years: "1909-2005",
    description: "経営学者"
  }
];

export default function RandomMessage() {
  const [quote, setQuote] = useState(null);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card>
        <h2 className="text-xl font-bold mb-4">本日の名言</h2>
        {quote ? (
          <>
            <p className="text-lg font-semibold">「{quote.quote}」</p>
            <hr className="my-2 border-t border-gray-400" />
            <p className="text-md font-bold">{quote.person} ({quote.years})</p>
            <p className="text-sm text-gray-600">{quote.description}</p>
          </>
        ) : (
          <p className="text-lg mb-4">ボタンを押して名言を表示！</p>
        )}
        <Button onClick={generateQuote}>名言を取得</Button>
      </Card>
    </div>
  );
}
