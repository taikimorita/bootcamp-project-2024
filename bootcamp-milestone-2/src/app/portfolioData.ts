import portfolios from "@/database/portfolioSchema";
import connectDB from "@/database/db";

export interface Portfolio {
    project_name: string;
    project: string;
    date: string;
    project_description: string;
    slug: string;
}

const portfolio: Portfolio[] = [
    {
        project_name: "My Website",
        project: "taikimorita.github.io",
        date: "11-05-2024",
        project_description: "This is my website that I made with the Hack4Impact starter pack.",
        slug: "first-entry",
    },
    {
        project_name: "My GitHub Account",
        project: "https://github.com/taikimorita",
        date: "11-06-2024",
        project_description: "This is my GitHub account.",
        slug: "second-entry",
    },
];

async function getPortfolio(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const portfolio = await portfolios.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return portfolio
	} catch (err) {
	    return null
	}
}

export default portfolio;