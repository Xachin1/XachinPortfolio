import React from 'react'

const Projects = () => {
  return (
    <>
    <div className = "projects">
		<div className = "title">
			<h2>My Projects</h2>
		</div>

		<div className = "box">
			<div className = "card">
				<i className = "fas fa-bars"></i>
				<h5>Web Development</h5>
				<div className = "pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					
						<a className = "button" href="#">Read More</a>
					
				</div>
			</div>

			<div className = "card">
				<i className = "far fa-user"></i>
				<h5>Web Development</h5>
				<div className = "pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					
						<a className = "button" href="#">Read More</a>
					
				</div>
			</div>

			<div className = "card">
				<i className = "far fa-bell"></i>
				<h5>Web Development</h5>
				<div className = "pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					
						<a className = "button" href="#">Read More</a>
					
				</div>
			</div>
		</div>
	</div>

    </>
  )
}

export default Projects