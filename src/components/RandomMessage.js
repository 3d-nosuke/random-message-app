import { useState } from "react";
import Button from "./Button";
import Card from "./Card";

const quotes = [
    { quote: "すべての子供は芸術家である。問題は、大人になっても芸術家でいられるかどうかだ。", person: "パブロ・ピカソ", years: "1881-1973", description: "画家・彫刻家" },
    { quote: "失敗したわけではない。ただ、うまくいかない方法を1万通り見つけただけだ。", person: "トーマス・エジソン", years: "1847-1931", description: "発明家" },
    { quote: "人生とは、自分を見つけることではない。人生とは、自分を創ることである。", person: "ジョージ・バーナード・ショー", years: "1856-1950", description: "劇作家・批評家" },
    { quote: "最も暗い夜でも、星は輝いている。", person: "マーティン・ルーサー・キング・Jr.", years: "1929-1968", description: "公民権運動指導者" },
    { quote: "賢者はチャンスを見つけ、凡人はチャンスを待つ。", person: "フランシス・ベーコン", years: "1561-1626", description: "哲学者・政治家" },
    { quote: "人間の価値は、その人が得たものではなく、その人が与えたもので測られる。", person: "アルベルト・アインシュタイン", years: "1879-1955", description: "物理学者" },
    { quote: "やる気が出るのを待ってはいけない。行動すれば、やる気は後からついてくる。", person: "ウィリアム・ジェームズ", years: "1842-1910", description: "心理学者・哲学者" },
    { quote: "勝者とは、一度も負けたことがない人ではなく、決して諦めない人のことである。", person: "ナポレオン・ボナパルト", years: "1769-1821", description: "フランス皇帝" },
    { quote: "あなたが変われば、世界も変わる。", person: "マハトマ・ガンディー", years: "1869-1948", description: "政治指導者・思想家" },
    { quote: "未来を予測する最善の方法は、それを創ることだ。", person: "ピーター・ドラッカー", years: "1909-2005", description: "経営学者" },
    { quote: "もし道がないなら、自ら道を作れ。", person: "ハンニバル", years: "紀元前247-183", description: "軍事指導者" },
    { quote: "夢を持て、それがあればこの先の未来が決まる。", person: "ウォルト・ディズニー", years: "1901-1966", description: "アニメーター・実業家" },
    { quote: "才能とは、努力を続ける力のことだ。", person: "スティーブ・ジョブズ", years: "1955-2011", description: "Apple創業者" },
    { quote: "他人の人生ではなく、自分の人生を生きよ。", person: "スティーブ・ジョブズ", years: "1955-2011", description: "Apple創業者" },
    { quote: "チャンスは準備が整った者にのみ訪れる。", person: "ルイ・パスツール", years: "1822-1895", description: "細菌学者" },
    { quote: "小さなことを大切にしなさい。それが成功への鍵となる。", person: "コンフューシャス（孔子）", years: "紀元前551-479", description: "哲学者" },
    { quote: "希望とは、目に見えないものを信じる力だ。", person: "ヘレン・ケラー", years: "1880-1968", description: "教育者・社会福祉活動家" },
    { quote: "問題が大きくても、解決策は必ずある。", person: "ネルソン・マンデラ", years: "1918-2013", description: "南アフリカ元大統領" },
    { quote: "平和は笑顔から始まる。", person: "マザー・テレサ", years: "1910-1997", description: "修道女・社会活動家" },
    { quote: "知識は力なり。", person: "フランシス・ベーコン", years: "1561-1626", description: "哲学者・政治家" },
    { quote: "勇気とは、恐怖に打ち勝つことだ。", person: "ウィンストン・チャーチル", years: "1874-1965", description: "イギリス首相" },
    { quote: "成功とは、失敗を重ねながらも情熱を失わないことだ。", person: "ウィンストン・チャーチル", years: "1874-1965", description: "イギリス首相" },
    { quote: "真の幸福とは、他人の幸せを願うことにある。", person: "ダライ・ラマ14世", years: "1935-", description: "チベット仏教指導者" },
    { quote: "人は信じた通りの人間になる。", person: "ヘンリー・フォード", years: "1863-1947", description: "自動車産業の先駆者" },
    { quote: "あなたの時間は限られている。他人の人生を生きている暇はない。", person: "スティーブ・ジョブズ", years: "1955-2011", description: "Apple創業者" },
    { quote: "人生は選択の連続であり、その選択が運命を決める。", person: "エレノア・ルーズベルト", years: "1884-1962", description: "アメリカ合衆国のファーストレディ" },
    { quote: "世界を変えたいなら、まず自分が変わることだ。", person: "マハトマ・ガンディー", years: "1869-1948", description: "政治指導者・思想家" },
    { quote: "努力は必ず報われるとは限らないが、成功者はすべて努力している。", person: "オプラ・ウィンフリー", years: "1954-", description: "TV司会者・実業家" },
    { quote: "人生の目的は、自分の才能を見つけ、それを世界と共有することだ。", person: "アインシュタイン", years: "1879-1955", description: "物理学者" },
    { quote: "あなたが変われば、世界も変わる。", person: "マハトマ・ガンディー", years: "1869-1948", description: "政治指導者・思想家" },
    { quote: "夢を持て、それがあればこの先の未来が決まる。", person: "ウォルト・ディズニー", years: "1901-1966", description: "アニメーター・実業家" },
    // 🔹 日本の偉人の名言
    { quote: "おもしろき こともなき世を おもしろく。", person: "高杉晋作", years: "1839-1867", description: "幕末の志士" },
    { quote: "為せば成る 為さねば成らぬ 何事も。", person: "上杉鷹山", years: "1751-1822", description: "江戸時代の大名・改革者" },
    { quote: "道を開くのは己である。", person: "西郷隆盛", years: "1828-1877", description: "明治維新の指導者" },
    { quote: "学べば学ぶほど、自分が何も知らないことに気づく。", person: "福沢諭吉", years: "1835-1901", description: "教育者・啓蒙思想家" },
    { quote: "人の一生は重荷を負うて遠き道を行くがごとし。", person: "徳川家康", years: "1543-1616", description: "江戸幕府初代将軍" },
    { quote: "敵を知り己を知れば百戦危うからず。", person: "孫子（兵法）", years: "紀元前6世紀", description: "戦略家・軍師" },
    { quote: "志を立てることが、すべての始まりだ。", person: "坂本龍馬", years: "1836-1867", description: "幕末の志士" },
    { quote: "人を育てるのは、環境ではなく、その人自身の決意である。", person: "松下幸之助", years: "1894-1989", description: "パナソニック創業者" },
    { quote: "チャンスは貯金できない。", person: "松下幸之助", years: "1894-1989", description: "パナソニック創業者" },
    { quote: "夢なき者に成功なし。", person: "吉田松陰", years: "1830-1859", description: "幕末の思想家" },
    { quote: "己を知り、己を磨け。", person: "宮本武蔵", years: "1584-1645", description: "剣豪・兵法家" },
    { quote: "真の自由とは、自らを律することから始まる。", person: "夏目漱石", years: "1867-1916", description: "小説家" },
    { quote: "努力する者は希望を語り、怠ける者は不満を語る。", person: "井上靖", years: "1907-1991", description: "作家" },
    { quote: "道を知る者は多いが、それを実行する者は少ない。", person: "二宮尊徳", years: "1787-1856", description: "農政家・思想家" },
    { quote: "幸せとは、与えられるものではなく、自らの手で掴むものである。", person: "渋沢栄一", years: "1840-1931", description: "日本資本主義の父" },
    { quote: "逆境こそが、最良の教師である。", person: "武田信玄", years: "1521-1573", description: "戦国大名" },
    { quote: "最後までやり遂げた人間が、勝者となる。", person: "豊臣秀吉", years: "1537-1598", description: "戦国武将・天下人" },
    { quote: "夢を叶えるためには、まず一歩を踏み出せ。", person: "織田信長", years: "1534-1582", description: "戦国武将" },
    { quote: "逆境に打ち勝つ者こそ、未来を切り拓く。", person: "加藤清正", years: "1562-1611", description: "戦国武将" }
];

export default function RandomMessage() {
  const [quote, setQuote] = useState(null);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>本日の名言</h2>
        {quote ? (
          <>
            <p className="quote-text">「{quote.quote}」</p>
            <hr />
            <p className="quote-person">{quote.person} ({quote.years})</p>
            <p className="quote-description">{quote.description}</p>
          </>
        ) : (
          <p>ボタンを押して名言を表示！</p>
        )}
        <Button onClick={generateQuote}>名言を取得</Button>
      </div>
    </div>
  );
}
