import * as core from '@actions/core'
import * as github from '@actions/github'

async function run() {
  const token = core.getInput('repo-token')
  const sourceBranch = core.getInput('source-branch')
  const targetBranch = core.getInput('target-branch')
  const prTitle = core.getInput('pr-title')
  const prBody = core.getInput('pr-body')
  const prReviewers = (core.getInput('pr-reviewers') ?? '').split(',')
  const prAssignees = (core.getInput('pr-assignees') ?? '').split(',')
  const prLabels = (core.getInput('pr-labels') ?? '').split(',')

  const client = github.getOctokit(token)

  try {
    const pullRequest = await client.pulls.create({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      head: sourceBranch,
      base: targetBranch,
      title: prTitle,
      body: prBody,
    })

    const pullNumber = pullRequest.data.number

    try {
      await client.pulls.requestReviewers({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        pull_number: pullNumber,
        reviewers: prReviewers
      })
    } catch (error) {
      core.error(error)
    }

    try {
      await client.issues.addAssignees({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        issue_number: pullNumber,
        assignees: prAssignees
      })
    } catch (error) {
      core.error(error)
    }

    try {
      await client.issues.addLabels({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        issue_number: pullNumber,
        labels: prLabels
      })
    } catch (error) {
      core.error(error)
    }

  } catch (error) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
