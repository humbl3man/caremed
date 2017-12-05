module.exports = {
	siteMetadata: {
		title: `Caremed Transport`
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: '/src/utils/typography.js'
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-styled-jsx`
	],
	pathPrefix: '/'
};
