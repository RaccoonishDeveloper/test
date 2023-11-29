import "./Description.css";
export default function Description() {
	return (
		<>
			<div className="description__container">
				<div className="description">
					<h1 className="description__name">Netanel Ben Haim</h1>
					<h3 className="description__job">Freelance Photographer</h3>
					<a
						href="https://api.whatsapp.com/message/PGLUNPEW5JEJP1?autoload=1&app_absent=0"
						className="description__link underline"
						target="_blank"
						rel="nonreferrer noopener"
					>
						NetanelsLens.com
					</a>
					<a
						className="description__contact"
						href="https://mail.google.com/mail/u/0/?fs=1&to=benchaimnati@gmail.com&tf=cm"
						target="_blank"
						rel="nonreferrer noopener"
					>
						<button className="description__button">
							<img
								className="description__button-icon"
								src="/Mail.svg"
								alt="Email Icon"
								role="icon"
							></img>
							Email
						</button>
					</a>
				</div>
				<div className="description__sub">
					<div className="about">
						<h2 className="about__title">About</h2>
						<p className="about__description">
							I'm an aspiring photographer who does private photoshoots, mainly
							for cars and motorcycles. I follow best practices in order to
							achieve the best product for my customers. I do this as a hobby so
							my schedule is limited.
						</p>
					</div>
					<div className="interests">
						<h2 className="interests__title">Interests</h2>
						<p className="interests__description">
							Photography enthusiast. Cars & Motorcycles hobbyist. Editing
							expert. Networking guru. Social Media fanatic. Entrepreneur.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
