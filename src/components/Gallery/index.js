import {Component} from 'react'

import './index.css'

import ThumbnailItem from '../ThumbnailItem'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.
class Gallery extends Component {
  state = {
    activeId: imagesList[0].id,
    onClickImageButton: false,
    initialImageUrl: imagesList[0].imageUrl,
    initialAltText: imagesList[0].imageAltText,
  }

  onChangeImageUrlAndAltText = id => {
    this.setState({activeId: id, onClickImageButton: true})
  }

  render() {
    const {
      onClickImageButton,
      activeId,
      initialImageUrl,
      initialAltText,
    } = this.state
    const filteredElement = imagesList.filter(
      eachItem => eachItem.id === activeId,
    )
    const {imageUrl, imageAltText} = filteredElement[0]
    return (
      <>
        {onClickImageButton ? (
          <img src={imageUrl} alt={imageAltText} className="image-style" />
        ) : (
          <img
            src={initialImageUrl}
            alt={initialAltText}
            className="image-style"
          />
        )}
        <h1 className="heading">Nature Photography</h1>
        <p className="para">Nature Photography by Rahul</p>
        <ul className="list-container">
          {imagesList.map(eachItem => (
            <ThumbnailItem
              key={eachItem.id}
              ThumbnailItemDetails={eachItem}
              onChangeImageUrlAndAltText={this.onChangeImageUrlAndAltText}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default Gallery
