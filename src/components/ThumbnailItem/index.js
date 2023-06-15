// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {ThumbnailItemDetails, onChangeImageUrlAndAltText} = props
  const {thumbnailUrl, thumbnailAltText, id} = ThumbnailItemDetails
  const onClickImageButton = () => {
    onChangeImageUrlAndAltText(id)
  }
  return (
    <li className="listItem">
      <button
        type="button"
        className="image-button"
        onClick={onClickImageButton}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="Thumbnail-style"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
