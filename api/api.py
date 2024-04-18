from flask import Flask, jsonify
from requests import Session
import json

app = Flask(__name__)

@app.route('/fetchBTC', methods=['GET'])
def fetch_btc():
    url = 'http://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
    api_key =  '3388b957-7571-4ccd-8c6d-d1ade4e83c26'

    parameters = {
        'slug': 'bitcoin',
        'convert': 'USD'
    }

    headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': api_key
    }

    session = Session()
    session.headers.update(headers)
    response = session.get(url, params=parameters)
    data = json.loads(response.text)

    if response.status_code == 200:
        btc_price = data['data']['1']['quote']['USD']['price']
        return jsonify({'btc_price': btc_price})
    else:
        return jsonify({'error': 'Failed to fetch data'}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
