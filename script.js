// 質問データ
const questions = [
    {
        question: "チームでプロジェクトを進める際、あなたはどのような役割を担うことが多いですか？",
        answers: [
            { text: "全体の方向性を決め、チームをまとめる", type: "leader" },
            { text: "メンバーをサポートし、調整役として動く", type: "supporter" },
            { text: "新しいアイデアを出し、創造的な解決策を提案する", type: "creator" },
            { text: "データを分析し、論理的な判断材料を提供する", type: "analyst" }
        ]
    },
    {
        question: "仕事で最もやりがいを感じるのはどんな時ですか？",
        answers: [
            { text: "目標を達成し、チームを成功に導いた時", type: "leader" },
            { text: "他の人の役に立ち、感謝された時", type: "supporter" },
            { text: "新しいものを生み出し、形にできた時", type: "creator" },
            { text: "複雑な問題を解決し、最適な答えを見つけた時", type: "analyst" }
        ]
    },
    {
        question: "困難な状況に直面した時、あなたはどのように対応しますか？",
        answers: [
            { text: "リーダーシップを発揮し、積極的に解決策を実行する", type: "leader" },
            { text: "周囲と協力し、皆で乗り越える方法を考える", type: "supporter" },
            { text: "既存の方法にとらわれず、新しいアプローチを試す", type: "creator" },
            { text: "状況を冷静に分析し、最も効率的な解決法を探す", type: "analyst" }
        ]
    },
    {
        question: "あなたの強みは次のうちどれに最も近いですか？",
        answers: [
            { text: "決断力と行動力", type: "leader" },
            { text: "共感力とコミュニケーション能力", type: "supporter" },
            { text: "創造力と発想力", type: "creator" },
            { text: "分析力と論理的思考", type: "analyst" }
        ]
    },
    {
        question: "理想的な働き方はどれですか？",
        answers: [
            { text: "責任ある立場で、大きな裁量を持って働く", type: "leader" },
            { text: "チームの一員として、協力しながら働く", type: "supporter" },
            { text: "自由度が高く、自分のアイデアを形にできる環境", type: "creator" },
            { text: "専門性を活かし、深く掘り下げて働く", type: "analyst" }
        ]
    },
    {
        question: "新しいプロジェクトが始まる時、最初に何をしますか？",
        answers: [
            { text: "全体の戦略とゴールを設定する", type: "leader" },
            { text: "チームメンバーの意見を聞き、役割分担を考える", type: "supporter" },
            { text: "ブレインストーミングで新しいアイデアを出す", type: "creator" },
            { text: "情報を収集し、現状分析を行う", type: "analyst" }
        ]
    },
    {
        question: "仕事上の意思決定において、何を最も重視しますか？",
        answers: [
            { text: "目標達成とビジネス成果", type: "leader" },
            { text: "関係者への影響と調和", type: "supporter" },
            { text: "革新性と独創性", type: "creator" },
            { text: "論理性と客観的なデータ", type: "analyst" }
        ]
    },
    {
        question: "ストレスを感じるのはどんな状況ですか？",
        answers: [
            { text: "自分の裁量が制限され、思うように動けない時", type: "leader" },
            { text: "チーム内で対立があり、雰囲気が悪い時", type: "supporter" },
            { text: "ルーティンワークばかりで、創造性を発揮できない時", type: "creator" },
            { text: "不確実な情報だけで、判断を求められる時", type: "analyst" }
        ]
    },
    {
        question: "周囲からどのように評価されることが多いですか？",
        answers: [
            { text: "頼りになる、リーダーシップがある", type: "leader" },
            { text: "優しい、協調性がある", type: "supporter" },
            { text: "独創的、発想が豊か", type: "creator" },
            { text: "正確、論理的", type: "analyst" }
        ]
    },
    {
        question: "5年後、どのようなキャリアを歩んでいたいですか？",
        answers: [
            { text: "マネジメント層として、組織をリードしている", type: "leader" },
            { text: "多くの人と関わり、信頼される存在になっている", type: "supporter" },
            { text: "専門分野で独自の価値を生み出している", type: "creator" },
            { text: "特定分野のエキスパートとして認められている", type: "analyst" }
        ]
    }
];

