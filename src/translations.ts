// Represents the structure of localized strings
export type Locales = {
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

// Object containing localized strings for different languages
export const locales: Locales = {
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
    totalPRReviewedText: "إجمالي العلاقات العامة التي تمت مراجعتها",
    totalIssuesText: "إجمالي المشكلات",
    totalIssuesClosedText: "إجمالي المشكلات التي إغلاقها",
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
    contributedToText: "Contribué à (l'année dernière)",
    rtlDirection: false,
  },
}
