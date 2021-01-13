import api from "@/services/api";
import {
  ChartDataProtocol,
  DatasetsProtocol,
  GithubRepositoryProtocol,
} from "./protocol/github_repository";

export class GitHubTopLanguages {
  async getRepositories(): Promise<ChartDataProtocol | undefined> {
    function getRandom(): number {
      return Math.floor(Math.random() * 255 + 1);
    }
    try {

      const languageFrequency: Record<string, number> = {};
      const res = await api.get("EdsonMateus1/repos");
      const data: Array<GithubRepositoryProtocol> = res.data;

      data.forEach((repository: GithubRepositoryProtocol) => {
        if (!languageFrequency[repository.language]) {
          languageFrequency[repository.language] = 1;
        } else {
          languageFrequency[repository.language] += 1;
        }
      });

      const languageKey: Array<string> = Object.keys(languageFrequency);
      const chartData: Array<DatasetsProtocol> = languageKey.map((language) => {
        const color: string = `rgba(${getRandom()},${getRandom()},${getRandom()},0.5)`;
        return {
          label: language === "null" ? "outros" : language,
          data: [languageFrequency[language]],
          borderColor: "#000",
          backgroundColor: color,
          borderWidth: 1,
          fill: true,
        };
      });
      
      return {
        labels: [""],
        datasets: chartData,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
