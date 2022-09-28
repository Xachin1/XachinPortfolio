import React from 'react'

const Skills = () => {
  return (
    <>
    <section className="skills">
        <div className="title">
            <h2>Skills</h2>
        </div>
        <div className="box">

            <div className="card">
                <i className="fab fa-html5"></i>
                <h5>HTML</h5>
                </div>

            <div className="card">
                <i className="fab fa-css3-alt"></i>
                <h5>CSS</h5>
                </div>

             <div className="card">
                <i className="fab fa-js"></i>
                <h5>JavaScript</h5> 
                </div>
            
            <div className="card">
                <i className="fab fa-react"></i>
                <h5>ReactJS</h5>
                </div>

            <div className="card">
                <i className="fab fa-python"></i>
                <h5>Python</h5>
                </div>

                <div className="card">
                    <i className="fab fa-node-js"></i>
                    <h5>NodeJS</h5></div>

                <div className="card">
                    <i className="fas fa-database"></i>
                    <h5>MongoDB / MySQL</h5>
                </div>
        </div>
    </section>

    </>
  )
}

export default Skills