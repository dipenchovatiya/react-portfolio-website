import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.svg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Data Analysis on population of US counties using Choropleth map',
    github: 'https://github.com/dipenchovatiya/Python-Reports/tree/master/Choropleth%20of%20US',
    demo: 'https://github.com/dipenchovatiya/Python-Reports/blob/master/Choropleth%20of%20US/Choropleth.ipynb'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Training a Neural Net for Image Classification',
    github: 'https://github.com/dipenchovatiya/Python-Reports/tree/master/NN_Image_Classification',
    demo: 'https://github.com/dipenchovatiya/Python-Reports/blob/master/NN_Image_Classification/NN_Image_Classification.ipynb'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Designed and developed Garment Store Website to attract more customers',
    github: 'https://github.com/dipenchovatiya/krishcreationgarment.github.io',
    demo: 'https://krishcreationgarment.github.io/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio