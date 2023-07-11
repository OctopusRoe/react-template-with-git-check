/*
 * @Author: OctopusRoe
 * @Date: 2023-07-10 17:04:52
 * @LastEditors: OctopusRoe
 * @LastEditTime: 2023-07-10 18:36:08
 * @Description:
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'build',
        'chore',
        'revert',
        'style',
        'test'
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
};
