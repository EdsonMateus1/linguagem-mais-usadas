import { GitHubTopLanguages } from "../repository/github_search";
const gitHubTopLanguages = new GitHubTopLanguages();

async function getData() {
  const datasets = await gitHubTopLanguages.getRepositories();
  return {
    labels: [""],
    datasets,
  };
}

export const fakeData = {
  labels: [""],
  datasets: [
    {
      label: "JavaScritp",
      data: [13],
      fill: true,
      borderColor: "#2554FF",
      backgroundColor: "rgba(0, 100, 255, 0.2)",
      borderWidth: 1,
    },
    {
      label: "Vuejs",
      data: [3],
      fill: true,
      borderColor: "#2554FF",
      backgroundColor: "rgba(0, 255, 0, 0.2)",
      borderWidth: 1,
    },
    {
      label: "TS",
      data: [3],
      fill: true,
      borderColor: "#2554FF",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      borderWidth: 1,
    },
    {
      label: "Dart",
      data: [4],
      fill: true,
      borderColor: "#2554FF",
      backgroundColor: "rgba(255, 0, 200, 0.2)",
      borderWidth: 1,
    },
    {
      label: "C++",
      data: [1],
      fill: true,
      borderColor: "#2554FF",
      backgroundColor: "rgba(255, 50, 200, 0.2)",
      borderWidth: 1,
    },
    {
      label: "PHP",
      data: [1],
      fill: true,
      borderColor: "#2554FF",
      backgroundColor: "rgba(255, 100, 200, 0.2)",
      borderWidth: 1,
    },
    {
      label: "CSS",
      data: [1],
      fill: true,
      borderColor: "#2554FF",
      backgroundColor: "rgba(120, 140, 50, 0.2)",
      borderWidth: 1,
    },
    {
      label: "Java",
      data: [1],
      fill: true,
      borderColor: "#2554FF",
      backgroundColor: "rgba(220, 255, 250, 0.2)",
      borderWidth: 1,
    },
    {
      label: "Html",
      data: [1],
      fill: true,
      borderColor: "#2554FF",
      backgroundColor: "rgba(0, 255, 255, 0.2)",
      borderWidth: 1,
    },
    {
      label: "Outros",
      data: [3],
      fill: true,
      borderColor: "#2554FF",
      backgroundColor: "rgba(255, 155, 55, 0.2)",
      borderWidth: 1,
    },
  ],
};

