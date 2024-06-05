import React from 'react'

import PropTypes from 'prop-types'

import './features22.css'

const Features22 = (props) => {
  return (
    <div className="features22-layout349 thq-section-padding">
      <div className="features22-max-width thq-section-max-width">
        <div className="features22-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="features22-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="features22-container1 thq-grid-auto-300">
          <div className="features22-card thq-flex-column thq-card">
            <img
              alt={props.feature1ImageAlt}
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672676191i/75513900.jpg"
              className="features22-image thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features22-text03 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features22-card1 thq-flex-column thq-card">
            <img
              alt={props.feature2ImageAlt}
              src="https://sarahjmaas.com/wp-content/uploads/2023/11/9781635574104_min.jpg"
              className="features22-image1 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features22-text05 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features22-card2 thq-flex-column thq-card">
            <img
              alt={props.feature3ImageAlt}
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671336608i/62047984.jpg"
              className="features22-image2 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature3Title}</h1>
            <span className="features22-text06 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features22-card3 thq-flex-column thq-card">
            <img
              alt={props.feature4ImageAlt}
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689301728i/41021967.jpg"
              className="features22-image3 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature4Title}</h1>
            <span className="features22-text08 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features22-card4 thq-flex-column thq-card">
            <img
              alt={props.feature5ImageAlt}
              src="https://cdn.waterstones.com/bookjackets/large/9781/0350/9781035007301.jpg"
              className="features22-image4 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature5Title}</h1>
            <span className="features22-text10 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features22-card5 thq-flex-column thq-card">
            <img
              alt={props.feature6ImageAlt}
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639934603i/59050133.jpg"
              className="features22-image5 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature6Title}</h1>
            <span className="features22-text12 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features22.defaultProps = {
  feature8ImageAlt: 'image',
  feature2Title: 'House of flame and shadow',
  feature8ImageSrc:
    'https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MHw&ixlib=rb-4.0.3&q=80&w=1400',
  feature4ImageAlt: 'Book Clubs Image',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE3OXw&ixlib=rb-4.0.3&q=80&w=1400',
  feature4Description: 'Penelope Douglas',
  feature6ImageAlt: 'image',
  feature7ImageAlt: 'image',
  feature2ImageAlt: 'Cat-Friendly Reading Spaces Image',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1585185160068-8175b6a39d84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MHw&ixlib=rb-4.0.3&q=80&w=1400',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1596890187042-5240d0a9bb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Powerless',
  heading1: 'New releases',
  feature3ImageAlt: 'Online Events Image',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1558201496-a35f22e7fb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MHw&ixlib=rb-4.0.3&q=80&w=1400',
  feature5Description: 'Travis Baldree',
  content1:
    'Discover the new books in our catalog. Be first to leave a review and get a prize from us for being an active purrfect reader!',
  feature6Description: 'H D Carlton',
  feature5Title: 'Legends and Lattes',
  feature3Title: 'Yellowface',
  feature1Description: 'Laura Roberts',
  feature7Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature3Description: 'R F Kuang',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MXw&ixlib=rb-4.0.3&q=80&w=1400',
  feature8Title: 'Feature #8',
  feature7Title: 'Feature #7',
  feature2Description: 'Sarah J Maas',
  feature1ImageAlt: 'Curated Book Selection Image',
  feature6Title: 'Hunting Adeline',
  feature5ImageAlt: 'Subscription Model Image',
  feature8Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature7ImageSrc:
    'https://images.unsplash.com/photo-1569937301527-9336e27c357c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE3OXw&ixlib=rb-4.0.3&q=80&w=1400',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1519645480282-2bcc997ba3b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Title: 'Punk 57',
}

Features22.propTypes = {
  feature8ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature8ImageSrc: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature4Description: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature7ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  heading1: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature5Description: PropTypes.string,
  content1: PropTypes.string,
  feature6Description: PropTypes.string,
  feature5Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature7Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature8Title: PropTypes.string,
  feature7Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature6Title: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature8Description: PropTypes.string,
  feature7ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature4Title: PropTypes.string,
}

export default Features22
