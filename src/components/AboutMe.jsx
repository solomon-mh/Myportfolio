import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../utils/Title";
import { handleDownload } from "../utils/cvDownloader";
import coder from "../assets/sample/coder2.jpg";
import Section from "./Section";
import { ShootingStarsAndStarsBackground } from "./ShootingStarsAndStarsBackground";

const AboutMe = () => {
	return (
		<Section
			className="md:px-16 text-center py-8 md:py-28"
			crosses
			crossesOffset="lg:translate-y-[5.25rem]"
			customPaddings
			id="about"
		>
			<ShootingStarsAndStarsBackground />
			<div className="px-4 max-w-6xl">
				<Title title="About Me" subTitle="My introduction" />
				<section className="lg:flex gap-8 items-center mt-4 z-50">
					<article className="lg:w-1/2 text-center md:text-left">
						<p className="font-serif text-lg mx-8 break-words mb-6">
							I&apos;m a skilled software developer with experience in
							TypeScript and JavaScript and PHP, and expertise in frameworks
							like React, Node.js, Next.js, Nest.Js and Laravel. I&apos;m a
							quick learner and collaborate closely with clients to create
							efficient, scalable, and user-friendly solutions that solve
							real-world problems. Let&apos;s work together to bring your ideas
							to life!
						</p>

						<div className="mb-6 md:mx-auto gap-2 sm:gap-8 w-4/5 flex px-6 mt-6 leading-4 justify-left">
							<div className="text-center">
								<b className="text-sm text-brightRed">03+</b>
								<small className="block text-gray-400">Years Experience</small>
							</div>
							<div className="text-center">
								<b className="text-sm text-brightRed">15+</b>
								<small className="block text-gray-400">
									Completed Projects
								</small>
							</div>
							<div className="text-center">
								<b className="text-sm text-brightRed">02+</b>
								<small className="block text-gray-400">Companies Worked</small>
							</div>
						</div>
						<div className="resume-btn text-center md:text-left mx-8">
							<button
								onClick={handleDownload}
								className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
							>
								<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
								<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-blue-500 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
									Download CV
									<i>
										<FontAwesomeIcon icon={faCircleArrowDown} />
									</i>{" "}
								</span>
							</button>
						</div>
					</article>

					<div className="hidden lg:block md:w-1/2 mt-8 md:mt-0 md:mr-8">
						<div className="relative">
							<img
								src={coder}
								alt="coder"
								className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-lg"></div>
						</div>
					</div>
				</section>
			</div>
		</Section>
	);
};

export default AboutMe;
