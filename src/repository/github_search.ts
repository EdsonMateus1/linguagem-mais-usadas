import api from "@/services/api";
import { GithubRepositoryProtocol } from "./protocol/github_repository";

export class GitHubTopLanguages {
  async getRepositories() {
    const languageFrequency: Record<string,number> = {};
    const res = await api.get("EdsonMateus1/repos");
    const data: Array<GithubRepositoryProtocol> = res.data;
    data.forEach((repository) => {
      if (!languageFrequency[repository.language]) {
        languageFrequency[repository.language] = 1;
      } else {
        languageFrequency[repository.language] += 1;
      }
    });
    const languageKey = Object.keys(languageFrequency);
    const chartData = languageKey.map((language) => {
      return {
        label: language === "null" ? "outros" : language,
        data: languageFrequency[language],
        borderColor: "#2554FF",
        backgroundColor: "rgba(0, 100, 255, 0.2)",
        borderWidth: 1,
        fill: true,
      };
    });
    return chartData;
  }
}
