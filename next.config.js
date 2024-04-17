/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["three"],
	experimental: {
		appDir: true,
	},
	images: {
		formats: ['image/avif', 'image/webp']
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(mp3)$/,
			use: {
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					publicPath: `/_next/static/audio/`,
					outputPath: `${options.isServer ? "../" : ""}static/audio/`,
				},
			},
		});
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = nextConfig
