// MBTI形式の質問データ（4つの軸を測定）
// E/I: 外向性(Extraversion) vs 内向性(Introversion)
// S/N: 感覚(Sensing) vs 直観(Intuition)
// T/F: 思考(Thinking) vs 感情(Feeling)
// J/P: 判断(Judging) vs 知覚(Perceiving)

const questions = [
    // E/I 外向性 vs 内向性
    {
        question: "休日の過ごし方として、より魅力的に感じるのはどちらですか？",
        answers: [
            { text: "友人や同僚と外出して、活発に活動する", dimension: "E" },
            { text: "一人または親しい人とゆっくり過ごす", dimension: "I" }
        ]
    },
    {
        question: "新しいプロジェクトに取り組む時、あなたはどのように考えを整理しますか？",
        answers: [
            { text: "人と話しながら考えをまとめる", dimension: "E" },
            { text: "一人で静かに考えを深める", dimension: "I" }
        ]
    },
    {
        question: "仕事後のエネルギー回復方法として、より効果的なのはどちらですか？",
        answers: [
            { text: "人と会って話すことで元気になる", dimension: "E" },
            { text: "一人の時間を持つことで充電される", dimension: "I" }
        ]
    },
    {
        question: "初対面の人との交流について、あなたに近いのはどちらですか？",
        answers: [
            { text: "積極的に話しかけ、すぐに打ち解けられる", dimension: "E" },
            { text: "まず相手を観察し、慎重に関係を築く", dimension: "I" }
        ]
    },

    // S/N 感覚 vs 直観
    {
        question: "情報を得る時、より信頼するのはどちらですか？",
        answers: [
            { text: "具体的な事実やデータ、実際の経験", dimension: "S" },
            { text: "全体的なパターンや可能性、未来の展望", dimension: "N" }
        ]
    },
    {
        question: "仕事の説明を受ける際、理解しやすいのはどちらですか？",
        answers: [
            { text: "具体的な手順や詳細な説明", dimension: "S" },
            { text: "全体像や目的、コンセプト", dimension: "N" }
        ]
    },
    {
        question: "問題解決において、より重視するのはどちらですか？",
        answers: [
            { text: "実績のある方法や現実的なアプローチ", dimension: "S" },
            { text: "新しい視点や革新的なアイデア", dimension: "N" }
        ]
    },
    {
        question: "日常の仕事において、より興味を感じるのはどちらですか？",
        answers: [
            { text: "現在の課題を着実に処理すること", dimension: "S" },
            { text: "将来の可能性や新しいチャレンジ", dimension: "N" }
        ]
    },

    // T/F 思考 vs 感情
    {
        question: "意思決定をする際、より重視するのはどちらですか？",
        answers: [
            { text: "論理的な分析と客観的な基準", dimension: "T" },
            { text: "人への影響や価値観との整合性", dimension: "F" }
        ]
    },
    {
        question: "チームメンバーと意見が対立した時、あなたはどう対応しますか？",
        answers: [
            { text: "論理的に議論し、最適解を見つける", dimension: "T" },
            { text: "相手の気持ちを理解し、調和を図る", dimension: "F" }
        ]
    },
    {
        question: "他者からフィードバックを受ける時、より価値を感じるのはどちらですか？",
        answers: [
            { text: "具体的な改善点や論理的な指摘", dimension: "T" },
            { text: "励ましや共感的なサポート", dimension: "F" }
        ]
    },
    {
        question: "あなたが大切にしているのはどちらですか？",
        answers: [
            { text: "公平性と効率性", dimension: "T" },
            { text: "調和と人間関係", dimension: "F" }
        ]
    },

    // J/P 判断 vs 知覚
    {
        question: "仕事の進め方として、より好むのはどちらですか？",
        answers: [
            { text: "計画を立てて、スケジュール通りに進める", dimension: "J" },
            { text: "柔軟に対応し、状況に応じて調整する", dimension: "P" }
        ]
    },
    {
        question: "プロジェクトの締め切りについて、あなたに近いのはどちらですか？",
        answers: [
            { text: "早めに完了させて余裕を持ちたい", dimension: "J" },
            { text: "締め切り直前に集中して仕上げる", dimension: "P" }
        ]
    },
    {
        question: "日常生活において、より心地よいのはどちらですか？",
        answers: [
            { text: "予定が決まっていて、整理された状態", dimension: "J" },
            { text: "選択肢が開かれていて、自由な状態", dimension: "P" }
        ]
    },
    {
        question: "新しい情報や変更について、あなたの反応はどちらに近いですか？",
        answers: [
            { text: "計画への影響を考え、調整が必要か検討する", dimension: "J" },
            { text: "新しい可能性として前向きに受け入れる", dimension: "P" }
        ]
    }
];

