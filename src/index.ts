import * as core from '@actions/core'
import * as github from '@actions/github'

async function run() {
  const token = core.getInput('repo-token')
  const sourceBranch = core.getInput('source-branch')
  const targetBranch = core.getInput('target-branch')

  const client = github.getOctokit(token)

  try {
    await client.pulls.create({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      head: sourceBranch,
      base: targetBranch,
      title: `Merge ${sourceBranch} to ${targetBranch}`,
      body: '',
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