// 人材タイプの定義
const talentTypes = {
    leader: {
        name: "リーダータイプ",
        emoji: "👑",
        description: "あなたは生まれながらのリーダーです。目標を設定し、チームを導く力があります。責任感が強く、決断力に優れています。",
        strengths: [
            "優れた決断力と実行力",
            "ビジョンを示し、人を動かす力",
            "責任感が強く、目標達成に向けて邁進できる",
            "困難な状況でもリーダーシップを発揮できる"
        ],
        careers: [
            "経営者・起業家",
            "マネージャー・管理職",
            "プロジェクトリーダー",
            "コンサルタント"
        ],
        advice: "さらに成長するためには、メンバーの意見に耳を傾ける傾聴力を磨くことが大切です。また、時には他者にタスクを委任し、育成する視点も持ちましょう。"
    },
    supporter: {
        name: "サポータータイプ",
        emoji: "🤝",
        description: "あなたは優れたチームプレイヤーです。共感力が高く、周囲との調和を大切にします。人の成長をサポートすることに喜びを感じます。",
        strengths: [
            "高い共感力とコミュニケーション能力",
            "チームの調和を保つ調整力",
            "他者のニーズを理解し、サポートできる",
            "信頼関係を築くのが得意"
        ],
        careers: [
            "人事・人材開発",
            "カスタマーサポート",
            "チームコーディネーター",
            "カウンセラー・コーチ"
        ],
        advice: "自分の意見や希望も大切にしましょう。他者への配慮は素晴らしい強みですが、時には自己主張することも必要です。自分のキャリア目標を明確にすることをお勧めします。"
    },
    creator: {
        name: "クリエイタータイプ",
        emoji: "🎨",
        description: "あなたは創造性豊かなイノベーターです。新しいアイデアを生み出し、既存の枠にとらわれない発想ができます。変化を楽しむ柔軟性があります。",
        strengths: [
            "豊かな創造力と発想力",
            "既存の枠にとらわれない柔軟な思考",
            "新しいことにチャレンジする積極性",
            "問題を独創的な方法で解決できる"
        ],
        careers: [
            "デザイナー・クリエイター",
            "商品開発・企画",
            "マーケティング",
            "研究開発職"
        ],
        advice: "アイデアを実現するためには、計画性と実行力も必要です。創造性を活かしつつ、プロジェクト管理のスキルも磨くことで、さらに価値を発揮できるでしょう。"
    },
    analyst: {
        name: "アナリストタイプ",
        emoji: "📊",
        description: "あなたは論理的思考に優れた分析家です。データに基づいた判断を重視し、複雑な問題を解決する能力があります。正確性と専門性を大切にします。",
        strengths: [
            "優れた分析力と論理的思考",
            "データに基づいた客観的な判断ができる",
            "複雑な問題を体系的に解決できる",
            "高い専門性と正確性"
        ],
        careers: [
            "データアナリスト・データサイエンティスト",
            "財務・会計",
            "品質管理",
            "戦略プランナー"
        ],
        advice: "データだけでなく、人の感情や直感も大切な判断材料です。分析力という強みを活かしつつ、コミュニケーション能力を高めることで、さらに影響力を増すことができます。"
    }
};

// アプリケーションの状態管理
let currentQuestionIndex = 0;
let scores = {
    leader: 0,
    supporter: 0,
    creator: 0,
    analyst: 0
};

// DOM要素
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');

// イベントリスナー
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', resetQuiz);

// 診断開始
function startQuiz() {
    showScreen(questionScreen);
    totalQuestionsSpan.textContent = questions.length;
    showQuestion();
}

// 画面切り替え
function showScreen(screen) {
    [startScreen, questionScreen, resultScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// 質問表示
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    // プログレスバー更新
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';

    // 回答選択肢を生成
    answersDiv.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(answer.type));
        answersDiv.appendChild(button);
    });
}

// 回答選択
function selectAnswer(type) {
    scores[type]++;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 結果表示
function showResult() {
    // 最も高いスコアのタイプを判定
    let maxScore = 0;
    let resultType = '';

    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            resultType = type;
        }
    }

    const result = talentTypes[resultType];

    // 結果画面に表示
    document.getElementById('result-type').textContent = result.emoji;
    document.getElementById('result-type').className = 'result-type ' + resultType;
    document.getElementById('result-title').textContent = result.name;
    document.getElementById('result-description').textContent = result.description;

    // 強み
    const strengthsList = document.getElementById('result-strengths');
    strengthsList.innerHTML = '';
    result.strengths.forEach(strength => {
        const li = document.createElement('li');
        li.textContent = strength;
        strengthsList.appendChild(li);
    });

    // 適した職種
    const careersList = document.getElementById('result-careers');
    careersList.innerHTML = '';
    result.careers.forEach(career => {
        const li = document.createElement('li');
        li.textContent = career;
        careersList.appendChild(li);
    });

    // アドバイス
    document.getElementById('result-advice').textContent = result.advice;

    showScreen(resultScreen);
}

// リセット
function resetQuiz() {
    currentQuestionIndex = 0;
    scores = {
        leader: 0,
        supporter: 0,
        creator: 0,
        analyst: 0
    };
    showScreen(startScreen);
}
