import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const owner = process.env.GITHUB_OWNER || "Sahil-Hode";
const repo = process.env.GITHUB_REPO || "sahil-hode-portfolio";

export async function getFile(path: string) {
  try {
    const { data }: any = await octokit.rest.repos.getContent({
      owner,
      repo,
      path: `src/data/${path}`,
    });
    
    const content = Buffer.from(data.content, "base64").toString();
    return {
      content: JSON.parse(content),
      sha: data.sha,
    };
  } catch (error) {
    console.error(`Error fetching ${path} from GitHub:`, error);
    return null;
  }
}

export async function updateFile(path: string, content: any, sha: string, message: string) {
  try {
    const response = await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: `src/data/${path}`,
      message,
      content: Buffer.from(JSON.stringify(content, null, 2)).toString("base64"),
      sha,
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating ${path} on GitHub:`, error);
    throw error;
  }
}
