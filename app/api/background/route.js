export default async function handler(req, res) {
    console.log("does this work?");
  };

  handler.config = {
    type: "experimental-background",
  };
  
  module.exports = handler;