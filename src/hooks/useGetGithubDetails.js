import axios from "axios";

const GITHUB_USERNAME = "DMad19";

const getUserRepos = async () => {
	try {
		const response = await axios.get(
			`https://api.github.com/users/${GITHUB_USERNAME}/repos`,
			{
				params: {
					sort: "updated",
					per_page: 100,
				},
			}
		);

		// Only return real, described, non-forked projects
		return response.data.filter((repo) => !repo.fork && repo.description);
	} catch (error) {
		console.error("Error fetching repos:", error);
		return [];
	}
};

export default getUserRepos;
