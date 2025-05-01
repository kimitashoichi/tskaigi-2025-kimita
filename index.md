# TSkaigi クイズから学べる実務のポイント一覧
各問題を通じて、実務で役立つ学びを抽出しました。

## ✅ Q1：基本的な関数の型注釈
```ts
const greet = (name: string) => `Hello ${name}`;
```
- 明示的な型指定はバグの早期発見に有効。
- 「暗黙の型推論」に頼りすぎず、適切な型付けが安全を生む。


## 🚨 Q2：無理やりな型キャスト
```ts
const age = "29" as any as number;
```
- any経由の強引なキャストは型安全性を破壊する。
- 安易なキャストはバグの原因に。型エラーの根本を直す習慣を持つ。


## 📌 Q3：JSON.parse と型アサーション
```ts
declare const input: string;
const data = JSON.parse(input) as { id: number; };
```
- 外部入力は必ずランタイムチェックが必要。型アサーションだけでは不十分。
- 実務ではランタイム型チェックライブラリ（例: Zod）の併用が推奨。


## 🔖 Q4：as const の有効活用
```ts
const tags = ["a", "b"] as const;
type T = typeof tags[number];
```
- as const はリテラル型を固定化して安全な定数を作れる。
- 設定ファイルやEnum代替に活用でき、誤った値を防げる。


## 🛡️ Q5：satisfies を使った型制約
```ts
const config = {
  apiKey: "1234567890",
  timeout: 1000,
} satisfies Config;
```
- satisfies は型情報を失わずに型を強化する。
- 余分なプロパティや不要なキャストを防ぎ、設定オブジェクトなどに最適。


## 💣 Q6：@ts-ignore の危険性
```ts
// @ts-ignore
const data = JSON.parse(input) as { id: number; };
```
- @ts-ignore は問題を隠蔽するだけで、解決しない。
- 実務では許可された例外を除き極力使わない。使ったら必ず理由を明記。


## 💪 Q7：笑いネタ「筋トレ型」
```ts
type FinalDecision = "筋トレ";
function askQuestion(question: string): FinalDecision {
  return "筋トレ";
}

const stressRelief = askQuestion("ストレス解消の一番の方法は？");
const careerAdvice = askQuestion("エンジニアとして成長するには？");
const firstDatePlan = askQuestion("初デートはどこに行くべき？");
```
- 型システムで特定の「決まった回答」を強制すると、意図外の回答を防げる。
- 承認済みなどのステータス管理に応用可能。


## 🍙 Q8：日常を型で厳密に定義する
```ts
type Onigiri = "鮭" | "梅" | "ツナマヨ";
type Shape = "三角" | "丸";
type Nori = "あり" | "なし";

type SafeOnigiri = {
  具: Onigiri;
  形状: Shape;
  海苔: Nori;
}

function makeOnigiri(具: Onigiri, 形状: Shape, 海苔: Nori): SafeOnigiri {
  return {
    具,
    形状,
    海苔,
  };
}

const lunch = makeOnigiri("鮭", "三角", "あり");
```
- 型ガード（ユーザー定義型ガード）は、型推論を強化し安全性を高める。
- APIレスポンスの型チェックなど実務的応用が多数あり、必須のテクニック。


## 🎉 Last：型ガードを活用した安全チェック
```ts
type Conference = "TSkaigi" | "JSConf" | "PHPConf";

function isTSkaigi(conf: Conference): conf is "TSkaigi" {
  return conf === "TSkaigi";
}

const conf = "JSConf";
if (isTSkaigi(conf)) {
  console.log("型安全！");
} else {
  throw new Error("型破りなイベントを検知しました！");
}
```
- 型ガード（ユーザー定義型ガード）は、型推論を強化し安全性を高める。
- APIレスポンスの型チェックなど実務的応用が多数あり、必須のテクニック。
