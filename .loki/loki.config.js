module.exports = {
  // ...other config goes here
  fileNameFormatter: ({ configurationName, kind, story }) =>
    `${configurationName}/${kind} ${story}`.toLowerCase()
}