// 16タイプの詳細定義（MBTI準拠）
const personalityTypes = {
    "ISTJ": {
        name: "管理者",
        nickname: "The Inspector",
        emoji: "📋",
        description: "実用的で事実に基づいた思考の持ち主です。信頼性が高く、責任感が強く、伝統と秩序を重んじます。",
        strengths: [
            "高い責任感と信頼性",
            "詳細な計画と組織化能力",
            "論理的で客観的な判断",
            "粘り強く目標を達成する"
        ],
        careers: [
            "会計士・監査役",
            "プロジェクトマネージャー",
            "法務関連職",
            "品質管理・コンプライアンス"
        ],
        advice: "時には柔軟性を持ち、新しいアプローチを試すことも大切です。また、感情面でのコミュニケーションにも意識を向けてみましょう。"
    },
    "ISFJ": {
        name: "擁護者",
        nickname: "The Protector",
        emoji: "🛡️",
        description: "献身的で、温かく、他者を守ることに喜びを感じます。細部に気を配り、責任感を持って仕事を遂行します。",
        strengths: [
            "他者への深い思いやり",
            "細部への注意力",
            "忍耐強く献身的",
            "安定した環境を作る能力"
        ],
        careers: [
            "看護師・医療従事者",
            "教師・カウンセラー",
            "人事・総務",
            "図書館司書・事務職"
        ],
        advice: "自分のニーズも大切にしましょう。時には「No」と言うことも必要です。変化を恐れず、新しいチャレンジにも目を向けてみてください。"
    },
    "INFJ": {
        name: "提唱者",
        nickname: "The Counselor",
        emoji: "🌟",
        description: "理想主義者で、深い洞察力を持ちます。他者を助けることに情熱を注ぎ、強い価値観に基づいて行動します。",
        strengths: [
            "深い洞察力と直感",
            "強い理想と価値観",
            "他者への共感力",
            "創造的な問題解決能力"
        ],
        careers: [
            "カウンセラー・心理士",
            "ライター・編集者",
            "人材開発・コーチ",
            "非営利団体職員"
        ],
        advice: "理想と現実のバランスを取りましょう。自分を犠牲にしすぎないよう、セルフケアも大切にしてください。"
    },
    "INTJ": {
        name: "建築家",
        nickname: "The Mastermind",
        emoji: "🏛️",
        description: "戦略的思考に優れ、独立心が強い。長期的なビジョンを持ち、複雑な問題を解決する能力があります。",
        strengths: [
            "戦略的思考と計画能力",
            "独立心と自律性",
            "高い論理的思考力",
            "長期的ビジョンを描く力"
        ],
        careers: [
            "経営戦略コンサルタント",
            "システムエンジニア・アーキテクト",
            "研究者・科学者",
            "投資アナリスト"
        ],
        advice: "他者の感情にも配慮し、コミュニケーションスキルを磨きましょう。完璧主義を緩め、過程も楽しむことを意識してください。"
    },
    "ISTP": {
        name: "巨匠",
        nickname: "The Craftsman",
        emoji: "🔧",
        description: "実践的で論理的、問題解決が得意です。冷静で適応力があり、手を動かして学ぶことを好みます。",
        strengths: [
            "優れた問題解決能力",
            "冷静で論理的な判断",
            "高い適応力と柔軟性",
            "実践的なスキル"
        ],
        careers: [
            "エンジニア・技術者",
            "メカニック・整備士",
            "パイロット・運転手",
            "フォレンジック分析官"
        ],
        advice: "長期的な計画も立ててみましょう。感情表現を豊かにし、人間関係の構築にも時間を投資してください。"
    },
    "ISFP": {
        name: "冒険家",
        nickname: "The Composer",
        emoji: "🎨",
        description: "芸術的で柔軟性があり、現在を大切にします。調和を重んじ、自分の価値観に従って生きます。",
        strengths: [
            "芸術的感性と創造力",
            "柔軟で適応力がある",
            "他者への思いやり",
            "現実的で実践的"
        ],
        careers: [
            "デザイナー・アーティスト",
            "美容師・スタイリスト",
            "写真家・ビデオグラファー",
            "理学療法士・マッサージ師"
        ],
        advice: "長期的な目標も設定してみましょう。自分の意見をもっと積極的に表現し、リーダーシップの機会も探してみてください。"
    },
    "INFP": {
        name: "仲介者",
        nickname: "The Healer",
        emoji: "🌈",
        description: "理想主義的で、深い価値観を持ちます。創造的で、より良い世界を作ることに情熱を注ぎます。",
        strengths: [
            "深い共感力と理解力",
            "豊かな創造力と想像力",
            "強い価値観と理想",
            "柔軟で開かれた心"
        ],
        careers: [
            "ライター・作家",
            "カウンセラー・セラピスト",
            "グラフィックデザイナー",
            "ソーシャルワーカー"
        ],
        advice: "理想だけでなく、実践的なスキルも磨きましょう。批判に対する耐性をつけ、現実的な期限も意識してください。"
    },
    "INTP": {
        name: "論理学者",
        nickname: "The Thinker",
        emoji: "💡",
        description: "分析的で、理論的思考に優れています。知的好奇心が強く、複雑な問題を解決することに喜びを感じます。",
        strengths: [
            "優れた分析力と論理思考",
            "創造的な問題解決能力",
            "知的好奇心と学習意欲",
            "客観的で公平な判断"
        ],
        careers: [
            "ソフトウェア開発者・プログラマー",
            "研究者・科学者",
            "数学者・物理学者",
            "経済学者・アナリスト"
        ],
        advice: "理論だけでなく、実行にも移しましょう。感情面でのコミュニケーションも大切にし、締め切りを守る習慣をつけてください。"
    },
    "ESTP": {
        name: "起業家",
        nickname: "The Dynamo",
        emoji: "⚡",
        description: "エネルギッシュで行動的、リスクを恐れません。現実的で、今この瞬間を楽しむことが得意です。",
        strengths: [
            "素早い意思決定と行動力",
            "高い適応力と柔軟性",
            "現実的な問題解決能力",
            "人を動かす影響力"
        ],
        careers: [
            "営業・セールス",
            "起業家・経営者",
            "マーケター",
            "救急救命士・警察官"
        ],
        advice: "長期的な計画も立てましょう。衝動的な決定を控え、他者の感情にも配慮することを意識してください。"
    },
    "ESFP": {
        name: "エンターテイナー",
        nickname: "The Performer",
        emoji: "🎭",
        description: "社交的で楽しいことが大好き。人々を楽しませ、ポジティブなエネルギーを周囲に与えます。",
        strengths: [
            "高いコミュニケーション能力",
            "ポジティブで楽観的",
            "実践的で現実的",
            "他者を元気づける力"
        ],
        careers: [
            "イベントプランナー",
            "販売員・接客業",
            "パフォーマー・俳優",
            "ツアーガイド"
        ],
        advice: "長期的な目標設定も大切です。計画性を持ち、財務管理にも注意を払いましょう。深い人間関係の構築にも時間を使ってください。"
    },
    "ENFP": {
        name: "運動家",
        nickname: "The Champion",
        emoji: "🌻",
        description: "熱意があり、創造的で社交的。可能性を見出すことが得意で、人々を鼓舞する力があります。",
        strengths: [
            "優れたコミュニケーション能力",
            "豊かな創造力と想像力",
            "人を鼓舞する情熱",
            "柔軟で適応力がある"
        ],
        careers: [
            "マーケター・PR",
            "カウンセラー・コーチ",
            "ジャーナリスト",
            "人事・採用担当"
        ],
        advice: "一つのことを最後までやり遂げる習慣をつけましょう。詳細にも注意を払い、現実的な計画を立てることも大切です。"
    },
    "ENTP": {
        name: "討論者",
        nickname: "The Visionary",
        emoji: "🚀",
        description: "機知に富み、議論を楽しみます。革新的なアイデアを生み出し、知的な刺激を求めます。",
        strengths: [
            "革新的な思考と創造力",
            "優れた議論と説得力",
            "素早い理解力と学習能力",
            "チャレンジ精神"
        ],
        careers: [
            "起業家・イノベーター",
            "コンサルタント",
            "弁護士・法律家",
            "発明家・プロダクトマネージャー"
        ],
        advice: "アイデアを実行に移すことに集中しましょう。他者の感情にも配慮し、ルーティンワークにも耐性をつけてください。"
    },
    "ESTJ": {
        name: "幹部",
        nickname: "The Supervisor",
        emoji: "👔",
        description: "組織力があり、実務的。伝統を重んじ、秩序を作り出すことが得意です。リーダーシップを発揮します。",
        strengths: [
            "優れた組織化と管理能力",
            "強いリーダーシップ",
            "実務的で効率的",
            "責任感と信頼性"
        ],
        careers: [
            "経営管理職",
            "プロジェクトマネージャー",
            "軍人・警察官",
            "銀行員・財務担当"
        ],
        advice: "柔軟性を持ち、他者の意見にも耳を傾けましょう。感情面での配慮も大切にし、革新的なアイデアにもオープンになってください。"
    },
    "ESFJ": {
        name: "領事",
        nickname: "The Provider",
        emoji: "💝",
        description: "思いやりがあり、協調性が高い。人々の世話をすることに喜びを感じ、調和のある環境を作ります。",
        strengths: [
            "高い共感力と思いやり",
            "優れた対人スキル",
            "責任感と献身性",
            "組織化と実行力"
        ],
        careers: [
            "看護師・医療事務",
            "イベントコーディネーター",
            "教師・保育士",
            "人事・カスタマーサービス"
        ],
        advice: "自分のニーズも優先しましょう。批判を個人的に受け取りすぎず、変化にも柔軟に対応できるよう心がけてください。"
    },
    "ENFJ": {
        name: "主人公",
        nickname: "The Teacher",
        emoji: "🌟",
        description: "カリスマ的で、人々を導く力があります。他者の可能性を引き出し、成長を支援することに情熱を注ぎます。",
        strengths: [
            "優れたリーダーシップ",
            "人を鼓舞する影響力",
            "高い共感力と洞察力",
            "優れたコミュニケーション能力"
        ],
        careers: [
            "教師・教育者",
            "人事・人材開発",
            "カウンセラー・コーチ",
            "非営利組織リーダー"
        ],
        advice: "自分のニーズも大切にしましょう。すべての人を満足させることはできません。時には論理的な判断も必要です。"
    },
    "ENTJ": {
        name: "指揮官",
        nickname: "The Commander",
        emoji: "⚔️",
        description: "大胆で、想像力豊か、強い意志を持つリーダー。常により良い方法を見つけ出します。",
        strengths: [
            "戦略的思考とビジョン",
            "強力なリーダーシップ",
            "効率性と生産性への追求",
            "決断力と自信"
        ],
        careers: [
            "CEO・経営者",
            "経営コンサルタント",
            "弁護士・裁判官",
            "投資銀行家"
        ],
        advice: "他者の感情にも配慮しましょう。完璧主義を緩め、プロセスも楽しむことを意識してください。時には他者の意見に耳を傾けることも大切です。"
    }
};

