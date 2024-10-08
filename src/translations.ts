/**
 * Type representing for local translation card strings.
 *
 * @typedef {Object} Locales
 * @property {string} titleCard - Title for the GitHub stats card.
 * @property {string} [followersText] - Text for followers count.
 * @property {string} [followingText] - Text for following count.
 * @property {string} [totalReposText] - Text for total repository count.
 * @property {string} [starsCountText] - Text for stars count.
 * @property {string} [forksCountText] - Text for forks count.
 * @property {string} [commitsCountText] - Text for commits count.
 * @property {string} [totalPRText] - Text for total pull requests count.
 * @property {string} [totalPRMergedText] - Text for total merged pull requests count.
 * @property {string} [totalPRReviewedText] - Text for total pull requests reviewed count.
 * @property {string} [totalIssuesText] - Text for total issues count.
 * @property {string} [totalIssuesClosedText] - Text for total closed issues count.
 * @property {string} [totalDiscussionStartedText] - Text for total discussions started count.
 * @property {string} [totalDiscussionAnsweredText] - Text for total discussions answered count.
 * @property {string} [contributedToText] - Text for contributed repositories (last year).
 * @property {boolean|string} rtlDirection - Flag indicating right-to-left direction or a string specifying direction.
 */
type Locales = {
  [key: string]: {
    titleCard: string;
    followersText?: string;
    followingText?: string;
    totalReposText?: string;
    starsCountText?: string;
    forksCountText?: string;
    commitsCountText?: string;
    totalPRText?: string;
    totalPRMergedText?: string;
    totalPRReviewedText?: string;
    totalIssuesText?: string;
    totalIssuesClosedText?: string;
    totalDiscussionStartedText?: string;
    totalDiscussionAnsweredText?: string;
    contributedToText?: string;
    rtlDirection: boolean | string;
  };
};

/**
 * Localization strings for different languages.
 *
 * @type {Locales}
 */
const locales: Locales = {
  en: {
    titleCard: "{name}'s GitHub Stats",
    followersText: "Followers",
    followingText: "Following",
    totalReposText: "Total Repository",
    starsCountText: "Star's Count",
    forksCountText: "Fork's Count",
    commitsCountText: "Commit's Count",
    totalPRText: "Total PRs",
    totalPRMergedText: "Total PRs Merged",
    totalPRReviewedText: "Total PRs Reviewed",
    totalIssuesText: "Total Issues",
    totalIssuesClosedText: "Total Issues Closed",
    totalDiscussionStartedText: "Discussions Started",
    totalDiscussionAnsweredText: "Discussions Answered",
    contributedToText: "Contributed to (last year)",
    rtlDirection: false,
  },
  id: {
    titleCard: "Statistik GitHub {name}",
    followersText: "Pengikut",
    followingText: "Mengikuti",
    totalReposText: "Total Repositori",
    starsCountText: "Jumlah Bintang",
    forksCountText: "Jumlah Fork",
    commitsCountText: "Jumlah Komit",
    totalPRText: "Total PR",
    totalPRMergedText: "Total PR Digabungkan",
    totalPRReviewedText: "Total PR Ditinjau",
    totalIssuesText: "Total Masalah Dilaporkan",
    totalIssuesClosedText: "Total Masalah Ditutup",
    totalDiscussionStartedText: "Diskusi Dimulai",
    totalDiscussionAnsweredText: "Diskusi Dijawab",
    contributedToText: "Berkontribusi ke (tahun lalu)",
    rtlDirection: false,
  },
  ko: {
    titleCard: "{name}의 GitHub 통계",
    followersText: "팔로워",
    followingText: "팔로잉",
    totalReposText: "총 리포지토리",
    starsCountText: "별의 수",
    forksCountText: "포크 수",
    commitsCountText: "커밋 수",
    totalPRText: "총 PR",
    totalPRMergedText: "병합된 총 PR",
    totalPRReviewedText: "검토된 총 PR",
    totalIssuesText: "총 이슈",
    totalIssuesClosedText: "종결된 총 문제",
    totalDiscussionStartedText: "시작된 토론",
    totalDiscussionAnsweredText: "답변된 토론",
    contributedToText: "(작년)에 기여",
    rtlDirection: false,
  },
  ar: {
    titleCard: "إحصائيات GitHub الخاصة ب {name}",
    followersText: "المتابعون",
    followingText: "يتابع",
    totalReposText: "إجمالي المستودع",
    starsCountText: "عدد النجوم",
    forksCountText: "عدد الشوكة",
    commitsCountText: "عدد الالتزام",
    totalPRText: "إجمالي العلاقات العامة",
    totalPRMergedText: "إجمالي العلاقات العامة المدمجة",
    totalPRReviewedText: "إجمالي العلاقات العامة تمت مراجعتها",
    totalIssuesText: "إجمالي المشكلات",
    totalIssuesClosedText: "إجمالي المشكلات التي إغلاقها",
    totalDiscussionStartedText: "بدء المناقشات",
    totalDiscussionAnsweredText: "الردود على المناقشات",
    contributedToText: "ساهم في (العام الماضي)",
    rtlDirection: true,
  },
  ja: {
    titleCard: "{name}の GitHub 統計",
    followersText: "フォロワー",
    followingText: "フォロー中",
    totalReposText: "トータルリポジトリ",
    starsCountText: "星の数",
    forksCountText: "フォークの数",
    commitsCountText: "コミットの数",
    totalPRText: "トータル PR",
    totalPRMergedText: "マージされた PR の総数",
    totalPRReviewedText: "レビューされた PR の総数",
    totalIssuesText: "トータル問題点",
    totalIssuesClosedText: "クローズされた課題の総数",
    totalDiscussionStartedText: "開始されたディスカッションの",
    totalDiscussionAnsweredText: "回答されたディスカッションの",
    contributedToText: "貢献したリポジトリ (昨年)",
    rtlDirection: false,
  },
  fr: {
    titleCard: "Statistiques GitHub de {name}",
    followersText: "Suiveurs",
    followingText: "Suivant",
    totalReposText: "Total des Référentiel",
    starsCountText: "Nombre Total d'Étoiles",
    forksCountText: "Nombre Total de Forks",
    commitsCountText: "Nombre Total de Commits",
    totalPRText: "Total des PRs",
    totalPRMergedText: "Total de PR Fusionnés",
    totalPRReviewedText: "Total de PR Examinés",
    totalIssuesText: "Total d'Issue",
    totalIssuesClosedText: "Total d'Issue Clôturées",
    totalDiscussionStartedText: "Discussions Entamées",
    totalDiscussionAnsweredText: "Discussions Répondues",
    contributedToText: "Contribué à (l'année dernière)",
    rtlDirection: false,
  },
  fa: {
    titleCard: "آمار GitHub {name}",
    followersText: "دنبال‌کنندگان",
    followingText: "دنبال‌شونده",
    totalReposText: "تعداد کل مخزن",
    starsCountText: "تعداد ستاره‌ها",
    forksCountText: "تعداد Fork‌ها",
    commitsCountText: "تعداد Commit‌ها",
    totalPRText: "تعداد کل PRها",
    totalPRMergedText: "تعداد کل PRهای ادغام شده",
    totalPRReviewedText: "تعداد کل PRهای بررسی شده",
    totalIssuesText: "تعداد کل مسائل",
    totalIssuesClosedText: "تعداد کل مسائل بسته‌شده",
    totalDiscussionStartedText: "بحث‌های شروع شده",
    totalDiscussionAnsweredText: "بحث‌های پاسخ داده شده",
    contributedToText: "مشارکت در (سال گذشته)",
    rtlDirection: true,
  },
  ms: {
    titleCard: "Statistik GitHub {name}",
    followersText: "Pengikut",
    followingText: "Mengikuti",
    totalReposText: "Jumlah Repositori",
    starsCountText: "Jumlah Bintang",
    forksCountText: "Jumlah Fork",
    commitsCountText: "Jumlah Commit",
    totalPRText: "Jumlah PR",
    totalPRMergedText: "Jumlah PR Digabungkan",
    totalPRReviewedText: "Jumlah PR Dikaji",
    totalIssuesText: "Jumlah Isu",
    totalIssuesClosedText: "Jumlah Isu Ditutup",
    totalDiscussionStartedText: "Perbincangan Dimulakan",
    totalDiscussionAnsweredText: "Perbincangan Dijawab",
    contributedToText: "Menyumbang kepada (tahun lalu)",
    rtlDirection: false,
  },
  su: {
    titleCard: "Statistik GitHub {name}",
    followersText: "Pengikut",
    followingText: "Mengikuti",
    totalReposText: "Total Répositori",
    starsCountText: "Jumlah Béntang",
    forksCountText: "Jumlah Fork",
    commitsCountText: "Jumlah Commit",
    totalPRText: "Total PR",
    totalPRMergedText: "Total PR Digabungkeun",
    totalPRReviewedText: "Total PR Ditilik",
    totalIssuesText: "Total Isu",
    totalIssuesClosedText: "Total Isu Ditutup",
    totalDiscussionStartedText: "Sawala Dimimitian",
    totalDiscussionAnsweredText: "Sawala Diwaler",
    contributedToText: "Nyumbang ka (taun kamari)",
    rtlDirection: false,
  },
  pt: {
    titleCard: "Estatísticas do GitHub de {name}",
    followersText: "Seguidores",
    followingText: "A Seguir",
    totalReposText: "Total de Repositórios",
    starsCountText: "Contagem de Estrelas",
    forksCountText: "Contagem de Forks",
    commitsCountText: "Contagem de Commits",
    totalPRText: "Total de PRs",
    totalPRMergedText: "Total de PRs Fundidos",
    totalPRReviewedText: "Total de PRs Revistos",
    totalIssuesText: "Total de Issues",
    totalIssuesClosedText: "Total de Issues Fechados",
    totalDiscussionStartedText: "Discussões Iniciadas",
    totalDiscussionAnsweredText: "Discussões Respondidas",
    contributedToText: "Contribuiu em (ano passado)",
    rtlDirection: false,
  },
  "pt-BR": {
     titleCard: "Estatísticas do GitHub de {name}",
     followersText: "Seguidores",
     followingText: "Seguindo",
     totalReposText: "Total de Repositórios",
     starsCountText: "Contagem de Estrelas",
     forksCountText: "Contagem de Forks",
     commitsCountText: "Contagem de Commits",
     totalPRText: "Total de PRs",
     totalPRMergedText: "Total de PRs Mesclados",
     totalPRReviewedText: "Total de PRs Revisados",
     totalIssuesText: "Total de Issues",
     totalIssuesClosedText: "Total de Issues Encerradas",
     totalDiscussionStartedText: "Discussões Iniciadas",
     totalDiscussionAnsweredText: "Discussões Respondidas",
     contributedToText: "Contribuiu para (ano passado)",
     rtlDirection: false,
  },
  es: {
    titleCard: "Estadísticas de GitHub de {name}",
    followersText: "Seguidores",
    followingText: "Siguiendo",
    totalReposText: "Total de Repositorios",
    starsCountText: "Cantidad de Estrellas",
    forksCountText: "Cantidad de Forks",
    commitsCountText: "Cantidad de Commits",
    totalPRText: "Total de PRs",
    totalPRMergedText: "Total de PRs Fusionados",
    totalPRReviewedText: "Total de PRs Revisados",
    totalIssuesText: "Total de Issues",
    totalIssuesClosedText: "Total de Issues Cerrados",
    totalDiscussionStartedText: "Discusiones Iniciadas",
    totalDiscussionAnsweredText: "Discusiones Respondidas",
    contributedToText: "Contribuciones (último año)",
    rtlDirection: false,
  },
}

export { Locales, locales };
export default locales;
