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
    totalPRMergedText: "Total PR Digabung",
    totalIssuesText: "Total Masalah Dilaporkan",
    contributedToText: "Berkontribusi ke (tahun lalu)",
  },
}
