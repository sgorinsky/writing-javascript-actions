const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  const issueTitle = core.getInput("issue-title");
  const catFact = core.getInput("joke");
  const token = core.getInput("repo-token");

  try {
    const octokit = new github.GitHub(token);

    const newIssue = await octokit.issues.create({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      title: issueTitle,
      body: catFact
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();


