// Write your code here.
import './index.css'

const Technologies = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card`}>
      <h1 className="main-heading">{title}</h1>
      <p className="main-para">{description}</p>
      <div className="image">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default Technologies
