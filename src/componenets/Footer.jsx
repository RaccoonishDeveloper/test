import "./Footer.css";
export default function Footer() {
	return (
		<>
			<footer className="footer__container">
				<a
					className="footer__icons"
					id="twitterIcon"
					href="https://twitter.com/HainNetanel"
					target="_blank"
					rel="nonreferrer noopener"
				>
					<img
						src="/Icons/Twitter Icon.png"
						alt="Twitter"
						width="30px"
						height="30px"
						role="img"
					></img>
				</a>

				<a
					className="footer__icons"
					id="instagramIcon"
					href="https://www.instagram.com/netanel3126/?utm_source=qr"
					target="_blank"
					rel="nonreferrer noopener"
				>
					<img
						src="/Icons/Instagram Icon.png"
						alt="Instagram"
						width="30px"
						height="30px"
						role="img"
					></img>
				</a>
				<a
					className="footer__icons"
					id="linkedinIcon"
					href="https://www.linkedin.com/in/netanel-ben-haim-07ab1a2a1/"
					target="_blank"
					rel="nonreferrer noopener"
				>
					<img
						src="/Icons/Linkedin Icon.png"
						alt="Linkedin"
						width="30px"
						height="30px"
						role="img"
					></img>
				</a>
				<a
					className="footer__icons"
					id="githubIcon"
					href="https://github.com/Nati525204"
					target="_blank"
					rel="nonreferrer noopener"
				>
					<img
						src="/Icons/GitHub Icon.png"
						alt="Github"
						width="30px"
						height="30px"
						role="img"
					></img>
				</a>
			</footer>
		</>
	);
}