// アプリケーションの状態管理
let currentQuestionIndex = 0;
let scores = {
    E: 0, I: 0,  // 外向 vs 内向
    S: 0, N: 0,  // 感覚 vs 直観
    T: 0, F: 0,  // 思考 vs 感情
    J: 0, P: 0   // 判断 vs 知覚
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

    // 回答選択肢を生成（2択）
    answersDiv.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(answer.dimension));
        answersDiv.appendChild(button);
    });
}

// 回答選択
function selectAnswer(dimension) {
    scores[dimension]++;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 結果表示
function showResult() {
    // 各軸で高いスコアの次元を判定
    const type =
        (scores.E >= scores.I ? 'E' : 'I') +
        (scores.S >= scores.N ? 'S' : 'N') +
        (scores.T >= scores.F ? 'T' : 'F') +
        (scores.J >= scores.P ? 'J' : 'P');

    const result = personalityTypes[type];

    // 結果画面に表示
    document.getElementById('result-type').textContent = result.emoji;
    document.getElementById('result-type').className = 'result-type';

    // タイプコードを表示
    const typeCodeElement = document.getElementById('result-type-code');
    if (typeCodeElement) {
        typeCodeElement.textContent = type;
    } else {
        // 要素が存在しない場合は作成
        const codeDiv = document.createElement('div');
        codeDiv.id = 'result-type-code';
        codeDiv.className = 'result-type-code';
        codeDiv.textContent = type;
        document.getElementById('result-type').parentNode.insertBefore(
            codeDiv,
            document.getElementById('result-title')
        );
    }

    document.getElementById('result-title').textContent = `${result.name} (${result.nickname})`;
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
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    showScreen(startScreen);
}
