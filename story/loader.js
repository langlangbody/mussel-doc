// eslint-disable-next-line @typescript-eslint/no-var-requires
const parseQuery = require("webpack-parse-query");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serialize = require("serialize-javascript");

function generateCode(source, ctx) {
  let code = "";
  const query = parseQuery(ctx.resourceQuery);
  const story = {
    template: source.trim(),
    name: query.name,
    group: query.group,
    methods: query.methods,
    notes: query.notes,
    knobs: query.knobs,
    options: query.options,
    parameters: query.parameters
  };
  console.log("---->", story);
  code += `function (Component) {
    Component.options.__stories = Component.options.__stories || []
    Component.options.__stories.push(${serialize(story)})
  }\n`;
  return code;
}

module.exports = function loader(source) {
  const story = generateCode(source, this);
  this.callback(null, `module.exports = ${story}`);
};
