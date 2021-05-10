# Create pull request

A Github action to create pull request from source branch into the target branch

### Action inputs

| Name          | Description           | Default            | Required |
|---------------|-----------------------|--------------------|----------|
| repo-token    | `GITHUB_TOKEN`        |                    | true     |
| soruce-branch | Name of source branch |                    | true     |
| target-branch | Name of target branch |                    | true     |
| pr-title      | Title of pull request | 'New pull request' | false    |
| pr-body       | Body of pull request  | null               | false    |
| pr-reviewers  | List of reviewers     | null               | false    |
| pr-assignees  | List of assignees     | null               | false    |
| pr-labels     | List of labels        | null               | false    |

### Example

```
- name: Create pull request
  uses: fjenik/create-pull-request@0.0.7
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}
    target-branch: develop
    source-branch: main
    pr-body: "Auto-generated pull request"
    pr-title: "Merge master to develop"
    pr-labels: |
      duplicate
      bug
      invalid
    pr-assignees: |
      assignee_1
      assignee_2
    pr-reviewers: |
      reviewer_1
      reviewer_2
```
