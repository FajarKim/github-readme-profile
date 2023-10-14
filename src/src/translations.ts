export type Locales = {
  [key: string]: {
    titleCard: string;
    followersText: string;
    followingText: string;
    totalReposText: string;
    starsCountText: string;
    forksCountText: string;
    commitsCountText: string;
    totalPRText: string;
    totalPRMergedText: string;
    totalIssuesText: string;
    contributedToText: string;
  };
};

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
    totalIssuesText: "Total Issues",
    contributedToText: "Contributed to (last year)",
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
    totalIssuesText: "Total Masalah Dilaporkan",
    contributedToText: "Berkontribusi ke (tahun lalu)",
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
    totalIssuesText: "총 문제",
    contributedToText: "(작년)에 기여",
  },
}
