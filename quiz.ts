// Q1
const greet = (name: string) => `Hello ${name}`;

// Q2
const age = "29" as any as number;

// Q3
declare const input: string;
const data = JSON.parse(input) as { id: number; };


// Q4
const tags = ["a", "b"] as const;
type T = typeof tags[number];

// Q5
const config = {
  port: 3000,
  debug: true,
} satisfies {
  port: number;
  debug?: boolean;
};

// Q6
// @ts-ignore
const user: User = fetch("/user");

// Q7
type FinalDecision = "筋トレ";
function askQuestion(question: string): FinalDecision {
  return "筋トレ";
}

const stressRelief = askQuestion("ストレス解消の一番の方法は？");
const careerAdvice = askQuestion("エンジニアとして成長するには？");
const firstDatePlan = askQuestion("初デートはどこに行くべき？");

// Q8
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


// Last
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
