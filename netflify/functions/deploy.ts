const { schedule } = require('@netlify/functions');

export const handler = schedule("* * * * *", async (event) => {
    console.log("Schedule function")
    return {
        statusCode: 200,
        body: "Hello from Netlify functions!",
    };
});
