# Create pull request

A Github action to create pull request from source branch into the target branch

### Action inputs

| Name          | Description                                                               | Default                   | Required |
|---------------|---------------------------------------------------------------------------|---------------------------|----------|
| repo-token    | `GITHUB_TOKEN`                                                            |                           | true     |
| soruce-branch | Name of source branch                                                     | 'develop'                 | false    |
| target-branch | Name of target branch                                                     | 'master'                  | false    |
| pr-title      | Title of pull request                                                     | 'Merge master to develop' | false    |
| pr-body       | Body of pull request                                                      | null                      | false    |
| pr-reviewers  | List of reviewers separated with a comma - 'reviewer_1, reviewer_2, ... ' | null                      | false    |
| pr-assignees  | List of assignees separated with a comma - 'assignee_1, assignee_2, ... ' | null                      | false    |
| pr-labels     | List of labels separated with a comma - 'label_1, label_2, ... '          | null                      | false    |
