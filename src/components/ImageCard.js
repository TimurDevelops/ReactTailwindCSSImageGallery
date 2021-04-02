import React from "react";
import PropTypes from 'prop-types';

const ImageCard = ({image}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.author}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {image.tags.split(', ').map(tag => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string,
    views: PropTypes.number,
    downloads: PropTypes.number,
    likes: PropTypes.number,
    webformatURL: PropTypes.string,
    author: PropTypes.string
  }),
}

export default ImageCard;