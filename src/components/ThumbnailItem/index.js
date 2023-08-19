// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, getActiveThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail-active-image' : 'thumbnail-image'

  const onClickThumbnail = () => {
    getActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        className="thumbnail-button"
        onClick={onClickThumbnail}
        type="button"
      >
        <img
          src={thumbnailUrl}
          className={thumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
