const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

async function runCompletion () {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "best way to learn coding",
    });
    console.log(completion.data);
    // console.log(completion.data.choices[0].text);
    }
    
    runCompletion();