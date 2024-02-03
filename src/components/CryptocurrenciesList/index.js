// Write your JS code here
import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrencyList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="images"
        />
        <div className="lower-box-heading">
          <div className="first-row">
            <h2 className="coin-type">Coin Type</h2>
            <div className="small-row">
              <h3 className="usd">USD</h3>
              <h4 className="euro">EURO</h4>
            </div>
          </div>
          <div data-testid="loader">
            {isLoading ? (
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            ) : (
              blogsData.map(each => (
                <CryptocurrencyItem blogData={each} key={each.id} />
              ))
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default CryptocurrencyList
