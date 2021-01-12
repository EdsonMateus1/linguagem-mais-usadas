import api from "@/services/api";
import { GithubRepositoryProtocol } from "./protocol/github_repository";

export class GitHubTopLanguages {
  async getRepositories() {
    const languageFrequency: Record<string, number> = {};
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
    function getRandom() {
      return Math.floor(Math.random() * 255 + 1);
    }
    const chartData = languageKey.map((language) => {
      const color = `rgba(${getRandom()},${getRandom()},${getRandom()},0.2)`
      return {
        label: language === "null" ? "outros" : language,
        data: [languageFrequency[language]],
        borderColor: "#2554FF",
        backgroundColor: color,
        borderWidth: 1,
        fill: true,
      };
    });
    return {
      labels: [""],
      datasets: chartData,
    };
  }
}
