// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {blogData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = blogData
  return (
    <li className="row">
      <div>
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="small-row">
        <p className="usds">{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
