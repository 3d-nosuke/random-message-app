// import { useParams } from "react-router-dom";

// // MBTIのデータ
// const mbtiDescriptions = {
//   ENTP: { title: "ENTP - 討論者", description: "アイデアを出すのが得意で、独創的な発想を持つ人。" },
//   ENTJ: { title: "ENTJ - 指揮官", description: "強いリーダーシップと戦略的な思考を持つ人。" },
//   ENFP: { title: "ENFP - 広報運動家", description: "情熱的で創造的、人とのつながりを大切にする人。" },
//   ENFJ: { title: "ENFJ - 主人公", description: "カリスマ的で、周囲をインスパイアするリーダー。" },
//   ESTP: { title: "ESTP - 起業家", description: "即興力があり、リスクを恐れず行動する人。" },
//   ESTJ: { title: "ESTJ - 幹部", description: "組織のルールを重視し、計画的に物事を進める人。" },
//   ESFP: { title: "ESFP - エンターテイナー", description: "明るく社交的で、周囲を楽しませる人。" },
//   ESFJ: { title: "ESFJ - 領事官", description: "人との調和を大切にし、思いやりのある人。" },
//   INTP: { title: "INTP - 論理学者", description: "理論的で独創的な思考を持ち、新しいアイデアを生み出す人。" },
//   INTJ: { title: "INTJ - 建築家", description: "独立心が強く、長期的な計画を立てる戦略家。" },
//   INFP: { title: "INFP - 仲介者", description: "理想主義で、深い思考と感受性を持つ人。" },
//   INFJ: { title: "INFJ - 提唱者", description: "洞察力があり、共感力に優れたカウンセラータイプ。" },
//   ISTP: { title: "ISTP - 巨匠", description: "問題解決が得意で、実践的なスキルを持つ人。" },
//   ISTJ: { title: "ISTJ - 管理者", description: "責任感が強く、ルールを重視する人。" },
//   ISFP: { title: "ISFP - 冒険家", description: "自由を求め、直感的に行動するアーティストタイプ。" },
//   ISFJ: { title: "ISFJ - 擁護者", description: "思いやりがあり、周囲を支えることに喜びを感じる人。" },
// };

// export default function MBTIPage() {
//   const { type } = useParams();
//   const mbtiData = mbtiDescriptions[type.toUpperCase()] || { title: "不明", description: "該当するMBTIタイプが見つかりません。" };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>{mbtiData.title}</h2>
//       <p>{mbtiData.description}</p>
//     </div>
//   );
// }


import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

// MBTIの基本情報
const mbtiDescriptions = {
  ENTP: { title: "ENTP - 討論者", description: "アイデアを出すのが得意で、独創的な発想を持つ人。" },
  ENTJ: { title: "ENTJ - 指揮官", description: "強いリーダーシップと戦略的な思考を持つ人。" },
  ENFP: { title: "ENFP - 広報運動家", description: "情熱的で創造的、人とのつながりを大切にする人。" },
  INFJ: { title: "INFJ - 提唱者", description: "洞察力があり、共感力に優れたカウンセラータイプ。" },
};

// MBTIごとの追加情報
const mbtiTraits = {
  ENTP: [
    "好奇心旺盛で、新しいアイデアを追求する。",
    "相性が良いタイプ: INFJ, INTJ",
    "相性が悪いタイプ: ISFJ, ISTJ",
    "向いている職業: 起業家、マーケティング、コンサルタント",
  ],
  ENTJ: [
    "論理的で決断力があり、リーダーシップを発揮する。",
    "相性が良いタイプ: ENFP, INFP",
    "相性が悪いタイプ: ISFP, ISTP",
    "向いている職業: CEO、戦略コンサルタント、管理職",
  ],
  ENFP: [
    "社交的で創造的、エネルギッシュで柔軟な性格。",
    "相性が良いタイプ: INTJ, INFJ",
    "相性が悪いタイプ: ISTJ, ESTJ",
    "向いている職業: 広報、クリエイティブ職、教育者",
  ],
  INFJ: [
    "理想主義で、人を助けることに喜びを感じる。",
    "相性が良いタイプ: ENTP, ENFP",
    "相性が悪いタイプ: ESTP, ISTP",
    "向いている職業: カウンセラー、作家、教育者",
  ],
};

// MBTIごとのイラスト（画像のパス）
const mbtiImages = {
  ENTP: "/images/ENTP.png",
  ENTJ: "/images/ENTJ.png",
  ENFP: "/images/ENFP.png",
  INFJ: "/images/INFJ.png",
  // 他のMBTIタイプも追加...
};

export default function MBTIPage() {
  const { type } = useParams();
  const mbtiData = mbtiDescriptions[type.toUpperCase()] || { title: "不明", description: "該当するMBTIタイプが見つかりません。" };
  const traits = mbtiTraits[type.toUpperCase()] || ["情報がありません。"];
  const imageSrc = mbtiImages[type.toUpperCase()] || "/images/default.png";

  const [message, setMessage] = useState(traits[0]);

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * traits.length);
    setMessage(traits[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h2>{mbtiData.title}</h2>
      <p>{mbtiData.description}</p>
      <img src={imageSrc} alt={type} style={{ width: "200px", height: "200px", borderRadius: "10px", margin: "20px auto" }} />
      <hr style={{ width: "50%", margin: "20px auto", borderTop: "1px solid #ccc" }} />
      <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>{message}</p>
      <Button onClick={changeMessage}>性格を知る</Button>
    </div>
  );
}

