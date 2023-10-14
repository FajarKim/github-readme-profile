export type Locale = {
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

export const locale: Locale = {
  en: {
    titleCard: "{name}'s GitHub Stats",
    followersText: "Followers",
    followingText: "Following",
    totalReposText: "Total Repository",
    starsCountText: "Star's Count"
    forksCountText: "Fork's Count",
    commitsCountText: "Commit's Count",
    totalPRText: "Total PRs",
    totalPRMergedText: "Total PRs Merged",
    totalIssuesText: "Total Issues",
    contributedToText: "Contributed to (last year)",
  },
}
